const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const {
    loadcontact,
    findcontact,
    addContact,
    cekDuplikat
} = require('./utils/contact');
const {
    body,
    validationResult,
    check
} = require('express-validator');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const app = express()
const port = 3000

// gunakan EJS
app.set('view engine', 'ejs')
// third-Party middleware
app.use(expressLayouts)
// Build-in middleware
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}));

// konfigurasi flash 
app.use(cookieParser('secret'))
app.use(session({
    cookie: {
        maxAge: 6000
    },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

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
        contacts,
        msg: req.flash('msg')
    })
})

app.post('/contact', [
    body('nama').custom((value) => {
        const duplikat = cekDuplikat(value)
        if (duplikat) {
            throw new Error('Nama Contact Sudah Digunakan!');
        }
        return true;
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'No HP tidak Valid').isMobilePhone('id-ID'),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(400).json({errors: errors.array()});
        res.render('add-contact', {
            title: 'Form Tambah Data Kontak',
            layout: 'layouts/main-layout',
            errors: errors.array(),
        })
    } else {
        addContact(req.body);
        // kirimkan flash message
        req.flash('msg', 'Data Contact Berhasil Ditambahkan!')
        res.redirect('/contact');
    }
})


// halaman form tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main-layout'
    })
})

// halaman form detail data contact
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