import { AuthorizationCode } from "simple-oauth2";

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
