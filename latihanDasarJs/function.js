let rusukA = prompt('masukkan rusuk kubus ke-1: ')
let rusukB = prompt('masukan rusuk kubus ke-2: ')

function volKubusTotal(a,b) {
    volA = a**3
    volB = b**3
    vol = (volA + volB)
    return vol
}

alert(volKubusTotal(rusukA,rusukB))