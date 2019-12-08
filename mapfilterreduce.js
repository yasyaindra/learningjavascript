const angka = [1,5,4,3,6,8,2,-6,10]

const newAngka = [];

for (let a=0;a<angka.length;a++) {
    if (angka[a]<=3) {
        newAngka.push(angka[a]);
    }
}

console.log(newAngka.join(' '))

const newAngka2 = angka.filter(function (a) {
    return a <= 3;
})

console.log(newAngka2.join(' '))

const newAngka3 = angka.filter(a => a <= 3);
console.log(newAngka3.join(' '))

//map
const newAngka4 = angka.map(a=>a*2)
console.log(newAngka4.join(' '))

//reduce
const newAngka5 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngka5)

//method chaining

const hasil = angka.filter(a => a <= 3)
    .map(a => 3 * 3)
    .reduce((acc,cur) => acc + cur);
console.log(hasil)