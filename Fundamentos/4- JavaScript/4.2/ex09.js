let conta = [];
let divs = [];

for (c = 1; c < 26; c++) {
  conta.push(c);
}

for (c = 0; c < conta.length; c++) {
  divs.push(conta[c] / 2);
}

console.log(divs);
