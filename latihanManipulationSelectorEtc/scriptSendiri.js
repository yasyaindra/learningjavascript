// membuat isi
const pBaru = document.createElement('p') 
const teksPBaru = document.createTextNode('PARAGRAF BARU!')
pBaru.appendChild(teksPBaru)
// mencari wadah untuk isi
const sectionA = document.getElementById('a')
const sectionAWarna = sectionA.appendChild(pBaru)
sectionAWarna.style.backgroundColor = 'lightgreen'
sectionAWarna.style.borderColor = 'red'

const liBaru = document.createElement('li')
const textLiBaru = document.createTextNode('INI LIST BARU')
liBaru.appendChild(textLiBaru)

const tampilkanLi = document.querySelector('section#b ul')
const li2 = document.querySelector('section#b ul li:nth-child(2)')
tampilkanLi.insertBefore(liBaru, li2)

const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

const sectionB = document.getElementById('b')
const p = sectionB.querySelector('p')
const h2 = document.createElement('h2')
const h2Teks = document.createTextNode('JUDUL BARU!')

h2.appendChild(h2Teks)
sectionB.replaceChild(h2, p)