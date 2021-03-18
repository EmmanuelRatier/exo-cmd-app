const chalk = require('chalk')
const readlineSync = require('readline-sync')

const nbrMaster = 99
let isRunning = true

while (isRunning) {
  const nbrPlayer = readlineSync.question('Trouver le bon numéro pour gagner  ')
  if (nbrPlayer < nbrMaster) {
    console.log(chalk.red('Nombre trop petit'))
  } else if (nbrPlayer > nbrMaster) {
    console.log(chalk.red('Nombre trop grand'))
  }
  else {
    console.log(chalk.green('Bravo'))
    isRunning = false
  }
}

