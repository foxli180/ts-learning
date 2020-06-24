import { resolve } from 'app-root-path';
import { reject, result } from 'lodash';

/**
 * 第一部分 无返回值的情况
 * 回调, 及回调地狱演示
 * printAll 无法保证打印结果是有序的
 * printAllOrdered 可以保证打印结果有序
 */
function printString(str: string): void {
  setTimeout(() => {
    console.log(str);
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll(): void {
  printString('A');
  printString('B');
  printString('C');
  printString('D');
}

// printAll();
//无序的

function printStringOrdered(str: string, callback: Function): void {
  setTimeout(() => {
    console.log(str);
    callback(); //打印结束执行回调方法
  }, Math.floor(Math.random() * 100) + 1);
}

//回调地狱
function printAllOrdered(): void {
  printStringOrdered('A', () => {
    printStringOrdered('B', () => {
      //回调方法是打印 B, 所以 打印 A 结束通过回调打印 B
      printStringOrdered('C', () => {
        printStringOrdered('D', () => {
          //do nothing, 此行必须不让 eslint 会报错
        });
      });
    });
  });
}

// printAllOrdered();
//有序的

//Promise 就是用来解决 回调地狱

function printStringPromise(str: string): Promise<void> {
  const promise: Promise<void> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      resolve();
    }, Math.random() * 100 + 1);
  });
  return promise;
}

function printAllPromise(): void {
  printStringPromise('A')
    .then(() => printStringPromise('B'))
    .then(() => printStringPromise('C'))
    .then(() => printStringPromise('D'));
}

// printAllPromise();
// 有序的

// await async 让 promise 更优雅
async function printAllAsync(): Promise<void> {
  await printStringPromise('A');
  await printStringPromise('B');
  await printStringPromise('C');
  await printStringPromise('D');
}

// printAllAsync();
// 有序的

/**
 * 第二部分 有返回值的情况
 * 回调, 及回调地狱演示
 */

function addString(prev: string, curr: string): string {
  let ret = '';
  setTimeout(() => {
    ret = prev + ' ' + curr;
  }, Math.random() * 100 + 1);
  return ret;
}

function addAll(): void {
  let result = addString('', 'A');
  result = addString(result, 'B');
  result = addString(result, 'C');
  result = addString(result, 'D');
  console.log(result);
}

// addAll();
// result为空

function addStringCallback(prev: string, curr: string, callback: Function): void {
  setTimeout(() => {
    callback(prev + ' ' + curr);
  }, Math.random() * 100 + 1);
}
function addAllCallback(): void {
  addStringCallback('', 'A', (result: string) => {
    addStringCallback(result, 'B', (result: string) => {
      addStringCallback(result, 'C', (result: string) => {
        addStringCallback(result, 'D', (result: string) => {
          console.log(result);
        });
      });
    });
  });
}
// addAllCallback();

function addStringPromise(pre: string, curr: string): Promise<string> {
  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pre + ' ' + curr);
    }, Math.random() * 100 + 1);
  });
  return promise;
}

function addAllPromise(): void {
  addStringPromise('', 'A')
    .then((result) => {
      return addStringPromise(result, 'B');
    })
    .then((result) => {
      return addStringPromise(result, 'C');
    })
    .then((result) => {
      return addStringPromise(result, 'D');
    })
    .then((result) => console.log(result, '1'));
}

addAllPromise();

async function addAllAwait(): Promise<void> {
  let ret = await addStringPromise('', 'A');
  ret = await addStringPromise(ret, 'B');
  ret = await addStringPromise(ret, 'C');
  ret = await addStringPromise(ret, 'D');
  console.log(ret, '2');
}

addAllAwait();
