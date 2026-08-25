function interpret(s) {
    var n = s.length;
    var ans = '';
    for (var i = 0; i < n;) {
        if (s[i] == 'G') {
            ans += 'G';
            i++;
        }
        else if (i + 1 < n && s[i + 1] == ')') {
            ans += 'o';
            i += 2;
        }
        else {
            ans += 'al';
            i += 4;
        }
    }
    return ans;
}
var command = "(al)G(al)()()G";
var a = interpret(command);
console.log(a);
