const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function NumeroRomaninho(num) {
  num = num.toLowerCase();
  const tamanho = num.length;
  let sum = numerosRomanos[num[tamanho - 1]];
  let atual = numerosRomanos[num[tamanho - 1]];
  for (let i = 2; i <= tamanho; i += 1) {
    atual = ultimo;
    const ultimo = numerosRomanos[num[tamanho - i]];

    if (atual <= ultimo) {
      sum += ultimo;
    } else {
      sum -= ultimo;
    }
  }

  return sum;
}
console.log(NumeroRomaninho("XIV"));
