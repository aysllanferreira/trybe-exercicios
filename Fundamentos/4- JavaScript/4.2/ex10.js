//Variaveis
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

//Numeros crescente
let crescente = () => {
  let cresce = numbers.sort((a, b) => a - b);
  console.log(cresce);
};

//Numeros decrescentes
let decrescente = () => {
  let decresce = numbers.sort((a, b) => b - a);
  console.log(decresce);
};

//Criando novo Array + Multiplicar pelo proximo
let newArray = () => {
  numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] != null) {
      newNumbers.push(numbers[i] * numbers[i + 1]);
    } else {
      newNumbers.push(numbers[i] * 2);
    }
  }
  console.log(newNumbers);
};

crescente();
decrescente();
newArray();
