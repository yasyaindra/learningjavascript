function faktorial(n) {
    if (n===0) return 1;
    hasil = n*faktorial(n-1);
    return hasil
}
let terakhir = faktorial(5)
console.log(terakhir)