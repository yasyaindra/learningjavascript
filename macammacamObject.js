function buatObjectMahasiswa(nama, nrp, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.jurusan = jurusan;
    return mhs;
}
    var mhs2 = buatObjectMahasiswa('Indra','201908','indra@mail.com','ti') ;

function Mahasiswa(nama, nrp, email, jurusan) {
        this.nama = nama;
        this.nrp = nrp;
        this.email = email;
        this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Indra','201908','indra@mail.com','ti')