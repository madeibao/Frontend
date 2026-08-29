let val:string|number
val = 12
console.log("数字为 "+ val)
val = "Runoob"
console.log("字符串为 " + val)


let arr: number[] | string[];
let i:number;
arr = [1,2,4]
console.log("**数字数组**")

for (i = 0;i<arr.length;i++) {
    console.log(arr[i])
}

arr = ["Runoob","Google","Taobao"]
console.log("**字符串数组**")

for(i = 0;i<arr.length;i++) {
    console.log(arr[i])
}