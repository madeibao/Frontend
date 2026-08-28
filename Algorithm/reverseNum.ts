function reverse(x: number): number {

    const Max: number = Math.pow(2, 31)-1;
    const Min: number = Math.pow(-2,31);

    let num: number = x;
    let res: number = 0;
    while (num) {
        res = res*10 + num%10;
        if(res > Max || res < Min) {
            return 0;
        }
        num = Math.trunc(num/10);
    }
    return res;
};

const res = reverse(200);
console.log(res);