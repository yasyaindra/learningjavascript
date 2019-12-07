const methodMahasiswa = {
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama} selamat makan!`)
    },
    main : function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama} selamat bermain!`)
    },
    tidur : function(jam) {
        this.energi += jam*2;
        console.log(`Halo ${this.nama} selamat tidur!`)
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let indra = Mahasiswa('Indra Maulana', 10);
let idris = Mahasiswa('Idris Wahyu', 10);
let afif = Mahasiswa('Afifan Hakim', 10);