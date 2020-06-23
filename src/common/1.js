var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myLabeledObj = {
    label: 'hello',
    strPro: 'hi',
    numPro: 1
};
printLabel(myLabeledObj);
var mySearch = function (source, sub) {
    var result = source.search(sub);
    return result > -1;
};
var myArray = ['a', 'b'];
var myMap = { a: 2, b: 1 };
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(bread) {
        var _this = _super.call(this, 'dog') || this;
        _this.bread = bread;
        return _this;
    }
    return Dog;
}(Animal));
var a = {
    length: 0,
    name: 'a',
    good: 2,
    bad: '1'
};
var deck = {
    suites: ['hearts', 'spaces', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suite: _this.suites[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log(pickedCard.card + ' of ' + pickedCard.suite);
