
// 接口完全是为了方便人类的理解来定义的，
interface Product {
    name: string;
    price: number;
    count: number;
}

function createProduct(name: string, price: number, count: number): Product {
    return {name, price, count};
}

const product = createProduct("APPLE", 5000, 20);
console.log(product);