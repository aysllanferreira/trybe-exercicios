const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let points = 0;

const verifyAnswers = (correct, student) => {
    correct.forEach((element, i) => {
        if(element === student[i]) points += 1;
        if(student[i] === 'N.A') points += 0;
        if(element !== student[i]) points -= 0.5;
    })
    return points;
};

const checkAnswers = (callback) => callback(RIGHT_ANSWERS, STUDENT_ANSWERS); 

console.log(checkAnswers(verifyAnswers));