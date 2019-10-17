/*
 Класс
*/

export class Greeter {
  greeting: string; // Объявленное свойство надо указывать в конструкторе
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return `Hello ${this.greeting}`
  }
}

let greeter = new Greeter('world');
greeter.greet();

/*
 Наследование
*/

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters: number = 5): void {
    console.log('Slithering...');
    super.move(distanceInMeters); // Перегрузка метода
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45): void {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
// Указали тип Animal и всё ок, потому что Horse унаследован от Animal

sam.move();
tom.move(34);

/*
 Модификаторы доступа
*/

// public - у всех по умолчанию.

// private - может быть доступен только внутри класса.
class Animal1 {
    private name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    getName(): string {
      return this.name
    }
    changeName(newName: string): void {
      this.name = newName;
    }
}

class Snake1 extends Animal1{ // В этом классе private name не доступен. Инкапсуляция, детка
    size: number;
    constructor(theName: string, size: number){
      super(theName);
      this.size = size;
    };
    getSize(): number {
      return this.size
    };
}

let snake1 = new Snake1('python', 10);
snake1.getSize();
snake1.getName();

let animal1 = new Animal1('Лошать Дуня');
// animal1.name ошибка доступа к приватному свойству


// Protected как private, только доступен детям.
class Animal2 {
  protected name: string; // Создаём protected свойство
  constructor(theName: string) {
    this.name = theName;
  }
}

class Snake2 extends Animal2 {
  getSnakeName(): string {
    return this.name // Вызываем у ребёнка
  }
}

let snake2 = new Snake2('Ужж');
snake2.getSnakeName();
// snake2.name ошибка


/*
 readonly - название говорит за себя
*/
class Animal3 {
  readonly name: string;
  constructor(theName: string){
    this.name = theName;
  }
}

let snake3 = new Animal3('Удаф');
// snake3.name = 'Ужж' ошибка, readonly нельзя изменить

class Animal4 {
  constructor(readonly name: string){} // Такая штука эквивалентна записи выше.
}


/*
 setter и getter
 Нужны для защиты каких-то данных от прямого изменения.
*/

const secret = "password";

class Employee {
  private _name: string;

  constructor(){
    this._name = "";
  }

  get name(): string { // get просто возвращает
    return this._name
  };

  set name(newName: string){ // set устанавливает
    if (secret && secret === "password") {
      this._name = newName;
    } else {
      console.log('Неверный пароль')
    }
  }
}

/*
 Статические свойства
 Видимые свойства, которые можно устанавливать до инициализации класса
*/

interface IPoint {
  x: number;
  y: number
}

class Grid {
  static origin: IPoint = {x: 0, y: 0}; // Статическое свойство, которое доступно до инициализации
  constructor(public scale: number){} // Тут опять через public сразу сделали свойство доступное через this

  calculateDistanceFromOrigin(point: IPoint): number {
    let xDist = (point.x - Grid.origin.x); //
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
grid1.calculateDistanceFromOrigin({x: 10, y: 10});
grid2.calculateDistanceFromOrigin({x: 50, y: 5});


/*
 Абстрактные классы
*/

abstract class Department {

  constructor(public name: string) {}

  printName(): void {
    console.log(`Имя департамента ${this.name}`)
  }

}

class AccountDepartment extends Department {

  constructor(){
    super("Депртамент аккаунтов :D");
  }
  printMeeting(): void {
    console.log("Департамент аккаунтов соберётся в 10 утра")
  }
  generateReport(): void {
    console.log("Создание отчёта...")
  }
}
let department = new AccountDepartment();
// departament = new Departament(); От абстрактного класса нельзя создать объект

