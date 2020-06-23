function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
interface LabeledValue {
  label: string;
  [propName: string]: string | number;
}

const myLabeledObj: LabeledValue = {
  label: 'hello',
  strPro: 'hi',
  numPro: 1,
};
printLabel(myLabeledObj);

interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function(source, sub) {
  const result = source.search(sub);
  return result > -1;
};

interface StringIntMap {
  [inde: string]: number;
}
interface StringArray {
  [x: number]: string;
}
const myArray: StringArray = ['a', 'b'];
const myMap: StringIntMap = { a: 2, b: 1 };

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bread: string;
  constructor(bread: string) {
    super('dog');
    this.bread = bread;
  }
}

interface NotOkay {
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

const a: NumberDictionary = {
  length: 0,
  name: 'a',
  good: 2,
  bad: '1',
};

interface Card {
  suite: string;
  card: number;
}

interface Deck {
  suites: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

const deck: Deck = {
  suites: ['hearts', 'spaces', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);
      return { suite: this.suites[pickedSuit], card: pickedCard % 13 };
    };
  },
};

const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();
console.log(pickedCard.card + ' of ' + pickedCard.suite);

const suits = ['hearts', 'spaces', 'clubs', 'diamonds'];
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  if (typeof x == 'object') {
    const pickedCard = Math.floor(Math.random() * x.legnth);
    return pickedCard;
  } else if (typeof x == 'number') {
    const pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}
const myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
];
const pickedCard1 = myDeck[pickCard(myDeck)];
const pickedCard2 = pickCard(15);
