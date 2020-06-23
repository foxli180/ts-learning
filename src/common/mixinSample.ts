class Disposable {
    isDisposed: boolean;
    dispose(): void {
        this.isDisposed = true
    }
}

class Activatable {
    isActive: boolean;
    activate():void {
        this.isActive = true;
    }
    deactivate():void {
        this.isActive = false;
    }
}

class SmartObject {
    constructor(){
        setInterval(() => console.log(this.isActive + " 1 : 2 " + this.isDisposed), 500);
    }
    interact(): void{
        this.activate();
    }
}

interface SmartObject extends Disposable, Activatable {}

function applyMixins(derivedCtor: any, baseCtors: any[]): void {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach( name => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name)!);
    });
  });
}

applyMixins(SmartObject, [Disposable, Activatable])

const smartObject = new SmartObject()
setTimeout(()=> smartObject.interact(), 1000)
setTimeout(() => smartObject.dispose(), 1500);

