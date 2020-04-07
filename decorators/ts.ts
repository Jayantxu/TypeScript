/**
* 装饰器
*/


// 类装饰器 , 在类声明之前被声明 ， 紧靠类声明
// 类装饰器表达式会在运行时当作函数被调用，类的  构造函数   作为其唯一的参数
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}



// 方法装饰器

// 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

// 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 成员的名字。
// 成员的属性描述符。
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}



// 访问器装饰器

// 访问器装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

// 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 成员的名字。
// 成员的属性描述符。
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}


// 属性装饰器

// 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：

// 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 成员的名字。

class Greeter3 {
    @format("Hello, %s")
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}
function format(formatString: string) {
    return 'setset';
}

function getFormat(target: any, propertyKey: string) {
    return 'getget';
}

// ...