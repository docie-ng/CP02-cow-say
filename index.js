const cowsay = require('cowsay')

const moo = cowsay.say({
  text: "I'm a moooodule",
  e: 'oO',
  T: 'U ',
})

console.log(moo)
