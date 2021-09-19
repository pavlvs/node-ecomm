const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const authRouter = require('./routes/admin/auth')
const productsRouter = require('./routes/admin/products')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cookieSession({
        keys: ['lask54djfhgh334ffghjasd9876512'],
    })
)

app.use(authRouter)
app.use(productsRouter)
const port = 3000

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
