//Callback

// function halo(nama) {
//     if (nama == '') {
//         alert ('tanpa nama')
//     } else {
//         alert (`halo ${nama}`)
//     }
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('masukkan nama')
//     callback(nama)
// }

// tampilkanPesan(nama => alert(`halo ${nama}`))

// const mhs = [{
//     "nama": "Yasya Indra",
//     "nim":'201908101079',
//     "email":"indrayasya96@gmai.com",
//     "jurusan":"Teknik Informatika",
//     "idMurid":354
// },{
//     "nama": "Idris",
//     "nim":'20190232401079',
//     "email":"idrissya96@gmai.com",
//     "jurusan":"Teknik Informatika",
//     "idMurid":354
// },{
//     "nama": "Afif",
//     "nim":'201908101079',
//     "email":"afif96@gmai.com",
//     "jurusan":"Teknik Sipil",
//     "idMurid":354
// }]

// for (let i = 0;i<mhs.length;i++) {
//     console.log(mhs[i].nama)
// // }
// console.log('mulai')
// mhs.forEach(m=> {for (let i = 0;i <100000;i++){
//     let date = new Date()}
//     console.log(m.nama)
// })
// // console.log('selesai')
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response)
//             } else if(xhr.status === 404) {
//                 error()
//             }
//         }
//     }
//     xhr.open('get',url);
//     xhr.send();
// }
// getDataMahasiswa('data/mahasiswa.json',results=>{
//     const mhs = JSON.parse(results) 
//     mhs.forEach(m => console.log(m.nama));
// },()=> {

// })

//JQuery
console.log('mulai')
$.ajax({
    url:'data/mahasiswa.json',
    success:(mhs)=>{
        mhs.forEach(m => console.log(m.nama));
    },
    error:(e)=>{
         console.log(e.responseText)

    }
})
console.log('selesai')

















