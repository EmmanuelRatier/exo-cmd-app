const readlineSync = require("readline-sync")

const lastName = readlineSync.question('Quel est votre nom ?')
const firstNme = readlineSync.question('Quel est votre prenom ?')
const age = readlineSync.question('Quel age avez vous ?')

if (age >= 18) {
  console.log(`${firstNme} ${lastName}, vous êtes majeur, vous pouvez voter`)
} else {
  console.log(`Désolé, ${firstNme} ${lastName}, vous êtes mineur, vous ne pouvez pas voter`)
}