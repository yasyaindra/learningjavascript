/*const mhs = ['indra','apip','wahyu']
console.log(...mhs[0])

const dosen = ['budi','rudi','reni']
const nama = [...mhs, 'Aji', ...dosen]
const nama2 = mhs.concat(dosen)
console.log(...nama)
console.log(...nama2)

const mhs = ['indra','idris','apip']
const mhs1 = [...mhs];
mhs1[0] = 'Ganteng';
console.log(mhs1)


 const liMhs = document.querySelectorAll('li')
 const mhs = []
 for (let i = 0;i<liMhs.length;i++) {
     mhs.push(liMhs[i].textContent);
 }

 const mhs2 = [...liMhs].map(m=> m.textContent);
 console.log(mhs2) */

const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h=> `<span>${h}</span>`).join('  ');

nama.innerHTML = huruf;