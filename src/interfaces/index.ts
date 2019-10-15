/*
 Типизация параметров функции
*/

const myFunc = (labelledObject: {label: string}): void => { // Ждёт объект с ключём label и строкой в значении
  console.log(labelledObject.label)
};
let myObject = {size: 10, label: "Длинна 10"}; // Главное что бы совпадало с указанным ключём и его типом
myFunc(myObject);

/*
 Выведение типа в переменную
*/
interface ILabelledParam { // Интерфейсы писать в CamelCase
  label: string
}
const myFunc1 = (labelledObject: ILabelledParam): void => { // Указываем интефейс как тип параметра
  console.log(labelledObject.label)
};
// В общем работает так же, только в самой функции городить херни не придётся

/*
 Опциональные свойста
*/
interface ISome {
  color?: string; // Знак вопроса указывает на опциональность
  width?: number;
}

/*
 Только для чтения
*/
interface IPoint {
  readonly x: number; // readonly указывает на иммутабельность
  readonly y: number;
}

let p1: IPoint = {x: 10, y: 20};
// p1.x = 25 Так нельзя

let frozenArray: ReadonlyArray<Number> = [1, 2, 3]; // Работает аки FrozenSet в питоне
// frozenArray[2] = 3 И снова леща от компилятора
// frozenArray.push(10) Так тоже нельзя

/*
 Вынесение неименованных не ожидаемых параметров в переменную
*/
interface ISquareConfig {
  color?: string;
  width?: string;
  [propName: string]: any; // Аки питоновский *args
}

/*
 Функциональные типы
*/
interface ISearchFunc {
  (source: string, subString: string): boolean; // В скобках параметры функции, потом её выхлоп
}
let mySearch: ISearchFunc = (source: string, subString: string): boolean => { // Тут уже можно не указывать типы, но я конечно указал
  let result: number = source.search(subString);
  return result === -1
};

/*
 Индексируемые типы
*/
interface IStringArray {
  [index: number]: string // Индексируем по числу, возвращаем строку (Капитан очевидность придумал этот пример)
}
let myArray: IStringArray = ["Адын", "Два"];
let myString = myArray[1];
// TODO Мутная хуйня, разобраться по подробней

/*
 Типы классов
*/

interface IClock { // Интерфейс экземпляра класса
  tick(): void; // Метод класса
}
interface IClockConstructor { // Интерфейс конструктора экземпляра
  new (hour: number, minute: number): IClock // Интерфейс конструктора класса возвращающий интерфейс экземпляра
}
const createClock = function(ctor: IClockConstructor, hour: number, minute: number){
  // Принимает конструктор и его параметры и возвращает новый экземпляр класса
  return new ctor(hour, minute); // Возвращаем новый экземпляр класса
};

class DigitalClock implements IClock {
  constructor(h: number, m: number) { }
  tick(): void {
    console.log('beep beep')
  }
}

class AnalogClock implements IClock {
  constructor(h: number, m: number) { }
  tick(): void {
    console.log('tick tick')
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

/*
 Расширение интерфейсов
*/
interface IShape {
  color: string;
}

interface IPenStoke {
  penWidth: number;
}

interface ISquare extends IShape, IPenStoke { // Можно наследоваться от нескольких интерфейсов
  sideLength: number;
}

let square = {} as ISquare;
square.sideLength = 10;
square.color = "red";
square.penWidth = 50;

/*
 Гибридные типы
*/
interface ICounter {
  (start: number): string; // Аки функция
  interval: number; // Аки свойство
  reset(): void; // Аки метод класса
}

function getCounter(): ICounter {
  const counter = function (start: number) {} as ICounter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter
}