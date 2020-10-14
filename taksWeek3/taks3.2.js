const pageBook = (page) => {
    //validasi
    if(!/^[0-9]+$/.test(page) || page == ''){
        console.log("Please only enter Number")
        return false
    }

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataBook = ['aaa', 'bbbb','ccc', 'ddd', 'fff', 'ggg']
            const start = (page - 1)
            const end = (page + 1)
            const result = dataBook.slice(start, end)
            if(result){
                resolve(`< ${start} - ${result} - ${end} >`)
            }else{
                reject(new Error('tidak ada data'))
            }
        }, 3000)
    })
}

// pageBook(2).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err.message)
// })

const getBook = async() =>{
    try{
        let result = await pageBook(4)
        console.log(result)
    }catch(e){
        console.log(e.message)
    }
}
getBook()