let n = 13;
let ast = "*";

let meio = (n + 1) / 2;
let esq = meio;
let dir = meio;

for (let i = 1; i <= meio; i += 1) {
  let linhadefora = "";
  for (let ind = 1; ind <= n; ind += 1) {
    if (ind == meio || ind == esq || i == dir) {
      linhadefora += ast;
    } else {
      linhadefora += " ";
    }
  }
  esq -= 1;
  dir += 1;
  console.log(linhadefora);
}
