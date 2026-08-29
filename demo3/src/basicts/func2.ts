
// 匿名函数
const test= (x:number):void => {
    x = 10 + x;
    console.log(x);
}

test(100);

let add: (a: number, b: number) => number = (a, b) => a + b;

console.log("add2: " + add(3,4))