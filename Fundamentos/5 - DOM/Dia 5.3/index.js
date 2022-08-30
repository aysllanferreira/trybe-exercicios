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
const changeBg = (feriado, cor) => {
  for (let i = 0; i < feriado.length; i += 1) {
    feriado[i].style.backgroundColor = cor;
  }
};

// Funcao para chamar dinamicamente uma classe
const callClass = (idsx) => {
  return document.getElementById(idsx);
};

// Mudando cor dos feriados atraves do EventListener
let clicked = 0;
const changeColour = (classeBotao, corBotao, classeCor) => {
  let getButton = callClass(classeBotao, corBotao);
  getButton.addEventListener("click", () => {
    let getHolidays = document.getElementsByClassName(classeCor);
    if (clicked === 0) {
      changeBg(getHolidays, corBotao);
      clicked = 1;
    } else {
      changeBg(getHolidays, "rgb(238,238,238)");
      clicked = 0;
    }
  });
};

// Efeito Hover ao passar o mouse por cima dos numeros.
const hoverCalendar = (mouse, value) => {
  let getDays = document.getElementsByClassName("day");

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    getDays[i].addEventListener(mouse, () => {
      getDays[i].style.fontSize = value;
    });
  }
};

// Funcao para adicionar tasks
let getTaskDiv = document.getElementsByClassName("my-tasks")[0];
const myTasks = (value) => {
  let createSpan = document.createElement("span");
  createSpan.innerHTML = value;
  getTaskDiv.appendChild(createSpan);
};

// Adicionando legenda para tasks
const addLegTasks = (cor) => {
  let createLeg = document.createElement("div");

  createLeg.className = "task";
  createLeg.style.backgroundColor = cor;
  getTaskDiv.appendChild(createLeg);
};

let clicado = 0;
// Funcao que seleciona uma tarefa mudando sua classe
const selectTasks = (mouse, classe, classe2) => {
  let getTask = document.getElementsByClassName("task")[0];

  getTask.addEventListener(mouse, () => {
    if (clicado === 0) {
      getTask.className = classe;
      //console.log(getTask);
      clicado = 1;
    } else {
      getTask.className = classe2;
      //console.log(getTask);
      clicado = 0;
    }
    console.log(clicado);
  });
};

let newClick = 0;
// Adiciona cor da tarefa ao dia clicado
const addColourToDay = (acao, resetColour) => {
  let getColour =
    document.getElementsByClassName("task")[0].style.backgroundColor;
  let getDays = document.getElementsByClassName("day");

  for (let i = 0; i < getDays.length; i += 1) {
    getDays[i].addEventListener(acao, () => {
      if (newClick === 0) {
        getDays[i].style.color = getColour;
        newClick = 1;
      } else {
        getDays[i].style.color = resetColour;
        newClick = 0;
      }
    });
  }
};

// Tecla pressionada
const keyPressed = () => {
  let inputContainer = document.getElementsByClassName("input-container")[0];
  let getInput = document.getElementById("task-input");

  let getKey = addEventListener("keypress", (ev) => {
    const keyName = ev.key;
    if (keyName === "Enter") {
      let parCompro = document.createElement("p");
      parCompro.innerText = getInput.value;
      inputContainer.appendChild(parCompro);
      getInput.value = "";
    }
  });
};

// Requisito Bonus
const createCompromissos = (mode) => {
  let inputContainer = document.getElementsByClassName("input-container")[0];
  let getCompro = document.getElementById("btn-add");
  let getInput = document.getElementById("task-input");
  console.log(inputContainer);

  getCompro.addEventListener(mode, () => {
    if (getInput.value === "") {
      alert("Erro! Compromisso em branco!");
    } else {
      let parCompro = document.createElement("p");
      parCompro.innerText = getInput.value;
      inputContainer.appendChild(parCompro);
      getInput.value = "";
    }
  });
};

// Criacao do calendario
let ulMonth = createElements(criaUl);
ulMonth.id = "days";

verifyDays(ulMonth);

createButton("Feriados", "btn-holiday");
createButton("Sexta-feira", "btn-friday");
changeColour("btn-holiday", "red", "holiday");
changeColour("btn-friday", "green", "friday");

body.appendChild(ulMonth);

hoverCalendar("mouseenter", "30px");
hoverCalendar("mouseleave", "20px");

myTasks("Cozinhar");
addLegTasks("blue");

selectTasks("click", "task selected", "task");

addColourToDay("click", "rgb(119,119,119)");

createCompromissos("click");

keyPressed();
console.log(keyPressed());
