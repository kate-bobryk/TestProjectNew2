import { Quadrangle } from "./Quadrangle";

export class Parallelogram extends Quadrangle {
  private readonly _corner: number;

  constructor(sideA: number, sideB: number, corner: number) {
    super(sideA, sideB);
    this._corner = corner;
    this._type = "Parallelogram";
    this._area = this.getArea();
  }

  public getCorner(): void {
    console.log("Corner is " + this._corner);
  }
  //площадь параллелограмма = произведению сторон на синус угла между нимиж
  public getArea(): number {
    return this._sideA * this._sideB * Math.sin((Math.PI * this._corner) / 180);
  }
  print(): void {
    super.print();
    this.getCorner();
  }
}
