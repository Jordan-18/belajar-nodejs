// core module
// file system

const fs = require('fs')

// menuliskan file secara singkronus
// try {
//     fs.writeFileSync('data/text.txt', 'Hello World')
// } catch (error) {
//     console.log(error)
// }

// menuliskan string ke file(asynchronus)
// fs.writeFile('data/test.txt', 'Hello World Asyncronus', (err) => {
//     console.log(err)
// })

// ingin membaca isi file (singkronus)
// const data = fs.readFileSync('data/test.txt', 'utf-8')

// console.log(data)


// membaca file (asyncronus)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })


// ReadLine
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Siapa Nama Anda : ', (nama) => {
    rl.question('Nomor HP anda : ', (nom) => {
        const contact = {
            nama,
            nom
        }
        const file = fs.readFileSync('data/contact.json', 'utf-8')
        const contacts = JSON.parse(file)

        contacts.push(contact)

        fs.writeFileSync('data/contact.json', JSON.stringify(contacts))

        console.log('terima kasih')
    })
    rl.close
})