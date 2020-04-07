/**
* 声明合并
*/


// 接口合并

// 接口的非函数的成员应该是唯一的。如果它们不是唯一的，那么它们必须是相同的类型。
// 如果两个接口中同时声明了同名的非函数成员且它们的类型不同，则编译器会报错
interface Box {
    height: number;
    width: number;
}
interface Box {
    scale: number;
}
let box: Box = {height: 5, width: 6, scale: 10};


interface Cloner {
    clone(animal: Animal): Animal;
}
interface Cloner {
    clone(animal: Sheep): Sheep;
}
interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}
// 合并为
// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
//     clone(animal: Sheep): Sheep;
//     clone(animal: Animal): Animal;
// }



// 命名空间的合并 , 导出成员的合并
namespace Animals {
    export class Zebra { }
}
namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}
// 等同于
// namespace Animals {
//     export interface Legged { numberOfLegs: number; }
//     export class Zebra { }
//     export class Dog { }
// }

// 命名空间的合并 , 非导出成员的合并



// 模块扩展

// // observable.ts stays the same
// // map.ts
// import { Observable } from "./observable";
// declare module "./observable" {
//     interface Observable<T> {
//         map<U>(f: (x: T) => U): Observable<U>;
//     }
// }
// Observable.prototype.map = function (f) {
//     // ... another exercise for the reader
// }


// // consumer.ts
// import { Observable } from "./observable";
// import "./map";
// let o: Observable<number>;
// o.map(x => x.toFixed());


// 全局扩展
// observable.ts
// export class Observable<T> {
//     // ... still no implementation ...
// }
// declare global {
//     interface Array<T> {
//         toObservable(): Observable<T>;
//     }
// }
// Array.prototype.toObservable = function () {
//     // ...
// }