
function areOccurrencesEqual(s: string): boolean {
    let map = new Map<string, number>();
    for(let str of s) {
        map.set(str, (map.get(str) || 0) + 1);
    }
    return [... new Set(map.values())].length === 1;
};

const res = areOccurrencesEqual("1122");
console.log(res);
