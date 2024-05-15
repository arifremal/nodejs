const EventEmitr = require ("events")

// listener
const myEmitter = new EventEmitr()
myEmitter.on('birthday',()=>{

    console.log(`HBD ALI `)
})

myEmitter.on('birthday',(b)=>{
    console.log(`gift is loading,,,,,,${b}`)
})
myEmitter.emit('birthday','gori')