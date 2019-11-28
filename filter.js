var angka = [1,2,21,7,90,4,3,1,8,10,6]
var angka2 = angka.filter(function(x){
    return x > 4;
})
var urutkan = angka2.sort(function(a,b) {
    return a-b
})
console.log(angka2.join(' - '))

var angka3 = angka.find(function(y){
    return y < 10;
})

console.log(angka3)