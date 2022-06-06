const fs = require('fs')

const dirpath = './data'
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath)
}

const datapath = './data/contacts.json'
if (!fs.existsSync(datapath)) {
    fs.writeFileSync(datapath, '[]', 'utf-8')
}

// ambil semua data di contact.json
const loadcontact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    return contacts
}

// cari contact berdasarkan nama
const findcontact = (nama) => {
    const contacts = loadcontact()
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
    return contact
}

module.exports = {
    loadcontact,
    findcontact
}