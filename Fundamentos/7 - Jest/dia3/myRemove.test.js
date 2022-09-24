const myRemove = require("./myRemove");

test("Verifica se retorna o array esperado", () => {
  expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
});

test("Verifica se nao retorna o array completo", () => {
  expect(() => myRemove([1, 2, 3, 4], 3).not.toBe([1, 2, 3, 4]));
});

test("Verifica se nao inclui algo que nao existe", () => {
  expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
});
