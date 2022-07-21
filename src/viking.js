// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

let sol1 = new Soldier(4, 10);
console.log(sol1.receiveDamage(2));

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);

    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receivedDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    return "A Saxon has died in combat";
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let saxonRandom = Math.floor(this.saxonArmy.length * Math.random());
    let vikingRandom = Math.floor(this.vikingArmy.length * Math.random());

    this.saxonArmy[saxonRandom].receiveDamage(
      this.vikingArmy[vikingRandom].attack()
    );

    if (this.saxonArmy[saxonRandom].this.health < 0)
      delete this.saxonArmy[saxonRandom];

    return this.saxonArmy[saxonRandom].receiveDamage();
  }
  saxonAttack() {
    let saxonRandom = Math.floor(this.saxonArmy.length * Math.random());
    let vikingRandom = Math.floor(this.vikingArmy.length * Math.random());

    this.vikingArmy[vikingRandom].receiveDamage(
      this.saxonArmy[saxonRandom].attack()
    );

    if (this.vikingArmy[vikingRandom].this.health < 0)
      delete this.vikingArmy[vikingRandom];

    return this.vikingArmy[saxonRandom].receiveDamage();
  }
  showStatus() {}
}

// let saxon = new Saxon(4, 7);
// let viking1 = new Viking("Maxence", 5, 10);
// let viking2 = new Viking("Mostafa", 15, 20);

// viking1.vikingAttack;
