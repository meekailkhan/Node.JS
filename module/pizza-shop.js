const EventEmitter = require('node:events');

class PizzaShop extends EventEmitter{
    constructor(){
        super()
        this.orderNumber = 0;
    }

    order(size,type){
        this.orderNumber++
        this.emit('order',size,type)
    }

    displayOrder(){
        console.log(this.orderNumber)
    }
}

module.exports = PizzaShop