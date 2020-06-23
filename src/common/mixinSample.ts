class Disposable {
  isDisposed: boolean;
  dispose(): void {
    this.isDisposed = true;
  }
}

class Activatable {
  isActive: boolean;
  activate(): void {
    this.isActive = true;
  }
  deactivate(): void {
    this.isActive = false;
  }
}

class SmartObject {
  constructor() {
    setInterval(() => console.log(this.isActive + ' 1 : 2 ' + this.isDisposed), 500);
  }
  interact(): void {
    this.activate();
  }
}

interface SmartObject extends Disposable, Activatable {}

function applyMixins(derivedCtor: any, baseCtors: any[]): void {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name)!);
    });
  });
}

applyMixins(SmartObject, [Disposable, Activatable]);

const smartObject = new SmartObject();
setTimeout(() => smartObject.interact(), 1000); //1 秒之后打印的 isActive 是 true, 之前是 undefined
setTimeout(() => smartObject.dispose(), 1500); //1.5 秒之后打印的 isDisposed 是true, 之前是 undefined
/**output
undefined 1 : 2 undefined
true 1 : 2 undefined
true 1 : 2 true 
 **/
