// function Mahasiswa(nama, energi) {
//     this.nama = nama
//     this.energi = energi
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi *= jam
//     return `selamat energi anda saat ini ${this.energi}, karena anda bermain selama ${jam} jam`
// }
// let indra = new Mahasiswa('Indra',100)

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama
        this.energi = energi
        return `Energi anda saat ini ${this.energi}`
    }
    makan(porsi) {
        this.energi += porsi
        return `Energi anda saat ini ${this.energi}`
    }
    tidur(jam) {
        this.energi += jam*2
        return `Energi anda saat ini ${this.energi}`
    }
    main(jam) {
        this.energi -= jam
        return `Energi anda saat ini ${this.energi}`
    }
}

let indra = new Mahasiswa('Indra Maulana',100)