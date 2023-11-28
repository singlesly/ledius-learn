import { Body, Controller, Get, Post } from '@nestjs/common';
import { Bank, Card } from './banking';
import { AddCardDto } from './dto/add-card.dto';
import { DepositDto } from './dto/deposit.dto';
import { WithdrawalDto } from './dto/withdrawal.dto';
import { TransferDto } from './dto/transfer.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class BankingController {
  bank = new Bank('Green Bank');

  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  @Post('add-card')
  public async addCard(@Body() body: AddCardDto) {
    const card = new Card(body.owner, body.number, body.cvv, 0);
    this.bank.addCard(card);
    await this.cardRepository.save(card);

    return {
      bankName: this.bank.name,
      card: card,
    };
  }

  @Get('cards')
  public getCards() {
    return this.cardRepository.find();
  }

  @Post('deposit')
  public async deposit(@Body() body: DepositDto) {
    const card = await this.cardRepository.findOneOrFail({
      where: {
        id: body.cardId,
      },
    });

    card.deposit(body.amount);

    await this.cardRepository.save(card);

    return card;
  }

  @Post('withdrawal')
  public async withdrawal(@Body() body: WithdrawalDto) {
    const card = await this.cardRepository.findOneOrFail({
      where: {
        id: body.cardId,
      },
    });

    card.withdraw(body.amount);

    await this.cardRepository.save(card);

    return card;
  }

  @Post('transfer')
  public async transfer(@Body() body: TransferDto) {
    const fromCard = await this.cardRepository.findOneOrFail({
      where: {
        id: body.fromCardId,
      },
    });
    const toCard = await this.cardRepository.findOneOrFail({
      where: {
        id: body.toCardId,
      },
    });

    fromCard.transfer(toCard, body.amount);

    await this.cardRepository.save([fromCard, toCard]);

    return {
      fromCard,
      toCard,
    };
  }
}
