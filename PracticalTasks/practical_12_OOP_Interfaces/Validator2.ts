import { Ownership } from "./Ownership";
import { User } from "./User";

//в файле Validator помимо конструктора принимающего разные наборы данных относящихся к свойствам User и Ownership;
//реализовать метод getCredit(без параметров) который будет возвращать true или false в зависимости от того дадут кредит или нет;
//кредит выдают только людям старше 18 лет которые или имеют в собственности квартиру или обладают машиной/кораблем и банковским счетом;

export class Validator2 implements User, Ownership {
  age: number;
  hasBankSavingAcc: boolean;
  hasCar: boolean;
  hasHome: boolean;
  hasShip: boolean;
  name: string;
  surname: string;

  constructor(userData: User & Ownership) {
    this.age = userData.age;
    this.name = userData.name;
    this.surname = userData.surname;
    this.hasBankSavingAcc = !!userData.hasBankSavingAcc;
    this.hasCar = !!userData.hasCar;
    this.hasHome = !!userData.hasHome;
    this.hasShip = !!userData.hasShip;
  }

  public getCredit(): boolean {
    if (this.age < 18) {
      return false;
    } else {
      if (this.hasHome) {
        return true;
      } else {
        return this.hasBankSavingAcc && (this.hasCar || this.hasShip);
      }
    }
  }
}
