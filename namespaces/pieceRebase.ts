// 多文件命名空间
// 如果相应的代码被分割成多个文件，虽然是不同的文件，但仍是同一个命名空间

/**
* How To Use ?
* tsc --outFile sample.js pieceOne.ts pieceTwo.ts pieceThree.ts pieceRebase.ts
*/


// <reference path="./Validation.ts" />
// <reference path="./LettersOnlyValidator.ts" />
// <reference path="./ZipCodeValidator.ts" />

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}