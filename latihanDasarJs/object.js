// let mhs = {
//     nama:'Indra Maulana',
//     nim:'20190801079',
//     email:'indrayasya96@gmail.com'
// }
// let mhs2 = {
//     nama:'Afif',
//     nim:'20190866666',
//     email:'afif@gmail.com'
// }

// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//     let mhs = {}
//     mhs.nama = nama;
//     mhs.nrp = nrp
//     mhs.email = email
//     mhs.jurusan = jurusan
//     return mhs
// }

// let nama = prompt('Masukkan nama: ')
// let nrp = prompt('Masukkan nrp: ')
// let email = prompt('Masukkan email: ')
// let jurusan = prompt('Masukkan jurusan: ')

//let mhs3 = buatObjectMahasiswa(nama, nrp, email, jurusan)

// //constructor
// function Mahasiswa(nama, email, jurusan) {
//     this.nama = nama
//     this.email = email
//     this.jurusan = jurusan
// }

// let mhs4 = new Mahasiswa(nama,email,jurusan) 

// //object literal
// let obj = {nama:'indra',no:'354'}
// obj.halo = function() {
//     console.log(this)
//     console.log('hello world')
// }
// obj.halo()

function Halo() {
    console.log(this)
    console.log('hello world')
}

let obj1 = new Halo()
let obj2 = new Halo()

// function halo() {
//     console.log(this)
//     console.log('halo dunia')
// }

// this.halo()
//this mengembaikan objek global