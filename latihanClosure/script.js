/*function init() {
    return function (nama) {
        console.log(`hello ${nama}`)
    }
}

let panggilNama = init()
panggilNama('Indra')
panggilNama('Maulana')

function ucapkanSalam(waktu) {
        return function(nama) {
            console.log(`Halo ${nama} selamat ${waktu}, semoga banyak rejeki`)
        }
}

let selamatPagi = ucapkanSalam('pagi')
let selamatMalam = ucapkanSalam('malam')
let selamatSore = ucapkanSalam('sore')

selamatPagi('Indra')
selamatMalam('Maulana')
selamatSore('Yasya')*/

let add = function() {
    let counter = 0;
    return function() {
        return counter += 2
    }
}
var a = add()

for(var i = 0;i<10;i++) {
    alert(console.log(a()))
}