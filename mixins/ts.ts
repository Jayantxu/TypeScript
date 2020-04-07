/*
* 混入
*/

// 定义了两个类，它们将做为mixins。 
// 可以看到每个类都只定义了一个特定的行为或功能。 
// 稍后我们使用它们来创建一个新类，同时具有这两种功能

// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}


// 下面创建一个类，结合了这两个mixins。 下面来看一下具体是怎么操作的：
class SmartObject implements Disposable, Activatable {}


// 注意到的是，没使用extends而是使用implements。 
// 把类当成了接口，仅使用Disposable和Activatable的类型而非其实现。 
// 这意味着我们需要在类里面实现接口。 但是这是我们在用mixin时想避免的。

// 我们可以这么做来达到目的，为将要mixin进来的属性方法创建出占位属性。 
// 这告诉编译器这些成员在运行时是可用的。 这样就能使用mixin带来的便利，虽说需要提前定义一些占位属性。


// Disposable
isDisposed: boolean = false;
dispose: () => void;
// Activatable
isActive: boolean = false;
activate: () => void;
deactivate: () => void;

applyMixins(SmartObject, [Disposable, Activatable]);


// 帮助我们做混入操作
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}
