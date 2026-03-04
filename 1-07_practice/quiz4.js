// 1-07. 퀴즈 4 - 할인 가격 라벨

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPriceLabel(discountRate = 0) {
    return (discountRate ? `${this.price * (1-discountRate)}원` : `${this.price}원`);
  }
}

const p = new Product("자켓", 100_000);
console.log(p.getPriceLabel());    // "자켓: 100000원"
console.log(p.getPriceLabel(0.2)); // "자켓: 80000원"
