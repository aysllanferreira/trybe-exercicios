const numeroPrimo = (numb) => {
  for (let div = 2; div < numb; div++)
    if (numb % div == 0) {
      return false;
    }

  return true;
};

let numeroLimite = 50;
let maior = 0;

for (let i = 2; i < numeroLimite; i++) {
  if (numeroPrimo(i)) {
    maior = i;
  }
}

console.log(maior);
