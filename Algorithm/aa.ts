function interpret(s: string): string {
    const n:number = s.length
    let ans:string = ''
    for (let i:number = 0; i < n;) {
        if (s[i] == 'G') {
            ans += 'G';
            i++
        } else if (i + 1 < n && s[i + 1] == ')') {
            ans += 'o';
            i += 2
        } else {
            ans += 'al';
            i += 4
        }
    }
    return ans
}

const command = "(al)G(al)()()G";
let a = interpret(command);
console.log(a);