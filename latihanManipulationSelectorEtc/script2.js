const judul = document.getElementById('judul')
judul.innerHTML = '<em>saya indra maulana</em>'

const sectionA = document.querySelector('section#b')
sectionA.innerHTML = '<b> hello world </b>'
sectionA.style.color = 'red'
sectionA.style.fontSize = '35px'

const h = document.getElementsByTagName('h1')[0]
h.setAttribute('class','judul')

const a = document.querySelector('section#a a')
a.removeAttribute('href')

const tambahKelas = document.querySelector('.p2')
a.classList.add('label')