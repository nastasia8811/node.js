// Виокремити interface ICard який буде оголошувати усі методи, яки ми реалізували у класі Card
// Клас Card має реалізовувати інтерфейс ICard.
// Створити клас BonusCard, який має реалізовувати інтерфейс ICard. Він має робити все теж саме, але при додаванні транзакції, має додавати ще одну транзакцію розміром 10% від суми транзакції.
//  Створити клас Pocket, він має містити в собі список карток та зазначені нижче методи.
// Метод AddCard який приймає Name та Card. Він зберігає у себе картку за переданим іменем.
//    Метод RemoveCard який приймає Name. Він видаляє картку за переданим іменем.
//    Метод GetCard який приймає Name. Він віддає картку за переданим іменем.
//    Метод GetTotalAmount який приймає Currency та віддає загальну суму усіх транзакцій в усіх картках за вказаною валютою.
//    Клас Pocket має працювати ЛИШЕ з інтерфейсів ICard.
//    Усі вище згадані умови повинні бути виконані з максимальним використанням можливостей тайпскрипту та типів.
//    Створити файл test.ts який демонструє роботу з сутністю Pocket

import { CurrencyEnum } from './enum.js'
import { Transaction } from './transaction.js'

export interface ICard {
  AddTransaction(arg: Transaction | CurrencyEnum, arg2?: number): string
  GetTransaction(id: string): Transaction | undefined
  GetBalance(currency: CurrencyEnum): number
}
