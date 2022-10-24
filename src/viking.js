// Soldier
class Soldier {
constructor(health, strength){
    this.health= health;
    this.strength= strength;}
attack(){return this.strength;}
receiveDamage(damage){this.health -= damage;}
}

// Viking
class Viking extends Soldier {
    constructor(name,health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        return this.health > 0? `${this.name} has received ${damage} points of damage`: `${this.name} died in act of combat`;

    }
    battleCry(){
        return `Odin Owns You All`;
    }
}

// Saxon
class Saxon {}

// War
class War {}
const war1 = new War()
const viking1 = new Viking('Ragnar', 100, 150);
const saxon1 = new Saxon(150, 100);
viking1.attack()

war1.addViking(viking1)
war1.addSaxon(saxon1)
