const layout = require('../layout')

module.exports = ({ req }) => {
    return layout({
        content: /*html*/ `
        <div>
            Your id is: ${req.session.userId}
            <form method="POST" action="">
                <input name="email" placeholder="email"/>
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <button>Sign up</button>
            </form>
        </div>
    `,
    })
}
