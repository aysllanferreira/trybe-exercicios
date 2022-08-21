let n = 5;
let meio = (n + 1) / 2;
let ast = "*";
let esp = "";
let esq = meio;
let dir = meio;

for (let i = 0; i <= meio; i += 1) {
  for (let ind = 0; ind <= n; ind++) {
    if (ind < dir && ind > esq) {
      esp += ast;
    } else {
      esp = esp + " ";
    }
  }
  console.log(esp);
  dir += 1;
  esq -= 1;
  esp = "";
}
