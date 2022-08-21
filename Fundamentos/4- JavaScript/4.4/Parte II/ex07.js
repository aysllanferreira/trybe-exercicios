let JuntaTudo = (palavra1, palavra2) => {
  let pal1Inverso = palavra1.split("").reverse().join("");
  let pal2Inverso = palavra2.split("").reverse().join("");
  let res = "";

  for (let i = 0; i < pal2Inverso.length; i += 1) {
    if (pal1Inverso[i] !== pal2Inverso[i]) {
      res = false;
      break;
    } else {
      res = true;
    }
  }

  console.log(res);
};

JuntaTudo("trybe", "be");
JuntaTudo("andarilho", "casimiro");
