const verifyNumber = () => {
    const goodNumber = Math.floor(Math.random() * 6);
    return goodNumber;
};

const lottery = (num, callback) => {
    if(num < 0 || num > 5) return 'Digite um numero entre 0 e 5';
    if(num === callback()) return 'Parabéns você ganhou';
    return 'Tente novamente';
};

console.log(lottery(5, verifyNumber));