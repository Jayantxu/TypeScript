/**
* How to Use
* npm install -g typescript
* cmd tsc ts.ts
*/

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