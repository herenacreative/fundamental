// const palindrom = (str) => {
//     if(typeof str != 'string') return console.log('input must be a string')
//     const cek = str.toLowerCase().replace(/\W/g)

//     //untuk menampung str yang sudah di reverse
//     let reversed = '' 

//     for (let i = cek.length-1; i >= 0; i--){
//         //setiap data yang diakses loop di tambahkan ke reverse
//         reversed += cek[i];
//     }
//     const result = (reversed == str) ? console.log('Palindrom') : console.log('Bukan Palindrom')
// }

// palindrom('singa')

////////////////////////Menggunakan Funtion///////////////////////////////////
const palindrom = (str) =>{
    if(typeof str != 'string') return console.log('input must be a string')
    const cek = str.toLowerCase().replace(/\W/g, '')
    const reversed = cek.split('').reverse().join('')
    (str === reversed) ? console.log('Palindrom') : console.log('Bukan Palindrom')
}

palindrom(11)