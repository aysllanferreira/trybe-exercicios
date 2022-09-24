const searchEmployee = require("./searchEmployee");

describe("Verifica se o id / dados estao sendo encontrados", () => {
  it("Verifica se searchEmployee eh uma funcao", () => {
    expect(typeof searchEmployee).toBe("function");
  });

  it("Verifica se o ID eh existente!", () => {
    expect(searchEmployee("4678-21", "firstName")).toBe("ID não identificado");
  });

  it("verifica se o firstName coincide com o id", () => {
    expect(searchEmployee("4456-4", "firstName")).toBe("Leila");
  });

  it("verifica se o lastName coincide com o id", () => {
    expect(searchEmployee("9852-2-2", "lastName")).toBe("Cook");
  });

  it("verifica se o specialities coincide com o id", () => {
    expect(searchEmployee("5569-4", "specialities")).toStrictEqual(["Frontend", "Redux", "React", "CSS"]);
  });
});
