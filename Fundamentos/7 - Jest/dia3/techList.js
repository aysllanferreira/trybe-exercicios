const techList = (tech, nome) => {
  const naOrdem = tech.sort();
  let objeto;
  const arrayvazio = [];

  tech.forEach((element) => {
    objeto = {
      name: nome,
      tech: element,
    };
    arrayvazio.push(objeto);
  });

  if (arrayvazio.length === 0) return "Vazio!";

  return arrayvazio;
};

module.exports = techList;
