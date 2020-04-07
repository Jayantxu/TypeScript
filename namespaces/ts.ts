/**
* 命名空间
* 文件外 - 模块
* 文件内 - 命名空间
* namespace X {}
*/
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    // 两个变量不导出，因此，命名空间外访问不了
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
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



//  别名
//  使用 import 为 命名空间起别名
namespace Shapes12 {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}

import polygons12 = Shapes12.Polygons;
let sq = new polygons12.Square(); // Same as "new Shapes.Polygons.Square()"


