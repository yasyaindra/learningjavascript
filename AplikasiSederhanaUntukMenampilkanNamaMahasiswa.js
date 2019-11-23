var masukkan = require('readline-sync')
var nama = [];
nama.push(masukkan.question('masukkan nama mahasiswa : '))
nama.push(masukkan.question('masukkan nama mahasiswa : '))
nama.push(masukkan.question('masukkan nama mahasiswa : '))
nama.push(masukkan.question('masukkan nama mahasiswa : '))
var pertanyaan1 = masukkan.question('tampilkan semua nama mahasiswa? Y / N')

if (pertanyaan1 === 'Y') {
    console.log(nama[0],nama[1],nama[2],nama[3])
} else if (pertanyaan1 === 'N'){
    console.log('Okeh')
} else {
    console.log('salah masukkan')
}



