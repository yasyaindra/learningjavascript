// const p3 = document.querySelector('.p3')
// const p4 = document.querySelector('section#b p')

// function ubahWarnaP3() {
//     p3.style.backgroundColor ='lightblue'
// }
// function ubahWarnaP2() {
//     p2.style.backgroundColor ='lightblue'
// }
// function tambahItem() {

// }

// const p2 = document.querySelector('.p2')
// p2.onclick = ubahWarnaP2
// p3.onclick = ubahWarnaP3
// p4.addEventListener('click',function() {
//     onclick="ubahWarnaP3()"
//     const ul = document.querySelector('section#b ul')
//     const liBaru = document.createElement('li')
//     const teksLiBaru = document.createTextNode('Item baru!')
//     liBaru.appendChild(teksLiBaru)
//     ul.appendChild(liBaru)
// })

const p3 = document.querySelector('.p3')
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue'
//     p3.style.color = 'red'
// }
p3.addEventListener('mouseenter',function(){
    p3.style.backgroundColor = 'lightblue'
})

p3.addEventListener('mouseleave',function(){
    p3.style.backgroundColor = 'lightgreen'
})

// p3.addEventListener('click',function(){
//     p3.style.color = 'red'
// })