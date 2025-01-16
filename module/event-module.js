const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order-pizza',(size,type)=>{
    console.log(`your order ${size} pizza is baking with ${type}`)
})

console.log('this is print befor printing pizza order detail')

emitter.emit('order-pizza','large','paneer')