const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Comecando a elobrar
const dStrength = dragon.strength;
const wStrenth = warrior.strength;
const mInteligence = mage.intelligence;
let mMana = mage.mana;

const mageControlOfMana = () => {
  if(mMana > 0) return mMana -= 15;
  return 'Não possui mana suficiente';
}

const dragonDmg = () => Math.floor(Math.random() * (dStrength - 15) + 15)
const warriorDmg = () => Math.floor(Math.random() * (wStrenth * 2 - wStrenth) + wStrenth);
const mageDmg = () => {
  return {damage : Math.floor(Math.random () * (mInteligence * 2 - mInteligence) + mInteligence), mana : mageControlOfMana()};
}

const gameActions = {
  warriorTurn : (wAtk) => {
    const dmg =  wAtk();
    dragon.healthPoints -= dmg;
    warrior.damage = dmg;
  },
  mageTurn : (mAtk) => {
    const dmg =  mAtk().damage
    dragon.healthPoints -= dmg;
    mage.mana = mAtk().mana;
    mage.damage = dmg;
  },
  dragonTurn : (dAtk) => {
    const dmg = dAtk();
    warrior.healthPoints = dmg;
    mage.healthPoints = dmg;
    dragon.damage = dmg;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDmg);
gameActions.mageTurn(mageDmg);
gameActions.dragonTurn(dragonDmg);

console.log(gameActions.turnResults());