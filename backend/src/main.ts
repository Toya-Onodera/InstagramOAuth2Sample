import { NestFactory } from "@nestjs/core";
import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { readFileSync } from "fs";
import cookieParser from "cookie-parser";
import { json } from "body-parser";
import express from "express";
import * as https from "https";

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync("assets/ssl/localhost.key"),
    cert: readFileSync("assets/ssl/localhost.crt"),
  };

  const port = Number(process.env.PORT) || 14000;
  const server = express();
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server),
  );

  app.use(json({ limit: "50mb" }));
  app.use(cookieParser());

  await app.init();
  https.createServer(httpsOptions, server).listen(port);
}
bootstrap();
