/*
//const tampilNama = nama => `Halo ${nama}`
//console.log('Indra Maulana Yasya')
//const tampilNama2 = () => 'Hello world!';
//console.log(tampilNama2());

let mahasiswa = ['Indra','Unggul','Adul'];
//let jumlahHuruf = mahasiswa.map(function(nama) {
 //   return nama.length
//})
//console.log(jumlahHuruf)
let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jmlHrf:nama.length }));

console.table(jumlahHuruf)
*/

//Konsep this pada arrow function
 const mhs = {
     nama: 'Indra',
     umur: '19',
     sayHello: () => {
         console.log(`Halo ${this.nama}, anda berumur ${this.umur}`)
     }
 }