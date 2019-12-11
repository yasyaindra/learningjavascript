const nama = 'Indra Maulana'
const umur = 33
const email = 'indrayasya96@gmail.com'

function coba(strings, ...values) {
    /*let result = ' ';
    strings.forEach((str, i)=> {
        result += `${str}${values[i] || ''}`;
    })
    return result; */
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span> `,'')
}
const str = coba`halo ${nama}, kamu berumur ${umur}, dan email mu adalah ${email}`

document.body.innerHTML = str;