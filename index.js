const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>
    res.send(/*HTML*/ `
        <div>
            <form method="POST" action="">
                <input name="email" placeholder="email"/>
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <button>Sign up</button>
            </form>
        </div>

    `)
)

app.post('/', function (req, res) {
    res.send('Account created!')
})

app.listen(port, () => console.log(`Example app listening on port port!`))
