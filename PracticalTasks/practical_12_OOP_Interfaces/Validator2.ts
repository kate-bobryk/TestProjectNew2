import { Ownership } from "./Ownership";
import { User } from "./User";

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
