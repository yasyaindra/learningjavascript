const methodMahasiswa = {
    makan : function(porsi) {
        this.energi += porsi;
        console.log(`Hallo ${this.name} selamat makan!`)
    },
    main : function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.name} selamat bermain!`)
    },
    tidur: function(jam) {
        this.energi *= jam;
        console.log(`Halo ${this.name} selamat tidur`)
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.name = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let indra = Mahasiswa('Indra Maulana',100)