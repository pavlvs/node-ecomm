const Repository = require('./repository')

class ProductsRepository extends Repository {
    constructor() {
        super()
    }
}

module.exports = new ProductsRepository('products.json')
