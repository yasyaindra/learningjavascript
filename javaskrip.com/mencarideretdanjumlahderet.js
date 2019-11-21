var ulang = true //istilahnya variabel ini adalah tombol untuk membuat nilai baru
var n = prompt('masukkan angka') // ini juga
//var nilaiAwal = 1
var sN = 0 //ini adalah nilai awal untuk mencari jumlah semua baris

/*
while (nilaiAwal <= n) {
    console.log(nilaiAwal+' adalah bilangan genap');
    nilaiAwal += 2
    ulang = confirm('lagi?');
 
} */

for (var nilaiAwal = 1; nilaiAwal <= n;nilaiAwal+=2) {
    console.log(nilaiAwal+' adalah bilangan genap')
    ulang = confirm('lagi?')
    sN += nilaiAwal
}

console.log('jumlah dari semua angka itu adalah '+sN);

