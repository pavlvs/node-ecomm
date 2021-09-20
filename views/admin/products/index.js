const layout = require('../layout')

module.exports = ({ products }) => {
    const renderedProducts = products
        .map((product) => {
            return /*html*/ `
            <div>${product.title}</div>
        `
        })
        .join('')
    return layout({
        content: /*html*/ `
            <h1 class="title">Products</h1>
            ${renderedProducts}
        `,
    })
}
