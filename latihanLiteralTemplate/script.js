/*const mhs = {
    nama: 'Indra',
    umur: 19,
    nim: '20190801079',
    email: 'indra@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
    </div>`;

document.body.innerHTML = el; 
const mhs = [
    {
        nama: 'Indra Maulana',
        email: 'indra@gmail.com'
    },
    {
        nama: 'Unggul',
        email: 'unggul@gmail.com'
    }
];

const el = `<div class="mhs">
    ${mhs.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
    </ul>`).join(' ')}
</div>`

const lagu = {
    judul: 'Introvert',
    artis: 'Rich Brian',
    feat: 'Joji'
}

const el = `<div class="lagu">
    <ul>
        <li>${lagu.judul}</li>
        <li>${lagu.artis} ${lagu.feat ? `.feat  ${lagu.feat}`:''}</li>
    </ul>
    </div>`
*/
const mhs = {
    nama: 'Indra Maulana',
    semester: 1,
    mataKuliah: [
        'Matematika Linear',
        'Algortima',
        'Sistem Informasi'
    ]
};
function cetakMatakuliah(mataKuliah)  {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join(' ')}
    </ol>`
}
const el = `<div class="mhs">
    <h1>${mhs.nama}</h1>
    <span class="semester"> Semester: ${mhs.semester}</span>
    <h2> Mata Kuliah: </h2>
    ${cetakMatakuliah(mhs.mataKuliah)}
    </div>`
document.body.innerHTML = el;