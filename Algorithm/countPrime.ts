
class Solution {
    countPrimes(n: number): number {
        if (n<2) {
            return 0;
        }
        // @ts-ignore
        const isPrime:Array<boolean> = new Array<boolean>(n).fill(true);
        isPrime[0] = false;
        isPrime[1] = false;
        for (let i=2;i*i<n;i++) {
            if (isPrime[i]) {
                for (let j=i*i;j<n;j+=i) {
                    isPrime[j]= false;
                }
            }
        }
        let count = 0;
        for (let i=2;i<n;i++) {
            if (isPrime[i]) {
                count++;
            }
        }
        return count;
    }
}

const s = new Solution();
console.log(s.countPrimes(10));
