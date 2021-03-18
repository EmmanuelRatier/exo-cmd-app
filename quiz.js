const readlineSync = require('readline-sync')

const answer1 = readlineSync.question('Question 1: Le C++ est un:  1: langage  2: compilateur  ')
const answer2 = readlineSync.question('Question 2: Typescript est une evolution de JS ?:  1: Vrai  2: Faux  ')

if (answer1 === 1) {
  console.log('good')
} else {
  console.log('bad')
}
if (answer2 === 1) {
  console.log('good')
} else {
  console.log('bad')
}