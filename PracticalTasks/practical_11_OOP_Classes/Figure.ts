export abstract class Figure {
  // protected определяет поля и методы, которые из вне класса видны только в классах-наследниках;
  protected _type: string;
  protected _area: number;
  protected _perimeter: number;

  public getType(): string {
    return this._type;
  }
  public abstract getArea(): number;
  public abstract getPerimeter(): number;
  public print(): void {
    console.log("Type of figure " + this._type);
    console.log(`Area = ${this._area.toFixed(2)}`);
    console.log(`Perimeter = ${this._perimeter.toFixed(2)}`);
  }
}
