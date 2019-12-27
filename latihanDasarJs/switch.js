let item = prompt('masukkan makanan atau minuman: \n (cth:nasi, daging, susu, hamburger, softdrink)')

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan/minuman sehat!')
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan/minuman tidak sehat!')
        break;
    default:
        alert('makanan/minuman tak ada/salah!')
        break;
}