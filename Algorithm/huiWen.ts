function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    if (x == 0) {
        return true;
    }
    if (x > 0 && x < 10) {
        return true;
    }

    let ans: number = 0;
    let num: number = x;

    while (num) {
        ans = ans * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return ans === x;
};


const a:boolean = isPalindrome(11);
const b:boolean = isPalindrome(13);
const c:boolean = isPalindrome(22);
const d:boolean = isPalindrome(121);

console.log(isPalindrome(22));
console.log(a);
console.log(b);
console.log(c);
console.log(d);