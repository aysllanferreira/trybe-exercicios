body = document.body;

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// Variaveis para criar os elementos.
const criaUl = "ul";
const criaLi = "li";
let getDivButton = document.getElementsByClassName("buttons-container")[0];

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
const addDaysElements = (lista, elemento, myUl) => {
  lista.innerText = elemento;
  myUl.appendChild(lista);
};

// Verifica se eh feriado, dia comum ou sexta-feira
const verifyDays = (uls) => {
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

// Cria botao feriado
const createButton = (btnName, btnId) => {
  let createNewButton = document.createElement("button");
  createNewButton.id = btnId;
  createNewButton.innerText = btnName;
  getDivButton.appendChild(createNewButton);
};

// Funcao para mudar Background do Holiday
let changeBg = (feriado, cor) => {
  for (let i = 0; i < feriado.length; i += 1) {
    feriado[i].style.backgroundColor = cor;
  }
};

// Mudando cor dos feriados atraves do EventListener
let clicked = 0;
let changeColour = () => {
  let getButton = document.getElementById("btn-holiday");
  getButton.addEventListener("click", () => {
    let getHolidays = document.getElementsByClassName("holiday");
    if (clicked === 0) {
      changeBg(getHolidays, "red");
      clicked = 1;
    } else {
      changeBg(getHolidays, "rgb(238,238,238)");
      clicked = 0;
    }
  });
};

// Criacao do calendario
const calendar = () => {
  let ulMonth = createElements(criaUl);
  ulMonth.id = "days";

  verifyDays(ulMonth);

  createButton("Feriados", "btn-holiday");
  createButton("Sexta-feira", "btn-friday");
  changeColour();

  body.appendChild(ulMonth);
};

calendar();
