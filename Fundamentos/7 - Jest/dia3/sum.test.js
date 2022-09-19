const sum = require("./sum");

test("Verifica se 4 + 5 = 9", () => {
  expect(sum(4, 5)).toBe(9);
});

test("Verifica se 0 + 0 = 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("Verifica se lanca o erro se um numero for string", () => {
  expect(() => sum(4, "5")).toThrowError();
});

test("Verifica a mensagem de erro caso o numero for String", () => {
  expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
});
