import { Engine } from "./Engine";
import { Driver } from "./Driver";

export class Car {
  protected _carClass: string;
  protected _engine: Engine;
  protected _driver: Driver;
  protected _marka: string;
  constructor(_carClass: string, _engine: Engine, _driver: Driver, _marka: string) {
    this._carClass = _carClass;
    this._engine = _engine;
    this._driver = _driver;
    this._marka = _marka;
  }
  public start(): void {
    console.log("go!");
  }
  public stop(): void {
    console.log("stop!");
  }
  public turnRight(): void {
    console.log("turn right!");
  }
  public turnLeft(): void {
    console.log("turn left!");
  }
  toString(): string {
    return `${this._driver} car class: ${this._carClass} marka: ${this._marka} engine: ${this._engine}`;
  }
}
