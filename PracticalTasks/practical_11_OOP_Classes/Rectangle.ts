import { Quadrangle } from "./Quadrangle";
export class Rectangle extends Quadrangle {
  constructor(sideA: number, sideB: number) {
    super(sideA, sideB);
    this._type = "Rectangle";
    this._area = this.getArea();
  }
  public getArea(): number {
    return this._sideA * this._sideB;
  }
}
