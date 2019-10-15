/*
 boolean Булевые
*/
let isDone: boolean = false;

/*
 number Числа
*/
let decimal: number = 5;

/*
 string Строки
*/
let myName: string = 'Олег';

/*
 list Списки
*/
let myList: number[] = [1, 2, 3];  // Состоящий из одного типа данных
let myList1: Array<Number> = [1, 2, 3]; // Аналогично верхнему, только по-уебански
//myList1[0] = 'Строка'; Компилятор плюёт в лицо из-за несоответствия типов

/*
 tuple Кортежи
*/
let myTuple: [string, number, boolean]; // Перечисление содержащих типов с сохранением порядка
myTuple = ['Олег', 29, true]; // Начала объявляется, потом заполняется (не круто)
// myTuple = [29, 'Олег', true] // Еще один плевок в лицо от компилятора

/*
 enum Перечисления
*/
enum Card {MasterCard, Visa} // Перечисление переменных
let masterCard: Card = Card.MasterCard; // Можно получить номер фиксированного имени

/*
 any Что угодно
*/
let hz: any = 'Что угодно';
Object.keys(hz); // Никто не ругается, если использовать по всякому
// Можно в списках использовать
let list2: any[] = [1, 'Адын', true]; // Что угодно в списке. И можно менять как хочешь
list2[2] = 'true - это булевый АДЫН!'; // Уворачиваемся от плевков и шлём компилятор на 3 буквы

/*
 void Пустота
*/
let unusable: void = undefined; // Ну пиздец, всегда так пишу




/*
 Type assertions Приведение к типу.
*/
let myName1: string = 'Олег';
let nameLength: number = (<string>myName1).length; // На это ругается IDE. Я тоже ругаюсь, синтаксис уебанский
let nameLength1: number = (myName1 as string).length; // Тоже самое, только приятней смотрится
// Со строками и так можно, ибо строка имеет метод length
let nameLength2: number = myName1.length;
// Суть такая - шлёшь компилятор со словами: "Иннах, без тебя разбирусь". И тот уходит.
