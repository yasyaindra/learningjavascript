/*function myFunc() {
    //return `a = ${a}, b=${b}, myArgs = ${myArgs}`
    //return Array.from(arguments)
    return [...arguments]
}

console.log(myFunc(1,2,3,4,5))

function jumlahkan(...angka) {
    /*let total = 0;
    for (const a of angka) {
        total += a;
    }
    return total;
} 
return angka.reduce((a, b) => a+b);
}

console.log(jumlahkan(1,2,3,4,5))

const mhs = ['indra','apip','idris','rudi','imam','nia']
const [ketua, wakil, ...anggota] = mhs
console.log(anggota.join('\n'))

const team = {
    pm : 'Indra',
    frontEnd1: 'Wahyu',
    frondtEnd2: 'Apip',
    UX:'Anja',
    backEnd:'Budi',
    DevOp:'Rudi'
}

const {pm, ...myTeam} = team
console.log(myTeam)*/

function filterBy(type, ...values) {
    return values.filter(v=> typeof v === type)
    
}

console.log(filterBy('boolean',1,3,4,false,'Indra'))