const name = process.argv[2]
if (typeof name === 'string') {
  console.log(`My name is ${name}`)
} else {
  console.log('érreur dans l input')
  process.exit(1)
}