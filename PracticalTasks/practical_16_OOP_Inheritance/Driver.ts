import { Person } from "./Person";
export class Driver extends Person {
  protected _experience: number;
  constructor(_fullName: string, _experience: number) {
    super(_fullName);
    this._experience = _experience;
  }
  toString(): string {
    return `Driver: ${this._fullName} has driver experience ${this._experience} year.`;
  }
}
