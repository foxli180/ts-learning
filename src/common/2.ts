function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(args: T): T {
  return args;
}

const output = identity('myString');
const myIdentity: GenericIdentityFn<number> = identity;

class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};

const array = new Array(3).fill(10.1);
for (const v of array) {
  console.log(v);
}
