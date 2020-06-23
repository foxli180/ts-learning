function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function identity(args) {
    return args;
}
var output = identity('myString');
var myIdentity = identity;
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var array = new Array(3).fill(10.1);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var v = array_1[_i];
    console.log(v);
}
