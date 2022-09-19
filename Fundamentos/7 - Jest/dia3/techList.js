const techList = (tech, nome) => {
  const naOrdem = tech.sort();
  let objeto;
  const arrayvazio = [];
  for (let i = 0; i < tech.length; i += 1) {
    objeto = {
      name: nome,
      tech: naOrdem[i],
    };
    arrayvazio.push(objeto);
  }

  if (arrayvazio.length === 0) {
    return "Vazio!";
  }

  return arrayvazio;
};

module.exports = techList;
