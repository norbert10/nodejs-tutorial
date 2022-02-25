const EventEmitter = require('events')

const dataEmitter = new EventEmitter
dataEmitter.on('response', ()=>{
    console.log('Data received successfully')
})

dataEmitter.emit('response')

// const Events = require('events')

// const eventsEmitter =  new Events()
// eventsEmitter.on('response', ()=>{
//     console.log('This is the event to be listened to. It is emitted successfully ')
// })

// eventsEmitter.emit('response')

