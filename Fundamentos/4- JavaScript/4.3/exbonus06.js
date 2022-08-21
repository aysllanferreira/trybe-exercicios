let div = 1;
let npc = 47;

for (let i = 2; i <= npc; i += 1) {
  if (npc % i === 0) {
    div += 1;
  }
}

if (div === 2) {
  console.log("O número " + npc + " é um número primo");
} else {
  console.log("O número " + npc + " não é um número primo");
}
