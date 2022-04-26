const yargs = require("yargs");
const {
    listcontact,
    simpancontact,
    detailcontact,
    hapuscontact
} = require('./contacts')
yargs.command({
    command: 'add',
    describe: 'Menambahkan Contact',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        nomor: {
            describe: 'Nomor',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        simpancontact(argv.nama, argv.nomor, argv.email)
    }
}).demandCommand()


// Menampilan daftar semua nama contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & nomor contact Baru',
    handler() {
        listcontact()
    }
})

// menampilan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan Data berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        detailcontact(argv.nama)
    }
})
// menghapus  sebuah kontak
yargs.command({
    command: 'hapus',
    describe: 'Menghapus Data berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        hapuscontact(argv.nama)
    }
})

yargs.parse()