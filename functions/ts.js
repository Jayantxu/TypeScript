/**
*
*/
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
    return x + y;
};
// 参数数量
function buildName(firstName, lastName) {
    return firstName + '' + lastName;
}
buildName('Xu', 'Jayant');
// buildName('Xu'); // error 参数数量不对
// 可选参数
function buildName2(firstName, lastName) {
    return firstName + '' + lastName;
}
buildName2('Xu', 'Jayant');
buildName2('Xu');
// 默认参数
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'smooth'; }
    return firstName + '' + lastName;
}
buildName3('Xu');
// 剩余参数
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + '' + restOfName.join(' ');
}
var employee4 = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employee4);
