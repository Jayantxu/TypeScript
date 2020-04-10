/**
* TypeScript 的类型兼容基于结构子类型
*/
var x;
var y = { name: 'Alice', location: 'Seattle' };
x = y;
console.log(x);
console.log(y);
// 检查函数参数也具有相同的规则
function greet(n) {
    console.log('Hello' + n.name);
}
greet(y);
// 比较两个函数
var x1 = function (a) { return 0; };
var y1 = function (a, b) { return 0; };
y1 = x1;
// x 能赋值给 y, 因为 x 具备了 y 里能找到对应类型的参数。
// x = y; // error 因为 y 内 具备 x 中没有的参数， 所以无法进行赋值
// 可选参数 和 额外参数
function invokeLater(args, callback) {
    /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
// 类
// 类的比较的时候,只有实例的成员会被比较，静态成员和构造函数不在比较范围内
var Animal = /** @class */ (function () {
    function Animal(name, numFett) {
    }
    return Animal;
}());
var Size = /** @class */ (function () {
    function Size(name) {
    }
    return Size;
}());
var aa;
var ss;
aa = ss;
ss = aa;
var xxx1;
var yyy2;
xxx1 = yyy2;
var xxx11;
var yyy22;
xxx11 = yyy22;
