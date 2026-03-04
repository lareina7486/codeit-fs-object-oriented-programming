// 1-07. 퀴즈 3 - 장바구니 총합

class Cart {
  constructor() {
    this.totalPrice = 0;
    this.items = [];
  }

  addItem(item) {
    // this.name = item.name;
    this.items.push(item);
    this.totalPrice += item.price;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getItems() {
    return this.items;
  }
}

const cart = new Cart();
cart.addItem({ name: '스웨터', price: 30_000 });
cart.addItem({ name: '청바지', price: 50_000 });
console.log(cart.getTotalPrice()); // 80000
console.log(cart.getItems());
