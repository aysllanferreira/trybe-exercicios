const myFizzBuzz = require("./myFizzBuzz");

test("Verifica se um numero divisivel por 3 e 5 retorna FizzBuzz", () => {
  expect(myFizzBuzz(30)).toBe("fizzbuzz");
});

test("Vereifica se um numero divisivel por 3 retorna fizz", () => {
  expect(myFizzBuzz(9)).toBe("fizz");
});

test("Verifica se um numero divisivel por 5 retorna buzz", () => {
  expect(myFizzBuzz(10)).toBe("buzz");
});

test("Verifica se um numero nao divisivel por 3 e 5 retorna ele mesmo", () => {
  expect(myFizzBuzz(7)).toBe(7);
});

test("Verifica se algo nao for um numero retorna falso", () => {
  expect(myFizzBuzz("Paulo")).toBeFalsy();
});
