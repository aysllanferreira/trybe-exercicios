const salario = 6600;
let salarioLiq = 0;
let inss = 0;

if (salario < 1556.94) {
  inss = salario * 0.08;
} else if (salario <= 2594.92) {
  inss = salario * 0.09;
} else if (salario <= 5189.82) {
  inss = salario * 0.11;
} else {
  inss = 570.88;
}

const newSalario = salario - inss;

if (newSalario < 1903.98) {
  salarioLiq = salario;
} else if (newSalario <= 2826.65) {
  salarioLiq = newSalario - (newSalario * 0.075 - 142.8);
} else if (newSalario <= 3751.05) {
  salarioLiq = newSalario - (newSalario * 0.15 - 354.8);
} else if (newSalario <= 4664.68) {
  salarioLiq = newSalario - (newSalario * 0.225 - 636.13);
} else {
  salarioLiq = newSalario - (newSalario * 0.275 - 869.36);
}

console.log("Salario bruto de R$" + salario);
console.log("Descontando INSS e IR, o salario liquido fica R$" + salarioLiq);
