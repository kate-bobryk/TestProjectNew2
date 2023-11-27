import { User } from "./User";

Feature("Practical Task Number 10 - Class; Getter, Setter methods");

Scenario("PZ10 @C0101 Class; Getter, Setter methods", () => {
  // работа с созданными экземлярами класса User:
  const user1 = new User("Ivan", "Antonov", 25, "Poland", 111111111);
  const user2 = new User("Petr", "Petrov", 42, "USA", 222222222);
  const user3 = new User("Maria", "Sinichkina", 31, "USA", 333333333);
  const user4 = new User("Alex", "Ivanov", 18, "USA", 444444444);
  const user5 = new User("Lina", "Nosova", 51, "Poland", 555555555);

  for (const user of [user1, user2, user3, user4, user5]) {
    if (user.getCountry() === "Poland") {
      user.setPhoneNumber(Number(`48${user.getPhoneNumber()}`));
    } else if (user.getCountry() === "USA") {
      user.setPhoneNumber(Number(`1${user.getPhoneNumber()}`));
    }
    user.print();
  }
});
