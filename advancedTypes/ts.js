/**
* 高级类型
*/
// 交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log('打印ConsoleLogger...');
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
console.log(n);
var ppet;
function getSmallPet() {
    return ppet;
}
var pet = getSmallPet();
// pet.layEggs(); // okay   layEggs 是共有的成员
// pet.swim();    // errors
// 类型保护  typeof
function isFish(pet) {
    return pet.swim !== undefined;
}
function padLeft2(value, padding) {
    if (typeof padding === 'number') {
        console.log('number');
        return;
    }
    if (typeof padding === 'string') {
        console.log('string');
        return;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
padLeft2('223', 223);
// instanceof 类型保护
// instanceof 的用法... 略
// null 类型  ，使用  --strictNullChecks  的情况下
var s = "foo";
// s = null;  // error , 使用  --strictNullChecks  的情况下
// 可选参数
function f1(x, y) {
    return x + (y || 0);
}
f1(1, 2);
f1(1);
f1(1, undefined);
f1(1, null); // error, 'null' is not assignable to 'number | undefined', 使用  --strictNullChecks  的情况下
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
// 完整性检查
// 在上述的area中 , 如果我们在加入一个 Triangle 那么switch 就覆盖不全了
// 可以使用never 进行完整性检查
function assertNever2(x) {
    throw new Error("Unexpected object: " + x);
}
function area2(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever2(s); // error here if there are missing cases
    }
}
var personProps; // 'name' | 'age'
function getProperty2(o, name) {
    return o[name]; // o[name] is of type T[K]
}
// getProperty里的 o: T和 name: K，意味着 o[name]: T[K]。 
// 当你返回 T[K]的结果，编译器会实例化键的真实类型。
// 因此 getProperty的返回值类型会随着你需要的属性改变。
