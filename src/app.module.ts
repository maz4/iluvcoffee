import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URI: Joi.required(),
        DATABASE_PORT: Joi.string().default('27017'),
      }),
    }),
    CoffeesModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/nest-course'), - old version
    MongooseModule.forRoot(
      `${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}`,
      {
        dbName: process.env.DATABASE_NAME,
      },
    ),
    CoffeeRatingModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
