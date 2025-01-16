// // require('./add-module.js') // 5


// // console.log('hello from node.js modules') // hello from node.js module

// // require('./sub-module') // 2

// const superHero = require('./super-hero');
// console.log(superHero.getName())

// superHero.setName('Brus waeyn');
// console.log(superHero.getName());

// superHero.setName('Superman');
// const superHero2 = require('./super-hero');
// console.log(superHero2.getName())

const PizzaShop = require('./pizza-shop');

const pizzaShop = new PizzaShop()

pizzaShop.on('order',(size,type)=>{
    console.log(`order recived! we prepaired pizza with ${size} and topping ${type}`)
})

pizzaShop.displayOrder()
pizzaShop.order('large','paneer')
pizzaShop.displayOrder()