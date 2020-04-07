/**
* 迭代器和生成器
*/
// for...of   和 for...in
let someArray = [1, "string", false];
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

let list = [4, 5, 6];
for (let i in list) {
    console.log(i); // "0", "1", "2",
}
for (let i of list) {
    console.log(i); // "4", "5", "6"
}