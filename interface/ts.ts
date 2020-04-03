
/**可选属性*/
interface SquareConfig {
	// color?: boolean; // error
	color?: string;
	width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({color: 'black'});


/**只读*/
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {x: 10, y: 15};
// p1.x = 5 // error - readonly


/** readonlyArray , array just read*/
let arr1: number[] = [1,2,3,4,5];
let arr2: ReadonlyArray<number> = arr1;
// arr2.length = 100; // error
// arr2.push(7); // error


/** 额外检查 */
interface SquareConfig2 {
    color?: String;
    width?: Number;
    [propName: string]: any;
}


/** 函数类型 */
interface SearchFunc {
    (source: String, subString: String): Boolean;
}
let mySearchFunc: SearchFunc;
mySearchFunc = function (source: String, subString: String) {
    // return 1; // Type 'number' is not assignable to type 'Boolean'
    return true;
}


/** 可索引类型 */
interface IndexArray {
    [index: number]: string;
}
let myArray: IndexArray;
myArray = ['Jayant', 'Xu'];
console.log(myArray[0]);

let myArray1: string[] = ['Xu', 'Jayant'];
console.log(myArray1[0]); 



/** 类类型 */
interface ClockInterfacex {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterfacex {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
// 检测 constructor
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


/** 继承接口 */
interface Shape {
    color: string;
}
interface Square extends Shape {
    area: number;
}
let squarr = <Square>{}; // => let squarr: Square = {};
squarr.color = 'blue';
squarr.area = 100;
// 继承多个接口
interface PenStroke {
    penWidth: number;
}
interface penSquare extends Shape,PenStroke {
    sideLength: Number;
}
let penSquaree = <penSquare>{};
penSquaree.sideLength = 20;
penSquaree.penWidth = 30;
