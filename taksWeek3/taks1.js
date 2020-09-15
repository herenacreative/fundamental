const cekHariKerja = (day) => {
    //validasi
    if(/^[0-9]+$/.test(day) || day == ''){
        console.log("Please only enter String")
        return false
    }

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa','rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(`${cek} adalah hari kerja`)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

/////////////////////////////Penjelasan then catch///////////////////////////////////
/*  buat function yang berisi params (status: data pending),
    kemudian akan dicek (then) 
    jika hari yang dicari ada di list data maka akan tampil response nya (status: fullfiled)
    jika hari tidak ada dalam list data maka catch akan menampilkan pesan error (status: rejected)  */

cekHariKerja('minggu').then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.message)
})

//////////////////////////Penjelasan async await///////////////////////////////////
/*  buat function baru yang bernama search kemudian data akan mensync
    await akan meruning setelah data tersebut selesai load
    jika data yang dicari ada makan tampil hari
    jika data yang dicari tidak ada dalam dalam list maka akan menampilkan pesan error  */

// const search = async() => {
//     try{
//         let result = await cekHariKerja('')
//         console.log(result)
//     }catch(e){
//         console.log(e.message)
//     }
// }
// search()