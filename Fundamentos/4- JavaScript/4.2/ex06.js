let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (c = 0; c < numbers.length; c++) {
  if (numbers[c] % 2 === 1) {
    impares++;
  }
}

if (impares === 0) {
  console.log("Nenhum valor encontrado");
} else {
  console.log("Há " + impares + " números impares no array.");
}
