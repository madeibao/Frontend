
// 基本语法
interface Pair<T, U> {
    first: T;
    second: U;
}

// 使用泛型接口
let pair: Pair<string, number> = { first: "hello", second: 42 };
console.log(pair);

// 输出: { first: 'hello', second: 42 }

console.log("-----------------------------------")

function printArray<E>(arr: E[]): void {
    arr.forEach(item => console.log(item));
}

printArray([1, 2, 3, 4, 5]);
printArray([1.0, 2.0, 3.0, 5.0]);
printArray(["aa","ab","ac","ad"])