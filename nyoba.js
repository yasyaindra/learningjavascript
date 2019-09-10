console.log('Welcome to nodejs');
// var readline = require('readline-sync'); bergunan untuk merecall fungsi readline
var readline = require('readline-sync');
//parseInt untuk menjadikan semua variable sebagai integer 
var i = parseInt(readline.question('masukkan angka pertama: ')) ;
var j = parseInt(readline.question('masukkan angka kedua: ')) ;

console.log(i+j);