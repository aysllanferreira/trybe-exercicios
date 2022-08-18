const custo = 2000;
const imposto = custo + custo * 0.2;
const venda = 3200;
const lucro = venda - imposto;

if (custo <= 0 || venda <= 0) {
  console.log("Valor invalido");
} else {
  console.log("Seu produto custa R$" + custo + ".00");
  console.log(
    "Há um juros de 20% sob o custo, então ele custa R$" + imposto + ".00"
  );
  console.log("Você vendeu por R$" + venda + ".00");
  console.log("Seu lucro líquido é de R$" + lucro + ".00" + " por produto.");
  console.log(
    "Vendendo 1000 produtos, seu lucro será de R$" + lucro * 1000 + ".00"
  );
}
