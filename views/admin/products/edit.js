const { getError } = require('../../helpers')
const layout = require('../layout')

module.exports = ({ product, errors }) => {
    return layout({
        content: /*html*/ `
                <form action="" method="post">
                    <input type="text" name="title" value="${product.title}"  />
                    ${getError(errors, 'title')}
                    <input type="text" name="price" value="${product.price}"  />
                    ${getError(errors, 'price')}
                    <input type="file" name="image" id="" />
                    <button>Submit</button>
                </form>
            `,
    })
}
