const readlineSync = require('readline-sync')

let answer1 = ['langage', 'compilateur']
let answerTrueFalse = ['vrai', 'faux']

const question1 = readlineSync.keyInSelect(answer1, 'Question 1: Le C++ est un: ')
const question2 = readlineSync.keyInSelect(answerTrueFalse, 'Question 2: Typescript est une evolution de JS ?: ')
const question3 = readlineSync.keyInSelect(answerTrueFalse, 'Question 3: Lire les cours avant de faire les exercices est inutile: ')
const question4 = readlineSync.keyInSelect(answerTrueFalse, 'Question 4: react.js a été developpé par Google: ')
const question5 = readlineSync.keyInSelect(answerTrueFalse, 'Question 5: Ethereum est une blockchain publique: ')
let note = 0;

if (answer1[question1] === answer1[0]) {
  note++
}
if (answerTrueFalse[question2] === answerTrueFalse[0]) {
  note++
}
if (answerTrueFalse[question3] === answerTrueFalse[1]) {
  note++
}
if (answerTrueFalse[question4] === answerTrueFalse[1]) {
  note++
}
if (answerTrueFalse[question5] === answerTrueFalse[0]) {
  note++
}

console.log(`quiz terminé vous avez ${note} sur 5 de bonne réponse`)
