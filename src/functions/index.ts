/*
 Различия функций
*/
function namedFunc(x: number, y: number): number {
  // Именованая
  return x + y;
}

// Безымянная
let unnamedFunc = function (x: number, y: number): number {return x + y};


/*
 Захват переменных в функцию
*/
let z = 100;
function addToZ(x: number, y: number): number {
  return x + y + z;
}
console.log(addToZ(5, 5)); // 110
console.log(z); // 110 - функция изменила внешнюю переменную
z = 50;
console.log(addToZ(5,5)); // 60

/*
 Типы функций
*/
// Сначала указываем типы параметров, через => ожидаемый тип и потом саму функцию
let myAddType: (x: number, y: number) => number =
  function (x=5, y=5) {
    return x + y;
  };

/*
 Опциональные параметры функции
*/
function buildName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

// let result = buildName('Олег') - ошибка, не указал второй параметр
let result = buildName('Олег', 'Кодзь');
// let result = buildName('Олег', 'Кодзь', 'Олегович'); - ошибка, слишком много параметров

function buildName1(firstName: string, lastName?: string): string { // Теперь lastName необязателен
  return lastName ? `${firstName} ${lastName}` : firstName;
}

/*
 Остаточные параметы
*/

function buildName2(firstName: string, lastName: string, ...other: string[]) { // как питоновский *args
  return `${firstName} + ${other.join(' ')}`;
}

let employeeName = buildName2('Олег', 'Кодзь', '1990', 'года рожения');
console.log(employeeName); // Олег Кодзь 1990 года рожения

/*
 Параметры this
*/

interface ICard {
  suit: string;
  card: number
}

interface IDeck {
  suits: string[];
  cards: number[];
  createCardPicker(this: IDeck): () => ICard;
}

let deck: IDeck =  {
  suits: ['Черви', 'Бубны', 'Крести', 'Пики'],
  cards: Array(52),
  createCardPicker(this: IDeck): () => ICard {
    // По умолчанию this: any. Таким способом можно
    // указать, что this является объектом Deck.
    return () => {
      // Стрелочная функция не имеет собственного this и
      // захватывает её из внешней функции.
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
};
