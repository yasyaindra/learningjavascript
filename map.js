var angka = [1,4,7,12,8,9,5]
var nama = ['Indra','Maulana','Yasya','Afifan','Hakim']
var cetak = function(e,i) {
    console.log('Mahasiswa ke-'+(i+1)+' bernama '+e);
} 
var kaliDua = angka.map(function(e) {
    return e**2;
})

nama.forEach(cetak)

console.log(kaliDua.join('\n'))

var urutkan = angka.sort( function(a,b){
    return a-b;
})

var hasilUrutan = urutkan.join(' - ')
console.log(hasilUrutan)