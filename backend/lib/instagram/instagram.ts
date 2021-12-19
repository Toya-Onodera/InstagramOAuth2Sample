import { Request } from "express";
import { AuthorizationCode } from "simple-oauth2";
import fetch from "node-fetch";

import {
  instagramLongToken,
  instagramShortToken,
  instagramUserField,
} from "./interface";
import { objectToUriStrings } from "../utils";

import { firebaseAdmin, auth, database } from "../firebase";

const USING_INSTAGRAM_GRAPH_API = "v12.0";

export const instagramOAuth2Client = () => {
  const credentials = {
    client: {
      id: process.env.INSTAGRAM_CLIENT_ID,
      secret: process.env.INSTAGRAM_CLIENT_SECRET,
    },
    auth: {
      tokenHost: "https://api.instagram.com",
      tokenPath: "/oauth/access_token",
      authorizePath: "/oauth/authorize",
    },
    options: {
      authorizationMethod: "body",
    },
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return new AuthorizationCode(credentials);
};

// 長期アクセストークン用の短期アクセストークンを取得する関数
export async function getInstagramShortToken(
  req: Request,
): Promise<instagramShortToken> {
  const authorizationCode = instagramOAuth2Client();
  const { token } = await authorizationCode.getToken({
    code: req.query.code as string,
    redirect_uri: `${req.protocol}://${req.get("host")}/login/instagram-token/`,
  });

  return token as instagramShortToken;
}

// 長期アクセストークンを取得する関数
export async function getInstagramLongToken(
  shortAccessToken: string,
): Promise<instagramLongToken> {
  const params = {
    grant_type: "ig_exchange_token",
    client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
    access_token: shortAccessToken,
  };

  const response = await fetch(
    `https://graph.instagram.com/access_token?${objectToUriStrings(params)}`,
  );

  const token = await response.json();
  return token as instagramLongToken;
}

// ユーザーIDを取得する関数
export async function getInstagramUserName(
  shortAccessToken: string,
): Promise<instagramUserField> {
  const params = {
    fields: "id,username",
    access_token: shortAccessToken,
  };

  const response = await fetch(
    `https://graph.instagram.com/${USING_INSTAGRAM_GRAPH_API}/me?${objectToUriStrings(
      params,
    )}`,
  );

  const token = await response.json();
  return token as instagramUserField;
}

// Instagram のアカウントを Firebase に登録する関数
export async function createFirebaseAccountForInstagram({
  userId,
  instagramId,
  accessToken,
}): Promise<string> {
  const uid = `instagram:${instagramId}`;
  const databaseTask = database().ref(`/${uid}`).set(accessToken);

  const userCreationTask = auth()
    .updateUser(uid, {
      displayName: userId,
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        return auth().createUser({
          uid: uid,
          displayName: userId,
        });
      }

      throw error;
    });

  await Promise.all([databaseTask, userCreationTask]);
  return await auth().createCustomToken(uid, {
    user_id: userId,
  });
}
