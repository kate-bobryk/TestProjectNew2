import { Quadrangle } from "./Quadrangle";
export class Square extends Quadrangle {
  private _side: number;
  constructor(side: number) {
    super(side, side);
    this._side = side;
    this._type = "Square";
    this._area = this.getArea();
  }
  public getArea(): number {
    //return Math.pow(this._side, 2);
    return this._side * this._side;
  }
}
