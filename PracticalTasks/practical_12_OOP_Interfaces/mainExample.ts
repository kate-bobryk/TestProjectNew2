//примеры наследования интерфейсов:
interface IMovable {
  speed: number;
  move(): void;
}
interface ICar extends IMovable {
  fill(): void;
}
class Car implements ICar {
  speed: number;
  move(): void {
    console.log("Машина едет со скоростью " + this.speed + " км/ч");
  }

  fill(): void {
    console.log("Заправляем машину топливом");
  }
}

const auto: Car = new Car();
auto.speed = 60;
auto.fill();
auto.move();
