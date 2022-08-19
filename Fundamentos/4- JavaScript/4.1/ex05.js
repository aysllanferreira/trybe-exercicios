const a = 178;
const b = 1;
const c = 1;
const tot = a + b + c;

if (a < 0 || b < 0 || c < 0) {
  console.log("Erro, angulo invalido.");
} else if (tot === 180) {
  console.log("Isto é um triangulo válido");
} else {
  console.log("Isto não é um triangulo.");
}
