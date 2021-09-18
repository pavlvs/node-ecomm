const express = require('express')
const bodyParser = require('body-parser')
const usersRepo = require('./repositories/users')
const cookieSession = require('cookie-session')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cookieSession({
        keys: ['lask54djfhgh334ffghjasd9876512'],
    })
)
const port = 3000

app.get('/signup', (req, res) =>
    res.send(/*HTML*/ `
        <div>
            Your id is: ${req.session.userId}
            <form method="POST" action="">
                <input name="email" placeholder="email"/>
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <button>Sign up</button>
            </form>
        </div>

    `)
)

app.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body
    const existingUser = await usersRepo.getOneBy({ email })
    if (existingUser) {
        return res.send('Email in use')
    }

    if (password !== passwordConfirmation) {
        return res.send('Passwords do not match')
    }

    // Create a user in our user repo to represent this person
    const user = await usersRepo.create({ email, password })

    // Store the id of that user inside the user's cookie
    req.session.userId = user.id

    console.log(req.body)
    res.send('Account created!')
})

app.get('/signout', (req, res) => {
    req.session = null
    res.send('You are logged out')
})

app.get('/signin', (req, res) => {
    res.send(/*HTML*/ `
        <div>
            <form method="POST" action="">
                <input name="email" placeholder="email"/>
                <input name="password" placeholder="password" />
                <button>Sign in</button>
            </form>
        </div>

    `)
})

app.post('/signin', async (req, res) => {
    const { email, password } = req.body

    const user = await usersRepo.getOneBy({ email })

    if (!user) {
        return res.send('Email not found')
    }
    const validPassword = await usersRepo.comparePasswords(
        user.password,
        password
    )
    if (!validPassword) {
        return res.send('Invalid password')
    }

    req.session.userId = user.id
    res.send('You are signed in')
})

app.listen(port, () => console.log(`Example app listening on port port!`))

// ta⇥ ternary statement
// fl⇥ for loop (ES6)
// fo⇥ for of loop (ES6)
// fof→	for(let itemName of objectName { }
// ife⇥ else statement
// tc⇥ try/catch

// ae⇥ addEventListener
// gi⇥ getElementById
// gt⇥ getElementsByTagName
// qs⇥ querySelector
// cel⇥ createElement
// heac⇥ appendChild
// hecla⇥ classList.add
// hect⇥ classList.toggle
// hega⇥ getAttribute
// hesa⇥ setAttribute
// hera⇥ removeAttribute

// cs⇥ class (ES6)
// csx⇥ extend a class (ES6)
// m⇥ method (ES6 syntax)
// get⇥ getter (ES6 syntax)
// set⇥ setter (ES6 syntax)

// fan⇥ anonymous function
// fn⇥ named function
// asf⇥ async function
// aa⇥ async arrow function with
// af⇥ arrow function (ES6)
// f⇥ arrow function with body (ES6)
// fr⇥ arrow function with return (ES6)

// ra⇥ return new array
// rp⇥ return Promise (ES6)
// tf⇥ this

// fe⇥ forEach loop
// map⇥ map function

// st⇥ setTimeout
// si⇥ setInterval

// rq⇥ require a module
// cr⇥ require and assign a module
// em⇥ export member
// me⇥ module.exports
// cb⇥ Node.js style callback

// prom→ return new Promise((resolve, reject) => { }

// ca⇥ const ${1:name} = await ${2:value}
// cf⇥ const ${1:name} = (${2:arguments}) => {\n\treturn ${0}\n}
// nfn→	const functionName = (params) => { }
// dob→	const {propName} = objectToDestruct
// cd⇥ const { ${1:name} } = ${2:value}
// dar→	const [propName] = arrayToDestruct
