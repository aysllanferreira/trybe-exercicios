let n = 7;
let ast = "";

if (n <= 0) {
  console.log("Erro! Digite um número maior que 0.");
} else {
  for (let i = 0; i < n; i++) {
    for (let x = 0; x < n; x++) {
      ast += "*";
    }
    console.log(ast);
    ast = "";
  }
}
