import { randomUUID } from 'crypto';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('banks')
export class Bank {
  @PrimaryColumn('uuid')
  id: string = randomUUID();

  @Column()
  name: string;

  @OneToMany(() => Card, (card) => card.bank)
  cards: Card[];
  constructor(name: string) {
    this.name = name;
  }

  addCard(card: Card) {
    if (!this.cards) {
      this.cards = [];
    }
    this.cards.push(card);
  }
}

@Entity('cards')
export class Card {
  @PrimaryColumn('uuid')
  id: string = randomUUID();

  @Column()
  owner: string;

  @Column()
  number: string;

  @Column()
  cvv: string;

  @Column()
  balance: number;

  @ManyToOne(() => Bank)
  bank: Bank;

  constructor(owner: string, number: string, cvv: string, balance: number) {
    this.owner = owner;
    this.number = number;
    this.cvv = cvv;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }

  transfer(card: Card, amount: number) {
    this.withdraw(amount);
    card.deposit(amount);
  }
}

/**
 * Добавить карту в банк (создать)
 * Пополнить карту
 * Вывести средства
 * Сделать перевод с карты на карту
 */
