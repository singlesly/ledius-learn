import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BankingController } from './banking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank, Card } from './banking';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '31.129.105.143',
      port: 5432,
      username: 'postgres',
      password: '*k34kKdm',
      database: 'banking',
      entities: [Card, Bank],
    }),
  ],
  controllers: [AppController, BankingController],
})
export class AppModule {}
