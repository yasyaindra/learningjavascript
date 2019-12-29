//Manipulasi Array

// //1. Menambah variabel pada array
// var arr = ["a",1,true]
// console.log(arr.join(' '))

// let arr = ["Indra","Idris","Apip","Hakim"]
// arr[4] = undefined

// console.log(arr)

// // menampilkan array
// let arr = ["Indra","Idris","Apip","Hakim"]
// for(let i=0;i<arr.length;i++) {
//     console.log('mahasiswa ke '+(i+1)+' bernama '+arr[i])
// }

// //menggunakan method array di javaascript
// let arr = ["Indra","Idris","Apip","Hakim"]
// console.log(arr.join(', '))



// // arr.push('Anjay');
// arr.shift()
// console.log(arr.join(', '))

// //4.splice
// 
// arr.splice(2,1,'Devi','Angel')
// // console.log(arr.join(', '))
// 
// let arr2 = arr.slice(0,3)
// console.log(arr2.join(', '))
//let angka = [1,2,3,4,5,6,7];\

// let nama = ['indra','wahyu','apip','anjay']
// let cetak = function(e,i){
//     console.log('mahasiswa ke-'+(i+1)+' bernama '+e)
// }
// nama.forEach(cetak)
// 
// let angka2 = angka.map(function(e){
//     return e*2
// })
// console.log(angka2.join(' - '))
// angka.sort(function(a,b){
//     return a-b
// }) 
// console.log(angka.join(' - '))

let angka = [1,9,2,5,23,3,7,4]
l

let angka2 = angka.find(function(e){
    return e>5
})
console.log(angka2)