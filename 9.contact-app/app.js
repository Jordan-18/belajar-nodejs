const {
    tulispertanyaan,
    simpancontact
} = require('./contacts')
const main = async () => {
    const nama = await tulispertanyaan('Masukan Nama Anda : ');
    const umur = await tulispertanyaan('Berapa Umur Anda : ');
    const email = await tulispertanyaan('Masukan Email Anda : ');

    simpancontact(nama, umur, email)
}

main()