class Warrior {
  constructor({ name, maxHp, mp, attackPower, potionCount }) {
    this.name = name;
    this.maxHp = maxHp;
    this.hp = maxHp; // 초기 체력은 최대 체력과 같습니다
    this.mp = mp;
    this.attackPower = attackPower;
    this.potionCount = potionCount;
  }

  takeDamage(amount) {
    this.hp = Math.max(this.hp - amount, 0);
  }

  attack(target) {
    target.takeDamage(this.attackPower);
  }

  powerStrike(target) {
    if (this.mp < 10) {
      return false;
    }
    this.mp -= 10;
    target.takeDamage(this.attackPower * 2);
    return true;
  }

  usePotion() {
    if (this.potionCount === 0) {
      return false;
    }
    this.hp = Math.min(this.hp + 30, this.maxHp);
    this.potionCount -= 1;
    return true;
  }

  getStatus() {
    return `${this.name} | HP:${this.hp}/${this.maxHp} MP:${this.mp} Potion:${this.potionCount}`;
  }
}

class Mage {
  constructor({ name, maxHp, mp, attackPower, potionCount }) {
    this.name = name;
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.mp = mp;
    this.attackPower = attackPower;
    this.potionCount = potionCount;
  }

  takeDamage(amount) {
    this.hp = Math.max(this.hp - amount, 0);
  }

  attack(target) {
    target.takeDamage(this.attackPower);
  }

  usePotion() {
    if (this.potionCount === 0) {
      return false;
    }
    this.hp = Math.min(this.hp + 30, this.maxHp);
    this.potionCount -= 1;
    return true;
  }

  castFireball(target) {
    if (this.mp < 20) {
      return false;
    }
    this.mp -= 20;
    target.takeDamage(40);
    return true;
  }

  getStatus() {
    return `${this.name} | HP:${this.hp}/${this.maxHp} MP:${this.mp} Potion:${this.potionCount}`;
  }
}
