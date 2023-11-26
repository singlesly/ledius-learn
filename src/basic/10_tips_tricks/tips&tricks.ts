(() => {
  let DEFAULT_BALANCE = 100;

  class Bank {
    name: string;
    cards: Card[] = [];
    constructor(name: string) {
      this.name = name;
    }

    addCard(card: Card) {
      this.cards.push(card);
    }
  }

  class Card {
    owner: string;
    number: string;
    cvv: string;
    balance: number;

    constructor(
      owner: string,
      number: string,
      cvv: string,
      balance: number = DEFAULT_BALANCE,
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

  const bank = new Bank('Зеленая монополия');

  const card = new Card('Иван Петров', '2200_0000_1111_2222', '999', 4000);
  const cardOleg = new Card('Олег Петров', '2200_0000_3333_2222', '999');

  bank.addCard(card);
  bank.addCard(cardOleg);

  printBankBalances(bank);
  console.log('------');

  card.transfer(cardOleg, 1000);

  printBankBalances(bank);

  function printBankBalances(bank: Bank) {
    for (const item of bank.cards) {
      console.log(item.owner, item.number, item.balance);
    }
  }

})()
