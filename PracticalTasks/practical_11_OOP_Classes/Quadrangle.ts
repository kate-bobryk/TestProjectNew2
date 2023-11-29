import { Figure } from "./Figure";
export abstract class Quadrangle extends Figure {
  protected _sideA: number;
  protected _sideB: number;

  constructor(sideA: number, sideB: number) {
    super();
    this._sideA = sideA;
    this._sideB = sideB;
    this._perimeter = this.getPerimeter();
  }

  abstract getArea(): number;
  //pасчет площади для четырехугольника будет зависеть от значения переменной corner;

  public getPerimeter(): number {
    return (this._sideA + this._sideB) * 2;
  }
}
