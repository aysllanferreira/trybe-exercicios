let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = Infinity;

for (c = 0; c < numbers.length; c++) {
  if (numbers[c] < menor) {
    menor = numbers[c];
  }
}

console.log(menor);
