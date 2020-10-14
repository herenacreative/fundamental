/*  Algotima
*   1. mulai
*   2. input num 
*   3. validasi input
*   4. convert type data number - string dan dipisahkan dengan 0
*   5. buat penampung str baru (newStr)
*   6. hitung jumlah karater dengan pembagi 0 dan di kurangi 1
*   7. cek apakah x lebih dari atau sama dengan 0
*   8. jika benar masukan dalam newStr
*   9. jika tidak hentikan perulangan
*   10. cetak hasil 
*   11. selesai
*/

const devideAndSort = (num) =>{
    if(typeof num != 'number') return console.log('input must be a number')
    const digits = num.toString().split('0');
    let newStr = ''
    for (let i = 0; i < digits.length - 1; i++) {
        newStr += digits[i].split("").sort((a, b) =>{return a - b}).join("")
    }
        console.log(parseInt(newStr));
}
devideAndSort(546813508418450545284)