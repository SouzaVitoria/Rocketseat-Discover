const { EventEmitter } = require('events')
const { inherits } = require('util')
const event = new EventEmitter()

event.once('saySomething', (when) => {
  console.log(`Estou ouvindo, ${when}!!!`)
})

event.on('saySomething', (when) => {
  console.log(`Estou ouvindo, ${when}!!!`)
})

event.emit('saySomething', 'Vitória')
event.emit('saySomething')
event.emit('saySomething')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character("Chapolin")
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`))

chapolin.emit('help')