export class Engine {
  protected _power: number;
  protected _company: string;
  constructor(_power: number, _company: string) {
    this._power = _power;
    this._company = _company;
  }
  toString(): string {
    return `${this._power}: ${this._company}`;
  }
}
