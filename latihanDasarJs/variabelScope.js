// global scope
var a = 1
function tes() {
    var a = 4
    console.log(window.a)
}
//memanggil variabel local
tes(2)
//memanggil variabel global
console.log(a)