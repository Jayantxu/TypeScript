/**
* 泛型
*/
// 定义泛型, T 获取用户传入的类型,之后就可以使用这个类型
function identity(arg) {
    return arg;
}
// 使用泛型
var output = identity('myString');
var output2 = identity('myString2');
// 使用泛型变量
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
var myIdentity = identity3;
function identity5(arg) {
    return arg;
}
var myIdentity2 = identity5;
// 泛型类
var GenericIdentityFn3 = /** @class */ (function () {
    function GenericIdentityFn3() {
    }
    return GenericIdentityFn3;
}());
var myGenericNumber = new GenericIdentityFn3();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentity2(arg) {
    console.log(arg.length);
    Error;
    return arg;
}
