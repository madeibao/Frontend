
// 传统函数定义
const add1 = function(a: number, b: number): number {
    return a + b;
};

// 箭头函数：单行函数可以省略大括号和 return
const add2 = (a: number, b: number): number => a + b;

// 单参数可以省略括号
const double = (n: number): number => n * 2;

// 无参数函数
const getRandom = (): number => Math.random();

console.log("add1: " + add1(1, 2));
console.log("add2: " + add2(3, 4));
console.log("double: " + double(5));
console.log("random: " + getRandom().toFixed(2));
