import { Injectable } from "@nestjs/common";
import { randomBytes } from "crypto";
import { Request, Response } from "express";

import { instagramOAuth2Client } from "../../lib/instagram/";

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
      redirect_uri: `${req.protocol}://${req.get("host")}/login/short-token/`,
      scope: "user_profile",
      state: state,
    });

    return res.redirect(redirectUri);
  }
}
