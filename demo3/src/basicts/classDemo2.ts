
class Product {
    private _price: number;
    private _count: number;

    constructor(price: number, count: number) {
        this._price = price;
        this._count = count;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) {
            throw new Error("价格不能为负数");
        }
        this._price = value;
    }

    get totalValue(): number {
        return this._price * this._count;
    }
}

const p = new Product(20, 500);
console.log(p.price);       // 20（触发 get）
p.price = 30;               // 触发 set，带校验
console.log(p.totalValue);  // 15000（只读）
// p.totalValue = 100;      // ❌ 编译错误：Cannot assign to 'totalValue' because it is a read-only property