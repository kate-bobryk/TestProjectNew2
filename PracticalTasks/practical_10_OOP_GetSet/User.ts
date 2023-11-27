//class представляет шаблон для создания объектов и инкапсулирует функциональность, которую должен иметь объект;
//определяет состояние и поведение, которыми обладает объект;
//поля в классе представляют переменные уровня класса, только для их объявления не применяются const и let;
//по имени объекта мы можем обращаться к этим полям;
//для обращения внутри методов к полям и другим методам класса применяется ключевое слово this, которое указывает на текущий объект этого класса;

//в классе User создать 5 закрытых переменных (имя, фамилия, возраст, страна, телефон), конструктор с этими 5 обязательным параметрами и геттеры и сеттеры на каждую переменнную;

export class User {
  private _name: string;
  private _surname: string;
  private _age: number;
  private _country: string;
  private _phoneNumber: number;
  constructor(userName: string, userSurname: string, userAge: number, userCountry: string, userPhoneNumber: number) {
    this._name = userName;
    this._surname = userSurname;
    this._age = userAge;
    this._country = userCountry;
    this._phoneNumber = userPhoneNumber;
  }

  public get name(): string {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }

  public get surname(): string {
    return this._surname;
  }

  public set surname(s: string) {
    this._surname = s;
  }
  public get age(): number {
    return this._age;
  }

  public set age(a: number) {
    this._age = a;
  }

  public get country(): string {
    return this._country;
  }

  public set country(c: string) {
    this._country = c;
  }

  public get phoneNumber(): number {
    return this._phoneNumber;
  }

  public set phoneNumber(p: number) {
    this._phoneNumber = p;
  }

  public print(): void {
    console.log(
      `${this._name}  ${this._surname} ${this._age} years from ${this._country} have phone number ${this._phoneNumber}`,
    ); //Ivan Antonov 25 years from Poland have phone number +48111111111
  }
}
