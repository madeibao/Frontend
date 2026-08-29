
function largestNumber(nums: number[]): string {
    nums.sort((x,y):1|-1=>{
        let sx:string=x.toString()
        let sy:string=y.toString()
        return Number(sy+sx)>Number(sx+sy) ? 1 :-1
    })

    if (nums[0]===0) {
        return '0'
    }

    return nums.join('')
};

const res:string = largestNumber([1,2,3]);
console.log(res);