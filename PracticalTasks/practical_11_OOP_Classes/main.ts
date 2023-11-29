import { randomInt } from "crypto";
import { Figure } from "./Figure";
import { Circle } from "./Circle";
import { Square } from "./Square";
import { Parallelogram } from "./Parallelogram";
import { Rectangle } from "./Rectangle";

Feature("Practical Task Number 11 - Abstract Class; Abstract Methods");

Scenario("PZ10 @C01101 Abstract class, abstract methods", () => {
  //создать сценарий теста, который рандомно получает значение сторон а и b, если обе константы равны 0 то выкидывается ошибка;
  //если только одно значение ноль, то переменная figure принимает значение созданного экземпляра класса Circle;
  //если a = b то  figure = new Square(a), если a != b то добавляется переменная const corner = [30, 60, 90][randomInt(3)];
  //и дальше если corner == 90 то фигура Rectangle в противном случае Parallelogram;
  //для любых значений a b вывести;
  const a: number = randomInt(5);
  console.log("a = " + a);
  const b: number = randomInt(5);
  console.log("b = " + b);

  if (a === 0 && b === 0) {
    throw new Error("There is no figure for a = 0 and b = 0");
  } else {
    let figure: Figure;
    if (a === 0 || b === 0) {
      figure = new Circle(a !== 0 ? a : b);
    } else if (a === b) {
      figure = new Square(a);
    } else {
      const corner: number = [30, 60, 90][randomInt(3)];
      if (a !== b && corner === 90) {
        figure = new Rectangle(a, b);
      } else {
        figure = new Parallelogram(a, b, corner);
      }
    }
    figure.print();
  }
});
