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

// menuliskan / menimpa file contact.json dengna data yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}

// add contact baru
const addContact = (contact) => {
    const contacts = loadcontact();
    contacts.push(contact);
    saveContacts(contacts);
}

// cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadcontact();
    return contacts.find((contact) => contact.nama === nama);
}

module.exports = {
    loadcontact,
    findcontact,
    addContact,
    cekDuplikat
}