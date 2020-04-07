export interface StringValidator {
	isAcceptable(s: string): boolean;
}
export const numberRegexp = /^[0-9]+$/;
class zipCodeValidator implements StringValidator {
	isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { zipCodeValidator };
// export { zipCodeValidator as mainValidator }; // 对导出重命名
