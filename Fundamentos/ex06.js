const peca = "CaVaLo".toLowerCase();

switch (peca) {
  case "cavalo":
    console.log('Cavalo -> Move em "L", podendo pular peças.');
    break;
  case "bispo":
    console.log("Bispo -> Move em diagonal.");
    break;
  case "torre":
    console.log("Torre -> Move na horizontal e vertical");
    break;
  case "rainha":
    console.log("Rainha -> Move na horizontal, vertical e diagonal.");
    break;
  case "rei":
    console.log("Rei -> Move somente uma casa para qualquer lado");
    break;
  case "peao":
    console.log(
      "Peão -> Move somente uma casa, no primeiro move pode ser duas"
    );
    break;
  default:
    console.log("Erro! Peça invalida.");
    break;
}
