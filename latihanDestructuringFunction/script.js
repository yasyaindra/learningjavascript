/*function coba(a,b) {
    return [a+b,a*b,a-b]
}

const [jumlah, kali,kurang,bagi='tidak ada jawabannya'] = coba(9,3)

console.log(jumlah)
console.log(kali)
console.log(kurang)
console.log(bagi) 

function perhitungan(a,b) {
    return {
        kurang:a-b,
        bagi:a/b,
        kali:a*b,
        jumlah:a+b
    }
}

const {kurang,bagi,kali,jumlah} = perhitungan(9,3)
console.log(`${kurang}\n${bagi}\n${kali}\n${jumlah}\n`)

const mhs1 = {
    nama: 'Indra Maulana',
    umur: 19,
    email: 'indrayasya96@gmail.com'
}

function cetakMhs1(mhs) {
    return `Halo nama saya ${mhs.nama} saya berumur ${mhs.umur}`
}

console.log(cetakMhs1(mhs1))*/

const mhs1 = {
    nama: 'Indra Maulana',
    umur: 19,
    email: 'indrayasya96@gmail.com',
    nilai: {
        tugas:90,
        uts:70,
        uas:80
    }
}
function cetakMhs1({nama, umur, nilai:{tugas,uts, uas}}) {
    return `Halo nama saya ${nama} saya berumur ${umur}, dan saya mendapatkan nilau tugas ${tugas}`
}

console.log(cetakMhs1(mhs1))