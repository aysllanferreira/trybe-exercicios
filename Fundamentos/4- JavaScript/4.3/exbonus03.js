let n = 15;
let c = n;
let ast = "";
let esp = "";

for (let a = 0; a < n; a++) {
  ast += "*";
  for (let i = 0; i < c; i++) {
    esp += " ";
  }
  console.log(esp + ast);
  c--;
  esp = "";
}
