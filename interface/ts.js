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
var mySearchFunc;
mySearchFunc = function (source, subString) {
    // return 1; // Type 'number' is not assignable to type 'Boolean'
    return true;
};
var myArray;
myArray = ['Jayant', 'Xu'];
console.log(myArray[0]);
var myArray1 = ['Xu', 'Jayant'];
console.log(myArray1[0]);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var squarr = {}; // => let squarr: Square = {};
squarr.color = 'blue';
squarr.area = 100;
var penSquaree = {};
penSquaree.sideLength = 20;
penSquaree.penWidth = 30;
