module.exports = ({ products }) => {
    const renderedProducts = products
        .map((product) => {
            return /*html*/ `
        <li>${product.title} - ${product.price}</li>
        `
        })
        .join('')

    return /*html*/ `
    <ul>
        ${renderedProducts}
    </ul>
    `
}
