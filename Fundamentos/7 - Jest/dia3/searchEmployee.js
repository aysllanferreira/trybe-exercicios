// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  let result;
  let ids = "";
  // Implemente seu código aqui
  professionalBoard.forEach((e) => {
    id === e.id ? (ids = e.id) : null;
  });

  if (ids === "") return "ID não identificado";

  professionalBoard.forEach((e) => {
    if (ids === e.id && detail === "firstName") result = e.firstName;
  });

  professionalBoard.forEach((e) => {
    if (ids === e.id && detail === "lastName") result = e.lastName;
  });

  professionalBoard.forEach((e) => {
    if (ids === e.id && detail === "specialities") result = e.specialities;
  });

  return result;
};

searchEmployee();
module.exports = searchEmployee;
