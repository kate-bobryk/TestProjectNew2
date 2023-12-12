import { Lorry } from "./Lorry";
import { SportCar } from "./SportCar";
import { Driver } from "./Driver";
import { Engine } from "./Engine";

Feature("Practical Task Number 16 - OOP Inheritance;");

Scenario("PZ16 @C01601 OOP Inheritance", () => {
  const driverPeter: Driver = new Driver("Peter Parker", 5);
  const engine: Engine = new Engine(700, "BMW");
  const carLorry: Lorry = new Lorry("C", engine, driverPeter, "BMW Lorry C", 4);
  const carSport: SportCar = new SportCar("superSpeed", engine, driverPeter, "M3E46", 150);

  console.log(engine.toString()); //700: BMW
  console.log(driverPeter.toString()); //Driver: Peter Parker has driver experience 5 year.
  console.log(carLorry.toString()); //Driver: Peter Parker has driver experience 5 year. Car class: C, marka: BMW Lorry C, engine: 700: BMW, carrying: 4.
  console.log(carSport.toString()); //Driver: Peter Parker has driver experience 5 year. Car class: superSpeed, marka: M3E46, engine: 700: BMW, speed: 300.
  //carLorry и carSport сначала вызывают toString из Driver, потом вызывают toString из carLorry и carSport;
});
