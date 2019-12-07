/*function kerjakanTugas(matakuliah, selesai) {
    console.log(`sedang mengerjakan ${matakuliah}`)
    selesai()
}

function selesai() {
    alert('telah mengerjakan tugas!');
}

kerjakanTugas('pemograman javascript', selesai) */
/*
let total = 0, count = 1;
while (count<=10) {
    total += count;
    count++;
}
console.log(total) */

function repeat(n, action) {
    for (let i =0;i<n;i++)
    action(i);
}

repeat(10, console.log)

