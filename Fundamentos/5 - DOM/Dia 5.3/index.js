body = document.body;

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// Variaveis para criar os elementos.
const criaUl = "ul";
const criaLi = "li";

// Funcao para criar os elementos dinamicamente
const createElements = (elements) => {
  return document.createElement(elements);
};

// Verificacao de sextas e feriados
const checkHoliday = (value) => {
  return value === 24 || value === 25 || value === 31;
};

const checkFriday = (value) => {
  return value === 4 || value === 11 || value === 18 || value === 25;
};

// Adiciona os dias do calendario no elemento li.
let addDaysElements = (lista, elemento, myUl) => {
  lista.innerText = elemento;
  myUl.appendChild(lista);
};

// Verifica se eh feriado, dia comum ou sexta-feira
let verifyDays = (uls) => {
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let liMonth = createElements(criaLi);
    if (checkFriday(decemberDaysList[i]) && checkHoliday(decemberDaysList[i])) {
      liMonth.className = "day friday holiday";
      addDaysElements(liMonth, decemberDaysList[i], uls);
    } else if (checkFriday(decemberDaysList[i])) {
      liMonth.className = "day friday";
      addDaysElements(liMonth, decemberDaysList[i], uls);
    } else if (checkHoliday(decemberDaysList[i])) {
      liMonth.className = "day holiday";
      addDaysElements(liMonth, decemberDaysList[i], uls);
    } else {
      liMonth.className = "day";
      addDaysElements(liMonth, decemberDaysList[i], uls);
    }
  }
};
// Criacao do calendario
let calendar = () => {
  let ulMonth = createElements(criaUl);
  ulMonth.id = "days";

  verifyDays(ulMonth);

  body.appendChild(ulMonth);
};

calendar();
