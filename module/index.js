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
const DrinkMachine = require('./drink-machine');


const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine()

pizzaShop.on('order',(size,type)=>{
    console.log(`order recived! we prepaired pizza with ${size} and topping ${type}`)
    drinkMachine.serveDrink(size)
})

pizzaShop.displayOrder()
pizzaShop.order('large','paneer')
pizzaShop.displayOrder()