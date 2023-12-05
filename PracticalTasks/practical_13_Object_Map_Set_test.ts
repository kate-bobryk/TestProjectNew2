Feature("Practical Task Number 13 - Object, Map, Set");

Scenario("PZ13 @C01301 Object methods", (): void => {
  //object: наборы пар ключ/значение, значения могут состоять из свойств и методов и содержать все другие типы данных (строки, числа, логические операторы).
  //методы объекта используются напрямую в конструкторе Object, и используют в качестве параметра экземпляр объекта;
  const user = {
    name: "James",
    age: 30,
    isEmployee: true,
    job: ["qa", "engineer"],
    address: {
      street: "123 Main St",
      city: "Miensk",
    },
    displayInfo: function (): void {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Is employee: ${this.isEmployee}`);
      console.log(`Job: ${this.job.join(" ")}`);
      console.log(`Address: ${this.address.street}, ${this.address.city}`);
    },
  };
  user.displayInfo();
  //Name: James
  // Age: 30
  // Is employee: true
  // Job: qa engineer
  // Address: 123 Main St, Miensk

  //create() - используется для создания новых объектов, их привязки к прототипу существующего объекта, полезен для сокращения кода за счет минимального дублирования;
  const employee = Object.create(user);
  employee.name = "Kate";
  employee.abc = "abc";
  employee.displayInfo();
  //Name: Kate
  // Age: 30
  // Is employee: true
  // Job: qa engineer
  // Address: 123 Main St, Miensk

  //keys() - создает массив, содержащий ключи объекта;
  const keys: string[] = Object.keys(employee);
  console.log(`Keys of employee ${keys}`); //Keys of employee name,abc
  console.log(Object.keys(Object.getPrototypeOf(employee))); //[ 'name', 'age', 'isEmployee', 'job', 'address', 'displayInfo' ]

  //можно использовать для итерации ключей и значений объекта;
  Object.keys(employee).forEach((key: string): void => {
    const value = employee[key];
    console.log(`${key}: ${value}`);
  });
  //name: Kate
  //abc: abc

  //полезен для проверки длины объекта;
  const length: number = Object.keys(employee).length;
  console.log(length); //2

  //values() - создает массив, содержащий значения объекта;
  //Object.keys() и Object.values() позволяют получить данные объекта, если напряпую, то выводит только измененные/новые ключи, иначе использоваль getPrototypeOf(object);
  const objectValues: unknown[] = Object.values(employee);
  console.log(objectValues); //[ 'Kate', 'abc' ]
  console.log(Object.values(Object.getPrototypeOf(employee)));
  //[
  //   'James',
  //   30,
  //   true,
  //   [ 'qa', 'engineer' ],
  //   { street: '123 Main St', city: 'Miensk' },
  //   [Function: displayInfo]
  // ]

  //entries() - создает вложенный массив пар ключ-значение для объекта;
  //возвращает только собственные свойства экземпляра объекта, а не свойства, унаследованные от прототипа;
  //способ для преобразования объекта в карту;
  const entriesEmployee = Object.entries(employee);
  console.log(entriesEmployee); //[ [ 'name', 'Kate' ], [ 'abc', 'abc' ] ]
  const entriesUser = Object.entries(user);
  console.log(entriesUser);
  //[
  //   [ 'name', 'James' ],
  //   [ 'age', 30 ],
  //   [ 'isEmployee', true ],
  //   [ 'job', [ 'qa', 'engineer' ] ],
  //   [ 'address', { street: '123 Main St', city: 'Miensk' } ],
  //   [ 'displayInfo', [Function: displayInfo] ]
  // ]

  //метод forEach() для обработки результатов и работы с парами ключ-значение;
  //если переменная не используется, то не создавать и записывать как Object.entries(user).forEach();
  entriesEmployee.forEach((entry) => {
    const key: string = entry[0];
    const value = entry[1];
    console.log(`${key}: ${value}`);
  });
  //name: Kate
  //abc: abc

  //assign() - используется для копирования значений одного объекта в другой объект;
  //c помощью метода Object.assign() мы можем создать два объекта и объединить их;
  const offer = {
    titleOfJob: "Junior",
    salary: 1000,
  };
  const fullInfoEmployee = Object.assign(employee, offer);
  console.log(fullInfoEmployee); //{ name: 'Kate', abc: 'abc', titleOfJob: 'Junior', salary: 1000 }

  const fullInfoUser = { ...user, ...offer };
  console.log(fullInfoUser);
  //{
  //   name: 'James',
  //   age: 30,
  //   isEmployee: true,
  //   job: [ 'qa', 'engineer' ],
  //   address: { street: '123 Main St', city: 'Miensk' },
  //   displayInfo: [Function: displayInfo],
  //   titleOfJob: 'Junior',
  //   salary: 1000
  // }

  //freeze() - предотвращает изменение свойств и значений объекта, а также добавление или удаление свойств объекта;
  const newUser = Object.freeze(fullInfoEmployee);
  newUser.titleOfJob = "Middle";
  newUser.salary = 2000;
  console.log(newUser); //{ name: 'Kate', abc: 'abc', titleOfJob: 'Junior', salary: 1000 }
  //Object.isFrozen() - определяет, заморожен ли объект, и возвращает true/false;
  console.log(`Is object newUser frozen? ${Object.isFrozen(newUser)}`); //Is object newUser frozen? true

  //seal() - похож на метод Object.freeze(), предотвращает добавление новых свойств к объекту, но допускает изменение существующих свойств;
  console.log(`Object employee before seal() method`, user);
  //Object employee before seal() method {
  //   name: 'James',
  //   age: 30,
  //   isEmployee: true,
  //   job: [ 'qa', 'engineer' ],
  //   address: { street: '123 Main St', city: 'Miensk' },
  //   displayInfo: [Function: displayInfo]
  // }
  const updatedUser = Object.seal(user);
  updatedUser.isEmployee = false;
  //updatedUser.married = true;
  console.log(`Object employee after seal() method`, updatedUser);
  //Object employee after seal() method {
  //   name: 'James',
  //   age: 30,
  //   isEmployee: false,
  //   job: [ 'qa', 'engineer' ],
  //   address: { street: '123 Main St', city: 'Miensk' },
  //   displayInfo: [Function: displayInfo]
  // }

  //getPrototypeOf() - используется для получения внутреннего скрытого свойства [[Prototype]] объекта, которое также доступно через свойство __proto__;
  Object.getPrototypeOf(updatedUser);
  Object.getPrototypeOf(updatedUser) === Object.prototype;
  const unemployed: string[] = ["Jack", "Daniel", "Victoria"];
  Object.getPrototypeOf(unemployed);
  Object.getPrototypeOf(unemployed) === Array.prototype;
});

Scenario("PZ13 @C01302 Map methods", (): void => {
  //map - это коллекция пар ключ/значение, которая может использовать любой тип данных в качестве ключа и поддерживает порядок своих записей;
  //содержат характеристики объектов (коллекция пар ключ/значение) и массивов (упорядоченная коллекция);
  //карты используют синтаксис => для обозначения пар ключ/значение, как key => value:
  const map = new Map();
  console.log(`Empty map ${map}`); //Empty map [object Map]

  const mapJob = new Map([
    ["title", "junior"],
    ["salary", "1000"],
    ["location", "Krakow"],
  ]);
  mapJob.set("job", "qa");
  console.log(mapJob); //Map(4) {'title' => 'junior', 'salary' => '1000', 'location' => 'Krakow', 'job' => 'qa'}

  //set() - добавляет значения в карту: первый аргумент = ключ, а второй = значение;
  map.set("name", "James");
  map.set("age", "30");
  map.set(1, "first");
  console.log(map); //Map(3) { 'name' => 'James', 'age' => '30', 1 => 'first' }

  //get() - получение значения по ключу;
  map.get(1); // first
  mapJob.get("location"); // Krakow

  //entries() - возвращает массив пар ключ/значение;
  console.log(map.entries()); //[Map Entries] { [ 'name', 'James' ], [ 'age', '30' ], [ 1, 'first' ] }
  console.log(mapJob.entries()); //[Map Entries] {[ 'title', 'junior' ], [ 'salary', '1000' ], [ 'location', 'Krakow' ], [ 'job', 'qa' ]}

  //fromEntries() - превращает карту обратно в объект или массив;
  const newObject = Object.fromEntries(mapJob);
  console.log(`Map into object`, newObject); //Map into object { title: 'junior', salary: '1000', location: 'Krakow', job: 'qa' }

  //from - преобразует карту в массив;
  const arrayFromMap = Array.from(map);
  console.log(`Array from map`, arrayFromMap); //Array from map [ [ 'name', 'James' ], [ 'age', '30' ], [ 1, 'first' ] ]
  //console.log(`Array from map`, arrayFromMap[2][0]);

  //delete() - удалить элемент карты по ключу;
  //возвращает true, если элемент существовал и был удален, false, если элемент не найден;
  map.delete(1); // true
  console.log(`Deleted key 1 in map`, map); //Deleted key 1 in map Map(2) { 'name' => 'James', 'age' => '30' }

  //has() - проверяет наличия элемента в карте, возвращает булево значение;
  map.has("ame"); // false
  map.has(1); // true

  //size() - выводит количество элементов карты;
  console.log(`Get the count of items in a map ${map.size}`); //Get the count of items in a map 2
  console.log(`Get the count of items in a mapJob ${mapJob.size}`); //Get the count of items in a mapJob 4

  //forEach() - метод используется для встроенной итерации по карте;
  //обратный вызов forEach карты проходит по value, key и map;
  //в то время как версия для массива проходит по item, index и array;
  mapJob.forEach((value: string, key: string): void => {
    console.log(`${key}: ${value}`);
  });

  //keys() - возвращает ключи;
  console.log(`Keys of map`, map.keys()); //Keys of map [Map Iterator] { 'name', 'age' }
  console.log(`Keys of mapJob`, mapJob.keys()); //Keys of mapJob [Map Iterator] { 'title', 'salary', 'location', 'job' }

  //values() - возвращает значения;
  console.log(`Values of map`, map.values()); //Values of map [Map Iterator] { 'James', '30' }
  console.log(`Values of map`, mapJob.values()); //Values of map [Map Iterator] { 'junior', '1000', 'Krakow', 'qa' }

  //clear() - удалить все значения карты;
  map.clear();
  console.log(`Empty map`, map); //Empty map Map(0) {}
});

Scenario("PZ13 @C01303 Set methods", (): void => {
  //set - больше походит на массив, а не объект, поскольку он представляет собой список значений, а не пар ключ/значение;
  //не является заменой массива, служит дополнением для предоставления новых возможностей работы с дублирующимися данными;
  //два сета, имеющие одно и то же значение, но разные ссылки, не считаются равными;
  const setExample = new Set();

  //add() - добавление элементов в сет;
  setExample.add(1);
  setExample.add(1);
  setExample.add("QA");
  console.log(setExample); //Set(2) { 1, 'QA' }
  const setExampleFromArray = new Set(["James", "Michel", "Michel", "Mike"]);
  console.log(setExampleFromArray); //Set(3) { 'James', 'Michel', 'Mike' }
  const arrayFromSet: unknown[] = [...setExampleFromArray, "name"];
  console.log(arrayFromSet); //[ 'James', 'Michel', 'Mike', 'name' ]

  //delete() - удаляет значение сета;
  setExampleFromArray.delete("Mike");
  console.log(setExampleFromArray); //Set(2) { 'James', 'Michel' }

  //has() - проверяет наличия элемента в сете, возвращает булево значение;
  console.log(setExampleFromArray.has("Mike")); // false
  console.log(setExampleFromArray); //Set(2) { 'James', 'Michel' }

  //size() - проверяет и выводит размер сета;
  console.log(`Size of set`, setExampleFromArray.size); //Size of set 2

  //у сетов нет ключей, поэтому ключи являются псевдонимами для значений;
  //keys(), values() - возвращаeт один и тот же итератор;
  //только метод values() используется для сета, а два других метода (keys, entries) существуют для обеспечения согласованности и кросс-совместимости с картой;
  console.log(`Values of set`, setExampleFromArray.values()); //Values of set [Set Iterator] { 'James', 'Michel' }
  console.log(`Keys of set`, setExampleFromArray.keys()); //Keys of set [Set Iterator] { 'James', 'Michel' }

  //entries() - возвращает значение дважды;
  console.log(`Entries of set`, setExampleFromArray.entries()); //Entries of set [Set Entries] { [ 'James', 'James' ], [ 'Michel', 'Michel' ] }

  //forEach() - первый и второй параметр возвращает одно и то же значение, нет необходимости его использования без совместимости с картой;
  //параметрами forEach() являются (value, key, set);
  arrayFromSet.forEach((value) => console.log(value)); //James Michel Mike

  //example 2:
  for (const value of setExampleFromArray) {
    console.log(value);
  } //name James Michel

  //clear() - удалить все значения сета;
  setExampleFromArray.clear();
  console.log(`Clear`, setExampleFromArray); //Clear Set(0) {}
});
