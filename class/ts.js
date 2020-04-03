/** 类 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal move " + distanceInMeters + " m");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('woof! woof!');
    };
    return Dog;
}(Animal));
var XHdog = new Dog();
XHdog.bark();
XHdog.move(10);
XHdog.bark();
// public , 默认都为public
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        console.log("animal2 " + this.name + " moved " + distanceInMeters + " m");
    };
    return Animal2;
}());
var publicAnimal = new Animal2('testPublic');
console.log(publicAnimal.name); // testPublic
// private
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var privateAnimal = new Animal3('testPrivate');
// console.log(privateAnimal.name); // error
// protected
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch()); // 可以在 getElevatorPitch 中访问到 protect 属性，派生类
// console.log(howard.name); // error  
// 构造函数可以被 protected ，不能被实例，但能被继承
var Person1 = /** @class */ (function () {
    function Person1(theName) {
        this.name = theName;
    }
    return Person1;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person1));
var howard1 = new Employee1('Jayant', 'four');
// let john = new Person1('john.'); // error   constructor is protected
// readonly  只读
var OctoPus = /** @class */ (function () {
    function OctoPus(name) {
        this.numberOfLefgs = 8;
        this.name = name;
    }
    return OctoPus;
}());
var dad = new OctoPus('Man with the 8 strong legs');
console.log(dad.name);
// 存取器   get set   
// let passcode = 'secret passcode';
// class Employee2 {
// 	private _fullName: string;
// 	get fullName (): string {
// 		return this._fullName;
// 	}
// 	set fullName (newName: string) {
// 		if (passcode && passcode == 'secret passcode') {
// 			this._fullName = newName;
// 		} else {
// 			console.log('Error: Unauthorized update of employee!');
// 		}
// 	}
// }
// let employeee = new Employee2();
// employeee.fullName = "Bob Smith";
// 静态属性, 这些属性存在类本身，而不是类的实例上，所以访问这个实例的时候，需要以 类.属性 获取
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// console.log(grid2.origin); // is a static member
// 抽象类
var Animal5 = /** @class */ (function () {
    function Animal5() {
    }
    Animal5.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal5;
}());
var Department2 = /** @class */ (function () {
    function Department2(name) {
        this.name = name;
    }
    Department2.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department2;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department2));
var department; // 允许创建一个对抽象类型的引用
var department22;
department22 = new AccountingDepartment();
// department = new Department2(); // error 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // error 声明的为 Department2 在其中不存在
department22.generateReports();
// 把类当成接口
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    return Point2;
}());
var point3d = { x: 1, y: 2, z: 3 };
