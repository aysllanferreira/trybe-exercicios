const a = 17;
const b = 17;
const c = 17;

if (a > b && a === c) {
  console.log(a + " é maior que " + b);
} else if (a > c && a === b) {
  console.log(a + " é maior que " + c);
} else if (a > b && a > c) {
  console.log(a + " é maior que " + b + " e " + c);
} else if (b > c && b > a) {
  console.log(b + " é maior que " + a + " e " + c);
} else if (c > b && c > a) {
  console.log(c + " é maior que " + a + " e " + b);
} else if (b > a && c > a && b === c) {
  console.log(b + " é maior que " + a);
} else {
  console.log(a + ", " + b + " e " + c + " são iguais.");
}
