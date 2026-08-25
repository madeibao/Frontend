
function isValid(s: string): boolean {
    const stack: string[] = [];
    const brackets: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if (brackets[char]) {
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
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