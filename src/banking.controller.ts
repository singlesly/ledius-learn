import { Body, Controller, Get, Post } from "@nestjs/common";
import { Bank, Card } from './banking';

@Controller()
export class BankingController {
  bank = new Bank('Green Bank');

  @Post('add-card')
  public addCard(@Body() body) {
    const card = new Card(body.owner, body.number, body.cvv, 0);
    this.bank.addCard(card);

    return {
      bankName: this.bank.name,
      card: card,
    };
  }

  @Get('cards')
  public getCards() {
    return this.bank.cards;
  }

  @Post('deposit')
  public deposit(@Body() body) {
    const cardIndex = body.cardIndex;

    const card = this.bank.cards[cardIndex];

    card.deposit(body.amount);

    return card;
  }

  @Post('withdrawal')
  public withdrawal(@Body() body) {
    const cardIndex = body.cardIndex;

    const card = this.bank.cards[cardIndex];

    card.withdraw(body.amount);

    return card;
  }

  @Post('transfer')
  public transfer(@Body() body) {
    const fromIndex = body.fromIndex;
    const toIndex = body.toIndex;

    const fromCard = this.bank.cards[fromIndex];
    const toCard = this.bank.cards[toIndex];

    fromCard.transfer(toCard, body.amount);

    return {
      fromCard,
      toCard,
    };
  }
}
