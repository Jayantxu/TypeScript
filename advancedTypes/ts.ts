/**
* 高级类型
*/

// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}
class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        console.log('打印ConsoleLogger...');
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
console.log(n);



// 联合类型 ，我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。
// 我们只能访问此联合类型的所有类型里   共有   的成员
interface Bird {
	fly();
	layEggs();
}
interface Fish {
	swim();
	layEggs();
}
let ppet: Fish;
function getSmallPet(): Fish | Bird {
	return ppet;
}
let pet = getSmallPet();
// pet.layEggs(); // okay   layEggs 是共有的成员
// pet.swim();    // errors


// 类型保护  typeof
function isFish(pet: Fish | Bird): pet is Fish {
	return (<Fish>pet).swim !== undefined;
}
function padLeft2(value: string, padding: number | string) {
	if (typeof padding === 'number') {
		console.log('number');
		return;	
	}
	if (typeof padding === 'string') {
		console.log('string');
		return;
	}
	throw new Error(`Expected string or number, got '${padding}'.`);
}
padLeft2('223', 223)

// instanceof 类型保护
// instanceof 的用法... 略


// null 类型  ，使用  --strictNullChecks  的情况下
let s: string = "foo";
// s = null;  // error , 使用  --strictNullChecks  的情况下
// 可选参数
function f1 (x: number, y?: number ) {
	return x + (y || 0);
}
f1(1, 2);
f1(1);
f1(1, undefined);
f1(1, null); // error, 'null' is not assignable to 'number | undefined', 使用  --strictNullChecks  的情况下


// 类型别名,   type
type Name = string;
type NameResolve = () => string;
type NameOrResolve = Name | NameResolve;
function getName(n: NameOrResolve): Name {
	if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}


// 可辨识联合
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}
// 完整性检查
// 在上述的area中 , 如果我们在加入一个 Triangle 那么switch 就覆盖不全了
// 可以使用never 进行完整性检查
function assertNever2(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area2(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever2(s); // error here if there are missing cases
    }
}


// 索引类型
interface Person2 {
    name: string;
    age: number;
}
let personProps: keyof Person2; // 'name' | 'age' ， keyof


function getProperty2<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}
// getProperty里的 o: T和 name: K，意味着 o[name]: T[K]。 
// 当你返回 T[K]的结果，编译器会实例化键的真实类型。
// 因此 getProperty的返回值类型会随着你需要的属性改变。

