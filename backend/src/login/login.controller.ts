import { Controller, Get, Query, Req, Res } from "@nestjs/common";
import { LoginService } from "./login.service";
import { Request, Response } from "express";

@Controller("login")
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  startInstagramOAuth2(
    @Req() req: Request,
    @Res() res: Response,
    @Query("type") type: string,
  ) {
    switch (type) {
      case "ig":
        return this.loginService.startInstagramOAuth2(req, res);
      default:
        // FIXME: とりあえず
        return res.send("failure");
    }
  }
}
