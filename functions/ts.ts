/**
* 
*/

function add (x: number, y: number): number {
	return x + y;
}
let myAdd = function(x: number, y: number): number {
	return x + y;
}
let myAdd2 = (x: number, y: number): number => {
	return x + y;
}

// 参数数量
function buildName(firstName: string, lastName: string) {
	return firstName + '' + lastName;
}
buildName('Xu', 'Jayant');
// buildName('Xu'); // error 参数数量不对

// 可选参数
function buildName2(firstName: string, lastName?: string) {
	return firstName + '' + lastName;
}
buildName2('Xu', 'Jayant');
buildName2('Xu');

// 默认参数
function buildName3(firstName: string, lastName = 'smooth') {
	return firstName + '' + lastName;
}
buildName3('Xu');


// 剩余参数
function buildName4(firstName: string, ...restOfName: string[]) {
	return firstName + ' ' + restOfName.join(' ');
}
let employee4 = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employee4);


// 重载
// 方法会为同一个函数提供多个函数类型定义来进行重载

