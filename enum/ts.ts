/**
* 枚举
*/
enum Direction {
	Up = 1,
	Down,
	Left,
	Right
}
console.log(Direction.Up);

enum Direction2 {
	Up,
	Down,
	Left,
	Right
}
console.log(Direction2.Up);
console.log(Direction2[0]);

// 字符串枚举
console.log('***************');
enum Direction3 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right'
}
console.log(Direction3.Up);

//运行时枚举
enum E {
	X, Y, Z
} 
function f(obj: {X: number}) {
	console.log(obj.X);
}
f(E);

console.log('********');
// 反向映射
enum Enum {
	A
}
let a = Enum.A;
console.log(a);
let nameOfA = Enum[a];
console.log(nameOfA);


