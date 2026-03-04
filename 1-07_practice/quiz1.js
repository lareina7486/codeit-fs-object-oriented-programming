// 1-07. 퀴즈 1 - getLabel() 완성

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getLabel() {
    return (`${this.name}(${this.price}원)`);
  }
}

const p = new Product("스웨터", 30_000);
console.log(p.getLabel()); // "스웨터(30000원)"
