
function isValid(s: string): boolean {
    const stack: string[] = [];
    const brackets: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const bracketsSet2: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // 用联合类型来约束相关内容
    type BracketKey = ')' | '}' | ']';
    type BracketValue = '(' | '{' | '[';

    const bracketsSet3: Record<BracketKey, BracketValue> = {
        ')': '(',
        '}': '{',
        ']': '['
    };


    for (const char of s) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if (bracketsSet2[char]) {
            if (stack.length === 0 || stack.pop() !== bracketsSet2[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

const testCases: string[] = [
    '()',
    '()[]{}',
    '(]',
    '([)]',
    '{[]}'];

console.log('Test Cases for isValid function:');
for (const testCase of testCases) {
    console.log(`isValid("${testCase}") = ${isValid(testCase)}`);
}