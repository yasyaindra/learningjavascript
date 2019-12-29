// 1. Object Literal
// let mahasiswa = {
//     nama: 'Indra',
//     energi : 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Hei! ${this.nama}, selamat makan!`)
//     }
// }
// let mahasiswa2 = {
//     nama: 'Indra',
//     energi : 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Hei! ${this.nama}, selamat makan!`)
//     }
// }
// 2. function declaration
const methodMahasiswa = {
    makan : function(porsi) {
        this.energi += porsi
    },
    tidur : function(jam) {
        this.energi *= jam
    },
    main : function(jam) {
        this.energi -= jam
    }
}
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa)
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
//     return mahasiswa;
// }

// let indra = Mahasiswa('Indra',10)

function Mahasiswa(nama, energi) {
    this.nama = nama
    this.energi = energi
}

let indra = new Mahasiswa('Indra',100)

// 3. constructor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama
//     this.energi = energi
//     this.makan = function(porsi){
//         this.energi += porsi
//     }
//     this.main = function(jam) {
//         this.energi -= jam
//     }
// }

// let indra = new Mahasiswa('Indra',10)
// 4. object create
