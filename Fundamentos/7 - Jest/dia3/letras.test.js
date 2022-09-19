const { encode, decode } = require("./letras");

describe("Testa as funcoes de decode e encode", () => {
  it("Verifica se encode esta definido", () => {
    expect(encode).toBeDefined();
  });

  it("Verifica se decode esta definido", () => {
    expect(decode).toBeDefined();
  });

  it("Verifica se vogais viram numeros", () => {
    expect(encode("aeiou")).toBe("12345");
  });

  it("Verifica se numeros viram vogais", () => {
    expect(decode("12345")).toBe("aeiou");
  });

  it("Verifica se demais letras nao viram numeros", () => {
    expect(encode("bcdfla")).toBe("bcdfl1");
  });

  it("Verifica se demais demais numeros nao viram letras", () => {
    expect(decode("67891")).toBe("6789a");
  });

  it("Verifica se o parametro tem o mesmo tamanho do retorno", () => {
    expect(encode("aloGalera").length).toBe(9);
  });

  it("Verifica se o parametro tem o mesmo tamanho do retorno", () => {
    expect(decode("123456").length).toBe(6);
  });
});
