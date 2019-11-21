var jmlAngkot = 10;
var angkotBeroperasi = 6;
var ulang = true

for (var noAngkot = 1;noAngkot <= jmlAngkot; noAngkot++)
    {
    if (noAngkot%2) {
        console.log('angkot '+noAngkot+' beroperasi dengan baik') 
    } else {
        console.log('angkot '+noAngkot+' tidak bekerja dengan baik')
    }
    ulang = confirm('lagi?')
}