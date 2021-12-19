import { Injectable } from "@nestjs/common";
import { randomBytes } from "crypto";
import { Request, Response } from "express";

import { instagramOAuth2Client } from "../../lib/instagram/";
import {
  createFirebaseAccountForInstagram,
  getInstagramLongToken,
  getInstagramShortToken,
  getInstagramUserName,
} from "../../lib/instagram/instagram";

@Injectable()
export class LoginService {
  startInstagramOAuth2(req: Request, res: Response): void {
    const state = req.cookies.state || randomBytes(20).toString("hex");

    const secureCookie = req.get("host").indexOf("localhost:") !== 0;
    res.cookie("state", state.toString(), {
      maxAge: 3600000,
      secure: secureCookie,
      httpOnly: true,
    });

    const authorizationCode = instagramOAuth2Client();
    const redirectUri = authorizationCode.authorizeURL({
      redirect_uri: `${req.protocol}://${req.get(
        "host",
      )}/login/instagram-token/`,
      scope: "user_profile",
      state: state,
    });

    return res.redirect(redirectUri);
  }

  async registerInstagramUserToken(req: Request, res: Response): Promise<any> {
    if (!req.cookies.state) {
      res
        .status(400)
        .send(
          "State cookie not set or expired.Maybe you took too long to authorize.Please try again.",
        );
    } else if (req.cookies.state !== req.query.state) {
      res.status(400).send("State validation failed");
    }

    const instagramShortToken = await getInstagramShortToken(req);
    const shortAccessToken = instagramShortToken.access_token;

    const getInstagramLongTokenTask = getInstagramLongToken(shortAccessToken);
    const getInstagramUserNameTask = getInstagramUserName(shortAccessToken);

    const [instagramLongToken, instagramUserName] = await Promise.all([
      getInstagramLongTokenTask,
      getInstagramUserNameTask,
    ]);

    const firebaseSaveData = {
      userId: instagramUserName.username,
      instagramId: instagramUserName.id,
      accessToken: instagramLongToken.access_token,
    };

    const firebaseToken = await createFirebaseAccountForInstagram(
      firebaseSaveData,
    );

    const redirectUri = `http://localhost:3000?instagram_token=${firebaseToken}`;

    return res.redirect(redirectUri);
  }
}
