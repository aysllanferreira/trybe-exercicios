const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const formatedBookNames = () => books.map((element) => `${element.name} - ${element.genre}, ${element.author.name}`);
  
//   console.log(formatedBookNames());

const nameAndAge = () => books.map((element) => ({age : element.releaseYear - element.author.birthYear, author : element.author.name})).sort((e1, e2) => e1.age - e2.age);

//   console.log(nameAndAge());

const fantasyOrScienceFiction = () => books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');

// console.log(fantasyOrScienceFiction());

const year = new Date().getFullYear();
const oldBooksOrdered = () => books.filter((element) => year - element.releaseYear >= 60).sort((e1, e2) => e1.releaseYear - e2.releaseYear);

// console.log(oldBooksOrdered());

const fantasyOrScienceFictionAuthors = () =>  fantasyOrScienceFiction().map((element) => element.author.name).sort();

// console.log(fantasyOrScienceFictionAuthors());

const oldBooks = () => books.filter((element) => year - element.releaseYear >= 60).map((e) => e.name)

// console.log(oldBooks());

const authorWith3DotsOnName = () => books.find((element) => (element.author.name.split(' ').filter((e) => e.endsWith('.')).length === 3)).name;

console.log(authorWith3DotsOnName());

