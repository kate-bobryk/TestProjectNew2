import { Car } from "./Car";
import { Engine } from "./Engine";
import { Driver } from "./Driver";
export class Lorry extends Car {
  protected _carrying: number;
  constructor(_carClass: string, _engine: Engine, _driver: Driver, _marka: string, _carrying: number) {
    super(_carClass, _engine, _driver, _marka);
    this._carrying = _carrying;
  }
  toString(): string {
    return `${this._driver} Car class: ${this._carClass}, marka: ${this._marka}, engine: ${this._engine}, carrying: ${this._carrying}.`;
  }
}
