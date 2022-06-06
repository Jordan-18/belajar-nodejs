const express = require('express')
const app = express()
var expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const port = 3000

// gunakan EJS
app.set('view engine', 'ejs')
// third-Party middleware
app.use(expressLayouts)
app.use(morgan('dev'))

// Build-in middleware
app.use(express.static('public'))

// Application Level Middleware
app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

app.get('/', (req, res) => {
    const mahasiswa = [{
            nama: 'Jordan',
            email: 'jordan@gmail.com'
        },
        {
            nama: 'istiqlal',
            email: 'istiqlal@gmail.com'
        },
        {
            nama: 'Qalbi',
            email: 'Qalbi@gmail.com'
        },
        {
            nama: 'Adiba',
            email: 'Adiba@gmail.com'
        }
    ]
    res.render('index', {
        layout: 'layouts/main-layout',
        nama: 'Jordan Istiqlal Qalbi Adiba',
        title: 'Halaman Utama',
        mahasiswa
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About'
    })
})
app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact'
    })
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`)
})

app.use((req, res) => {
    res.status(404)
    res.send('404')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})