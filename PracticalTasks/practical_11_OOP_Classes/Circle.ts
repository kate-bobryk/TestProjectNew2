import { Figure } from "./Figure";

export class Circle extends Figure {
  private _radius: number;
  constructor(radius: number) {
    super();
    this._radius = radius;
    this._type = "Circle";
    this._area = this.getArea();
    this._perimeter = this.getPerimeter();
  }
  private getRadius(): void {
    console.log("Radius = " + this._radius.toFixed(2));
  }

  public getArea(): number {
    //площадь круга = число П * радиус в 2 степени;
    //Math.pow() - возвращает основание x, возведённое в степень y;
    return Math.PI * Math.pow(this._radius, 2);
    //Number((Math.PI * Math.pow(this._radius, 2)).toFixed(2));
  }
  public getPerimeter(): number {
    //периметр круга = 2 * число П * радиус;
    return 2 * Math.PI * this._radius;
  }
  print(): void {
    super.print();
    this.getRadius();
  }
}
