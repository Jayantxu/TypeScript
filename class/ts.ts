/** 类 */

// 继承
class Animal {
	move(distanceInMeters: number = 0) {
		console.log(`Animal move ${distanceInMeters} m`);
	}
}
class Dog extends Animal {
	bark () {
		console.log('woof! woof!')
	}
}
let XHdog = new Dog();
XHdog.bark();
XHdog.move(10);
XHdog.bark();


// public , 默认都为public
class Animal2 {
	public name: string;
	public constructor(theName: string) {this.name = theName;}
	public move (distanceInMeters: number) {
		console.log(`animal2 ${this.name} moved ${distanceInMeters} m`)
	}	
}
let publicAnimal = new Animal2('testPublic');
console.log(publicAnimal.name); // testPublic


// private
class Animal3 {
	private name: string;
	constructor(theName: string) { this.name = theName; }
}
let privateAnimal = new Animal3('testPrivate');
// console.log(privateAnimal.name); // error


// protected
class Person {
	protected name: string;
	constructor(theName: string) {
		this.name = theName;
	}
}
class Employee extends Person {
	private department: string;
	constructor (name: string, department: string) {
		super(name);
		this.department = department;
	}
	public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch()); // 可以在 getElevatorPitch 中访问到 protect 属性，派生类
// console.log(howard.name); // error  

// 构造函数可以被 protected ，不能被实例，但能被继承
class Person1 {
	protected name: string;
	protected constructor(theName: string) {
		this.name = theName;
	}
}
class Employee1 extends Person1 {
	private department: string;
	constructor(name: string, department: string) {
		super(name);
		this.department = department;
	}
	public getElevatorPitch () {
		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	}
}
let howard1 = new Employee1('Jayant', 'four');
// let john = new Person1('john.'); // error   constructor is protected


// readonly  只读
class OctoPus {
	readonly name: string;
	readonly numberOfLefgs: number = 8;
	constructor (name: string) {
		this.name = name;
	}
}
let dad = new OctoPus('Man with the 8 strong legs');
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
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.origin); // is a static member


// 抽象类

abstract class Animal5 {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

abstract class Department2 {
	constructor (public name: string) {
	}
	printName(): void {
		console.log('Department name: ' + this.name);
	}
	abstract printMeeting():void; // abstract 方法需在子类中实现
}
class AccountingDepartment extends Department2 {
    constructor() {
        super('Accounting and Auditing'); // 在子类的构造函数中必须调用 super()
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department2; // 允许创建一个对抽象类型的引用

let department22: AccountingDepartment;
department22 = new AccountingDepartment();

// department = new Department2(); // error 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // error 声明的为 Department2 在其中不存在
department22.generateReports();



// 把类当成接口
class Point2 {
    x: number;
    y: number;
}
interface Point3d extends Point2 {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};

