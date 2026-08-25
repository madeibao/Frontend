
let twoSum= function(nums: Array<number>, target: number) {
    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i];
        // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == dif)
                return [i,j];
        }
    }
};

let nums = [2,7,10,12]
let target = 9
const res = twoSum(nums, target);

console.log(res[0],res[1])