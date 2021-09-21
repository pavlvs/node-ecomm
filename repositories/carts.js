const Repository = require('./repository')

class CartsRepository extends Repository {}

// add an item to the cart

module.exports = new CartsRepository('carts.json')
