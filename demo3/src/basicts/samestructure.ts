
function isIsomorphic(s: string, t: string): boolean {
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
            return false;
        }
        if (tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
            return false;
        }
        sMap.set(s[i], t[i]);
        tMap.set(t[i], s[i]);
    }
    return true
};


function isIsomorphic2(s: string, t: string): boolean {
    if(s.length === 0 && t.length === 0) return true;
    for(let i:number = 0; i < s.length; i++){
        if(s.indexOf(s[i]) !== t.indexOf(t[i])){
            return false;
        }
    }
    return true;
};

const res:boolean = isIsomorphic("abb", "cdd");
const res2:boolean = isIsomorphic2("abb", "cdd");

console.log(res);
console.log(res2);



