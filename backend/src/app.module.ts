import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoginController } from "./login/login.controller";
import { LoginService } from "./login/login.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AppModule {}
