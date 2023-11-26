import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BankingController } from "./banking.controller";

@Module({
  controllers: [AppController, BankingController],
})
export class AppModule {}
