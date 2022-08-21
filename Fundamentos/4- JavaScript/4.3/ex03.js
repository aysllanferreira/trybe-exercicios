let array = ["java", "javascript", "python", "html", "css"];
let menor = Number.NEGATIVE_INFINITY;
let maior = Infinity;

for (c = 0; c < array.length; c++) {
  if (array[c].length > menor) {
    menor = c;
  }

  if (array[c].length < maior) {
    maior = c;
  }
}

console.log("A maior palavra do array é " + array[maior + 1]);
console.log("A menor palavra do array é " + array[menor + 1]);
