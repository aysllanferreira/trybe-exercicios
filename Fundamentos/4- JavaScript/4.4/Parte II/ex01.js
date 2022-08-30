let palindromo = () => {
  let word = "kaiak";
  let pal = word.split("").reverse().join("");

  if (pal === word) {
    console.log(true);
  } else {
    console.log(false);
  }
};
palindromo();
