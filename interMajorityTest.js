const readlineSync = require("readline-sync")

const lastName = readlineSync.question('Quel est votre nom ?')
const firstNme = readlineSync.question('Quel est votre prenom ?')
const age = readlineSync.question('Quel age avez vous ?')
let ageMajority = 0

if (process.argv[2] === "21") {
  ageMajority = 21
} else if (process.argv[2] === "18") {
  ageMajority = 18
}

if (age >= ageMajority) {
  console.log(`${firstNme} ${lastName}, vous êtes majeur, vous pouvez voter`)
} else {
  console.log(`Désolé, ${firstNme} ${lastName}, vous êtes mineur, vous ne pouvez pas voter`)
}