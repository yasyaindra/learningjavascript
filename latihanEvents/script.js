/*const judul = document.getElementById('judul')
judul.style.color = 'green'
judul.style.backgroundColor = 'black'
judul.innerHTML = 'Indra ganteng'

const p = document.getElementsByTagName('p')
for (var i=0;i<p.length;i++) {
    p[i].style.color = 'white'
    p[i].style.backgroundColor = 'black'
}

const h = document.getElementsByTagName('h1')[0]
h.style.fontSize = '75px'

const p4 = document.querySelector('#b p')
p4.style.color = 'blue'
p4.style.backgroundColor = 'yellow'
p4.style.fontSize = '45px'
p4.style.fontStyle = 'Arial'

const li2 = document.querySelector('ul li:nth-child(2)')
li2.style.color = 'red'
li2.style.backgroundColor = 'orange'

const p = document.querySelectorAll('p')
for (let i=0;i<p.length;i++) {
    p[i].innerHTML = 'baris ke '+(i+1)+' ini diubah menggunakan javascript'
} 

const judul = document.getElementsById = ('judul')
judul.innerHTML = 'saya indra maulana'*/

const pBaru = document.createElement('p');
const teks = document.createTextNode('paragraf bagus')
pBaru.appendChild(teks)

const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

const liBaru = document.createElement('li')
const liTeks = document.createTextNode('list baru')

liBaru.appendChild(liTeks)

const tampilkanLi = document.querySelector('section#b ul')
const li2 = document.querySelector('section#b ul li:nth-child(2)')

tampilkanLi.insertBefore(liBaru, li2)

const link = document.getElementsByTagName('a')[1]
const link2 = document.getElementsByTagName('a')[0]

sectionA.removeChild(link)
sectionA.removeChild(link2)

const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru!')

h2Baru.appendChild(teksH2Baru)
sectionB.replaceChild(h2Baru, p4)

h2Baru.style.backgroundColor = 'lightblue'
liBaru.style.backgroundColor = 'lightblue'
pBaru.style.backgroundColor = 'lightblue'