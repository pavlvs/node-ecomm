const layout = require('../layout')
const { getError } = require('../../helpers')

module.exports = ({ errors }) => {
    return layout({
        content: /*html*/ `
        <div>
            <form method="POST" action="">
                <input name="email" placeholder="email"/>
                ${getError(errors, 'email')}
                <input name="password" placeholder="password" />
                ${getError(errors, 'password')}
                <button>Sign in</button>
            </form>
        </div>
    `,
    })
}
