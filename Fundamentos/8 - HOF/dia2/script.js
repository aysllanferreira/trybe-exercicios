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

  function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((name) => name.author.birthYear === 1947);
  }

//   console.log(authorBornIn1947(books).author.name);

  function smallerName() {
    let nameBook;
    let qnt = Number.POSITIVE_INFINITY;
    books.forEach((element) => {
        if(element.name.length < qnt){
            qnt = element.name.length;
            nameBook = element.name;
        }
    });
    return nameBook;
  }

//   console.log(smallerName());

function getNamedBook() {
    return books.find((element) => element.name.length === 26);
  }

//   console.log(getNamedBook().name);

function booksOrderedByReleaseYearDesc() {
    return books.sort((a,b) => b.releaseYear - a.releaseYear);
  }

//   console.log(booksOrderedByReleaseYearDesc());

function everyoneWasBornOnSecXX() {
    return books.every((element) => element.author.birthYear <= 2000 && element.author.birthYear >= 1900);
  }

//   console.log(everyoneWasBornOnSecXX());

function someBookWasReleaseOnThe80s() {
    return books.some((element) => element.releaseYear >= 1980 || element.releaseYear <= 1989);
  }

//   console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
    return books.every((element) =>
      !books.some((element2) =>
        (element2.author.birthYear === element.author.birthYear)
        && (element2.author.name !== element.author.name)));
  }
  
console.log(authorUnique());