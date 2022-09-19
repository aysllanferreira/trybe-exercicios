const hydrate = (drink) => {
  const theDrink = drink.split(" ");
  let drinks = 0;
  let result;

  theDrink.forEach((element) =>
    !isNaN(Number(element)) ? (drinks += Number(element)) : ""
  );

  drinks === 1
    ? (result = `${drinks} copo de água`)
    : (result = `${drinks} copos de água`);

  return result;
};

module.exports = hydrate;
