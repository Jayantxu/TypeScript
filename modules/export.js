"use strict";
exports.__esModule = true;
exports.numberRegexp = /^[0-9]+$/;
var zipCodeValidator = /** @class */ (function () {
    function zipCodeValidator() {
    }
    zipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return zipCodeValidator;
}());
exports.zipCodeValidator = zipCodeValidator;
// export { zipCodeValidator as mainValidator }; // 对导出重命名
