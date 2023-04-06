export class Product {
  private name: string;
  private price: string;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price.toLocaleString();
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price.toLocaleString();
  }
  setName(input: string) {
    this.name = input;
  }
  setPrice(input: number) {
    this.price = input.toLocaleString();
  }
}

class ProductManager {
    private products: Product[] = [];
    constructor() {

    }
    getAll() {
        return this.products;
    }
    add(product: Product) {
        this.products.push(product);
    }
}

let laptop = new Product('Laptop', 20000);
let iPhone = new Product('Phone', 10000);
let productMNG = new ProductManager;
productMNG.add(laptop);
productMNG.add(iPhone);
console.log(laptop.getPrice());
console.table(productMNG.getAll());
iPhone.setPrice(30000);
console.table(productMNG.getAll());