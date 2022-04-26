function cetaknama(nama) {
    return `Halo Nama Saya ${nama}`
}

const PI = 3.14

const mhs = {
    nama: "Jordan",
    umur: 22,
    Ctkmhs() {
        return `Halo Nama Saya ${this.nama} dengan umur ${this.umur}`
    }
}

class Orang {
    constructor() {
        console.log('Object Orang telah dibuat')
    }
}

// module.exports.cetaknama = cetaknama
// module.exports.PI = PI
// module.exports.mhs = mhs
// module.exports.Orang = Orang

module.exports = {
    cetaknama,
    PI,
    mhs,
    Orang
}