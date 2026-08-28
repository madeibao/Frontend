
function longestCommonPrefix(strs: string[]): string {
    let str: string = strs[0];
    for (let i = 1; i < strs.length; i++) {
        str = maxLen(str, strs[i]);
    }
    return str;
};

function maxLen(strM: string, strN: string): string {
    let i: number = 0;
    let len: number = Math.min(strM.length, strN.length);
    let str: string = "";
    while (i < len) {
        if (strM[i] === strN[i]) {
            str += strN[i];
        } else {
            break;
        }
        i++;
    }
    return str;
}