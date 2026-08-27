
class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public get getName(): string {
        return this.name;
    }

    public get getPrice(): number {
        return this.price;
    }

    set setPrice(price: number) {
        this.price = price;
    }

    set setName(name: string) {
        this.name = name;
    }

    greet(): string {
        // 继承 JavaScript 的语法结构，反引号 ` 和$
        return `Hello, my name is ${this.name}`;
    }
}

const product = new Product("Apple", 5000);
console.log(product);
console.log(product.getPrice);
console.log(product.getName);
console.log(product.greet());