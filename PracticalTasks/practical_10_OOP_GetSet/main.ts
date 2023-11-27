import { User } from "./User";

Feature("Practical Task Number 10 - Class; Getter, Setter methods");

Scenario("PZ10 @C0101 Class; Getter, Setter methods", () => {
  // работа с созданными экземлярами класса User:
  class main extends User {
    constructor(userName: string, userSurname: string, userAge: number, userCountry: string, userPhoneNumber: number) {
      super(userName, userSurname, userAge, userCountry, userPhoneNumber);
    }
    //this.setUserPhoneNumber = function(userPhoneNumber) {
    //         if(userCountry = "Poland"){
    //             _userPhoneNumber = 48 + ${userPhoneNumber};
    //         } else if (userCountry = "USA"){
    //             _userPhoneNumber = 1 + ${userPhoneNumber};
    //         } else {_userPhoneNumber = userPhoneNumber}
    //}
    public print(): void {
      if (this.country === "Poland") {
        console.log(
          `${this.name} ${this.surname} ${this.age} years from ${this.country} have phone number +48${this.phoneNumber}`,
        );
      } else if (this.country === "USA") {
        console.log(
          `${this.name}  ${this.surname} ${this.age} years from ${this.country} have phone number 1${this.phoneNumber}`,
        );
      }
    }
  }

  const user1 = new main("Ivan", "Antonov", 25, "Poland", 111111111);
  user1.print();
  const user2 = new main("Petr", "Petrov", 42, "USA", 222222222);
  user2.print();
  const user3 = new main("Maria", "Sinichkina", 31, "USA", 333333333);
  user3.print();
  const user4 = new main("Alex", "Ivanov", 18, "USA", 444444444);
  user4.print();
  const user5 = new main("Lina", "Nosova", 51, "Poland", 555555555);
  user5.print();
});
