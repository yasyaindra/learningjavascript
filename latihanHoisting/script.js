//var nama = 'Indra'
//var umur = 19
/*
function sayHello() {
    return `Hello ${nama}, yang berumur ${umur}`
}

console.log(sayHello()) 

var nama = 'Yasya Indra'
var username = 'yasyaindr'

function showingMyIG(username) {
    var instagramURL = 'https://instagram.com/'
    return instagramURL + username
}

console.log(showingMyIG(username))*/

function a() {
    console.log('ini a') 

    function b() {
        console.log('ini b')
            function c() {
                console.log('ini c')
        }
        c()
    }
    b()
}

a()

// http://pythontutor.com/visualize.html#mode=display