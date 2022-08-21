let fatorial = 10;
let contagem = fatorial - 1;
let result = 0;

for (c = fatorial - 1; c >= 1; c--) {
  fatorial = fatorial * contagem;
  console.log(fatorial);
  contagem--;
}
