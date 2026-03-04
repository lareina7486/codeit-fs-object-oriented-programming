// 1-07. 퀴즈 6 - RPG 전투 시스템

class Warrior {
  constructor({ name, maxHp, mp, attackPower, potionCount }) {
    this.name = name;
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.mp = mp;
    this.attackPower = attackPower;
    this.potionCount = potionCount;
  }

  // TODO: hp를 amount만큼 감소 (최소 0)
  takeDamage(amount) {
    // this.hp -= amount;
    // if (this.hp < 0) {
    //   this.hp = 0;
    // }
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

  // TODO:
  usePotion() {
    if (this.potionCount === 0) {
      return false;
    } else {
      this.hp += 30;
      if (this.hp > this.maxHp) {
        this.hp = this.maxHp;
      }
      this.potionCount -= 1;
      return true;
    }
  }

  getStatus() {
    return `${this.name} | HP:${this.hp}/${this.maxHp} MP:${this.mp} Potion:${this.potionCount}`;
    // TODO: "이름 | HP:현재/최대 MP:현재 Potion:개수" 형식
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
    this.hp -= amount;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  attack(target) {
    // TODO: target에게 기본 공격
    target.takeDamage(this.attackPower);
  }

  usePotion() {
    if (this.potionCount === 0) {
      return false;
    } else {
      this.hp += 30;
      if (this.hp > this.maxHp) {
        this.hp = this.maxHp;
      }
      this.potionCount -= 1;
      return true;
    }
    // TODO:
    // potionCount가 0이면 false 반환
    // 아니면 hp를 30 회복 (maxHp 초과 금지), potionCount 1 감소, true 반환
  }

  castFireball(target) {
    if (target.mp < 20) {
      return false;
    } else {
      this.mp -= 20;
      target.takeDamage(40);
      return true;
    }
    // TODO:
    // mp가 20 미만이면 false 반환
    // 아니면 mp를 20 차감하고 target에게 40 피해, true 반환
  }

  getStatus() {
    return `${this.name} | HP:${this.hp}/${this.maxHp} MP:${this.mp} Potion:${this.potionCount}`;
    // TODO: "이름 | HP:현재/최대 MP:현재 Potion:개수" 형식
  }
}

const warrior = new Warrior({
  name: '전사',
  maxHp: 140,
  mp: 30,
  attackPower: 18,
  potionCount: 1,
});
const mage = new Mage({
  name: '마법사',
  maxHp: 90,
  mp: 60,
  attackPower: 8,
  potionCount: 0,
});

warrior.attack(mage); // 마법사 HP: 72
mage.castFireball(warrior); // 전사 HP: 100, 마법사 MP: 40
warrior.powerStrike(mage); // 마법사 HP: 36, 전사 MP: 20
warrior.usePotion(); // 전사 HP: 130, 전사 Potion: 0

console.log(warrior.getStatus()); // "전사 | HP:130/140 MP:20 Potion:0"
console.log(mage.getStatus()); // "마법사 | HP:36/90 MP:40 Potion:0"
