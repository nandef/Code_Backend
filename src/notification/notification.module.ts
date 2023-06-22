import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get("POSTGRES_HOST"),
          port: configService.get("POSTGRES_PORT"),
          username: configService.get("POSTGRES_USER"),
          password: configService.get("POSTGRES_PASSWORD"),
          database: configService.get("POSTGRES_DB"),
          entities: [],
          synchronize: true,
        }),
      }),
      UsersModule,
      Notification, // Ajoutez le module "notification" ici
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}
