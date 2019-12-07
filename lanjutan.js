/*let mahasiswa = {
    nama: "Indra Maulana",
    energi: 10,
    makan : function(porsi){
        this.energi = this.energi+porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }
}

let mahasiswa2 = {
    nama: "Afifan Hakim",
    energi: 23,
    makan : function(porsi){
        this.energi = this.energi+porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }
} */

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama} selamat makan!`)
    }
    this.main = function(jam) {
        this.energi -= jam;
        console.log(` Halo ${this.nama} Selamat bermain!`)
    }
}

let indra = new Mahasiswa('Indra Maulana Yasya', 10)