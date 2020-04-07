"use strict";
/**
* 声明合并
*/
exports.__esModule = true;
var box = { height: 5, width: 6, scale: 10 };
// 合并为
// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
//     clone(animal: Sheep): Sheep;
//     clone(animal: Animal): Animal;
// }
// 命名空间的合并 , 导出成员的合并
var Animals;
(function (Animals) {
    var Zebra = /** @class */ (function () {
        function Zebra() {
        }
        return Zebra;
    }());
    Animals.Zebra = Zebra;
})(Animals || (Animals = {}));
(function (Animals) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        return Dog;
    }());
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
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
var Observable = /** @class */ (function () {
    function Observable() {
    }
    return Observable;
}());
exports.Observable = Observable;
Array.prototype.toObservable = function () {
    // ...
};
