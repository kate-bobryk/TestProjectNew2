export class Person {
  protected _fullName: string;
  private _age?: number;

  constructor(_fullName: string, age?: number) {
    this._fullName = _fullName;
    this._age = age;
  }
  toString(): string {
    return `${this._fullName} ${this._age}`;
  }
}
