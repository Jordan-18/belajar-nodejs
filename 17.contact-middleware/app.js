const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const {
    loadcontact,
    findcontact
} = require('./utils/contact')


const app = express()
const port = 3000

// gunakan EJS
app.set('view engine', 'ejs')
// third-Party middleware
app.use(expressLayouts)
// Build-in middleware
app.use(express.static('public'))

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
    const contacts = loadcontact()
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts
    })
})
app.get('/contact/:nama', (req, res) => {
    const contact = findcontact(req.params.nama)
    res.render('detail', {
        layout: 'layouts/main-layout',
        title: 'Halaman detail contact',
        contact
    })
})

app.use((req, res) => {
    res.status(404)
    res.send('404')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})