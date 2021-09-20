const express = require('express')
const { validationResult } = require('express-validator')
const multer = require('multer')

const productsRepo = require('../../repositories/products')
const newProductTemplate = require('../../views/admin/products/new')
const { requireTitle, requirePrice } = require('./validators')

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

router.get('/admin/products', (req, res) => {})

router.get('/admin/products/new', (req, res) => {
    res.send(newProductTemplate({}))
})

router.post(
    '/admin/products/new',
    upload.single('image'),
    [requireTitle, requirePrice],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.send(newProductTemplate({ errors }))
        }
        const image = req.file.buffer.toString('base64')
        const { title, price } = req.body
        await productsRepo.create({ title, price, image })

        res.send('submitted')
    }
)

module.exports = router

// al3:: app.listen(3000)

// xaf:: (req, res) => {{}{}}{left}

// xmer:: module.exports = router

// xax:: const app = express()

// xrr:: const router = express.Router()

// xrx:: const express = require('express')

// rflashe:: req.flash('errors', ''){left 2}

// rflashs:: req.flash('success', ''){left 2}

// rredirect:: res.redirect(''}{left 2}

// rsend:: res.send(''}{left 2}

// rsessu:: req.session.userId

// routeg:: router.post('/', (req, res) => {{}{})

// routep:: router.post('/', [], (req, res) => {{}{}})
