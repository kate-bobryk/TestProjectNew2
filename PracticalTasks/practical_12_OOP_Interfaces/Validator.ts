import { User } from "./User";
import { Ownership } from "./Ownership";

export class Validator implements User, Ownership {
  name: string;
  surname: string;
  age: number;
  hasBankSavingAcc?: boolean;
  hasHome?: boolean;
  hasCar?: boolean;
  hasShip?: boolean;

  constructor(
    userName: string,
    userSurname: string,
    userAge: number,
    userHasBankSavingAcc?: boolean,
    userHasHome?: boolean,
    userHasCar?: boolean,
    userHasShip?: boolean,
  ) {
    this.name = userName;
    this.surname = userSurname;
    this.age = userAge;
    this.hasBankSavingAcc = userHasBankSavingAcc;
    this.hasHome = userHasHome;
    this.hasCar = userHasCar;
    this.hasShip = userHasShip;
  }
  getCredit(): boolean {
    if (this.age > 18 && (this.hasHome || this.hasCar || this.hasShip || this.hasBankSavingAcc)) {
      return true;
    } else {
      return false;
    }
  }
}
