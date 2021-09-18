const layout = require('../layout')

module.exports = () => {
    return layout({
        content: /*html*/ `
        <div>
            <form method="POST" action="">
                <input name="email" placeholder="email"/>
                <input name="password" placeholder="password" />
                <button>Sign in</button>
            </form>
        </div>
    `,
    })
}
