export class Bank {
  name: string;
  cards: Card[] = [];
  constructor(name: string) {
    this.name = name;
  }

  addCard(card: Card) {
    this.cards.push(card);
  }
}

export class Card {
  owner: string;
  number: string;
  cvv: string;
  balance: number;

  constructor(
    owner: string,
    number: string,
    cvv: string,
    balance: number,
  ) {
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
