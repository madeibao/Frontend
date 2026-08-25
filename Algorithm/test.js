/**
 * @return {boolean}
 */

function isPalindrome(x) {
    // 1. x < 0 的数字一定不是回文数，因为 -121 不等于 121-
    // 2. 个位数是 0 的数字也一定不是回文数，0 除外
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let s = String(x),
        rs = '';
    for (let i = s.length - 1; i >= 0; i--) {
        rs += s[i];
    }
    return s === rs;
}

console.log(isPalindrome(22))