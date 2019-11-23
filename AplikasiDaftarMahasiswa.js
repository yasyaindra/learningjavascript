var masukkan = require('readline-sync')
var mhsiswa =  [];
console.log('/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/')
console.log('INI ADALAH APLIKASI MASUKKAN & KELUARAN NAMA NAMA MAHASISWA')
console.log('/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/')
console.log('')
var jumlahMhsiswa = parseInt(masukkan.question('berapa mahasiswa yang anda inginkan? '))
console.log('=========================')
for (k=0;k<jumlahMhsiswa;k++) {
mhsiswa.push(masukkan.question('masukkan nama mahasiswa ke '+(k+1)+' '))
}
console.log('')
var pertanyaan1 = (masukkan.question('tampilkan semua nama mahasiswa? Y / N :'))
if (pertanyaan1 === 'Y') {
    console.log('===============================')
    console.log(' BERIKUT NAMA NAMA MAHASISWA ')
    console.log('===============================')
    for (var i = 0;i<mhsiswa.length;i++) {
        console.log('------------------------------')
        console.log('mahasiswa ke '+(i+1)+' bernama '+ mhsiswa[i]) }
        console.log('------------------------------')
    }  else if(pertanyaan1 === 'N') {
        console.log('Baiklah')
    } else {
        console.log('salah masukkan')
    }

