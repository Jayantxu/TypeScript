/**
* How to Use
* npm install -g typescript
* cmd tsc ts.ts
*/
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({ color: 'black' });
var p1 = { x: 10, y: 15 };
// p1.x = 5 // error - readonly
/** readonlyArray , array just read*/
var arr1 = [1, 2, 3, 4, 5];
var arr2 = arr1;
// arr2.length = 100; // error
arr2.push(7); // error
