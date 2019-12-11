/*const perkenalan = ['halo','nama','saya','Indra']

const [salam, satu, dua, tiga] = perkenalan;
console.log(dua)

function coba() {
    return [1,2];
}

const [a,b] = coba();
console.log(a)

const mhs = ({
    nama:'Indra Maulana',
    umur:33
})

const {nama, umur} = mhs
console.log(nama)

const mhs = ({
    nama:'Indra Maulana',
    umur:33
})

const {nama:n, umur:u} = mhs 
console.log(u)

const mhs = ({
    nama:'Indra Maulana',
    umur:33,
    email:'indrayasya96@gmail.com'
})

const {...value} = mhs 
console.log(value)
*/

const mhs = ({
    id:354313,
    nama:'Indra Maulana',
    umur:33,
    email:'indrayasya96@gmail.com'
})

function getIdmhs(mhs) {
    return mhs.id
}

console.log(getIdmhs(mhs))