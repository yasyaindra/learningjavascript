/*var mhs = ['indra','apip','wahyu']
const nama = 'indra maulana'
for(let i=0;i<mhs.length;i++)  {
    console.log(mhs[i])
}

mhs.forEach(m=>console.log(m)) 

for (m of mhs) {
    console.log(m)
}

for (const n of nama) {
    console.log(n)
}

mhs.forEach((m,i) => {
    console.log(`${m} adalah mahasiswa ke-${i+1}`)
})

for (const [m,i] of mhs.entries()) {
    console.log(`${i} adalah mahasiswa ke-${m+1}`)
} 

const liNama = document.querySelectorAll('.nama')
console.log(liNama)

liNama.forEach(n=> console.log(n.textContent))

function jumlahkanAngka() {
    let jumlah = 0;
    [1,2,3,4,5].forEach(a=> jumlah += a);
    return jumlah
}

console.log(jumlahkanAngka())


function jumlahkanAngka() {
    let jumlah = 0;
    for ( a of arguments) {
        jumlah += a;
    }
    return jumlah
}

console.log(jumlahkanAngka())
*/
//for in
const mhs = {
    nama: 'Indra',
    umur: 19,
    email: 'indrayasya96@gmail.com'
}

for (m in mhs) {
    console.log(mhs[m])
}