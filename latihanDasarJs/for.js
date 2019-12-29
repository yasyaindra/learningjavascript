let angkotBeroperasi = 13
let noAngkot = 1
let jumlahAngkot = 20

while (noAngkot<=angkotBeroperasi) {
    console.log('angkot ke '+noAngkot+' berjalan dengan baik')
    noAngkot++
}

for(let noAngkot=angkotBeroperasi+1;noAngkot<=jumlahAngkot;noAngkot++) {
    console.log('angkot ke '+noAngkot+' sedang tidak berjalan dengan baik')
}