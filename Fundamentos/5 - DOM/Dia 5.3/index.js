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

// Criacao do calendario
let calendar = () => {
  let ulMonth = createElements(criaUl);
  ulMonth.id = "days";

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let liMonth = createElements(criaLi);
    if (checkFriday(decemberDaysList[i]) && checkHoliday(decemberDaysList[i])) {
      liMonth.className = "day friday holiday";
      liMonth.innerText = decemberDaysList[i];
      ulMonth.appendChild(liMonth);
    } else if (checkFriday(decemberDaysList[i])) {
      liMonth.className = "day friday";
      liMonth.innerText = decemberDaysList[i];
      ulMonth.appendChild(liMonth);
    } else if (checkHoliday(decemberDaysList[i])) {
      liMonth.className = "day holiday";
      liMonth.innerText = decemberDaysList[i];
      ulMonth.appendChild(liMonth);
    } else {
      liMonth.className = "day";
      liMonth.innerText = decemberDaysList[i];
      ulMonth.appendChild(liMonth);
    }
  }
  body.appendChild(ulMonth);
};

calendar();
