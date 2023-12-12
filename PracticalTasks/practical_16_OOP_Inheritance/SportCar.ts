import { Car } from "./Car";
import { Engine } from "./Engine";
import { Driver } from "./Driver";
export class SportCar extends Car {
  protected _speed: number;
  constructor(_carClass: string, _engine: Engine, _driver: Driver, _marka: string, _speed: number) {
    super(_carClass, _engine, _driver, _marka);
    this._speed = _speed * 2;
  }
  toString(): string {
    return `${this._driver} Car class: ${this._carClass}, marka: ${this._marka}, engine: ${this._engine}, speed: ${this._speed}.`;
  }
}
