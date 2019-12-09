function halo() {
    console.log('hello world')
}

halo()

var obj = {}
obj.halo = function() {
    console.log('hello world')
}
obj.halo()

function Halo() {
    console.log('hello world')
}

new Halo()