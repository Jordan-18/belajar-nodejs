const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')

const dirpath = './data'
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath)
}

const datapath = './data/contacts.json'
if (!fs.existsSync(datapath)) {
    fs.writeFileSync(datapath, '[]', 'utf-8')
}

const loadcontact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    return contacts
}

const simpancontact = (nama, nomor, email) => {
    const contact = {
        nama,
        nomor,
        email
    }
    const contacts = loadcontact()


    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if (duplikat) {
        console.log(chalk.red.inverse.bold('Kontak Sudah Terdaftar Cari Nama Lain'))
        return false
    }

    // cek email
    if (!validator.isMobilePhone(nomor, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid'))
        return false
    }

    // cek nomor hp


    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log(chalk.green.inverse.blo('terima kasih'))
}

const listcontact = () => {
    const contacts = loadcontact()
    console.log(chalk.cyan.inverse.bold('Daftar Contact dalam File'))
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.nomor}`)
    })
}

const detailcontact = (nama) => {
    const contacts = loadcontact()
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if (!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`))
        return false
    }
    console.log(chalk.cyan.inverse.bold(contact.nama))
    console.log(contact.nomor)
    if (contact.email) {
        console.log(contact.email)
    }
}

const hapuscontact = (nama) => {
    const contacts = loadcontact()
    const newcontact = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())

    if (contacts.length === newcontact.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`))
        return false
    }
    fs.writeFileSync('data/contacts.json', JSON.stringify(newcontact))

    console.log(chalk.green.inverse.bold(`${nama} Berhasil dihapus!`))

}

module.exports = {
    simpancontact,
    listcontact,
    detailcontact,
    hapuscontact
}