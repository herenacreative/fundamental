const pageBook = (page, limit) => {
    //validasi
    if(!/^[0-9]+$/.test(limit) || limit == ''){
        console.log("Please only enter Number")
        return false
    }

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataBook = ['aaa', 'bbbb','ccc', 'ddd', 'fff', 'ggg']
            const count =parseInt(dataBook.length/limit)
            const start = (page - 1) * count
            const end = (page + 1) * count

            const result = dataBook.slice(start, end)
            if(result){
                resolve(`< ${start} - ${result} - ${end} >`)
            }else{
                reject(new Error('tidak ada data'))
            }
        }, 3000)
    })
}

const getBook = async() =>{
    try{
        let result = await pageBook(2, 2)
        console.log(result)
    }catch(e){
        console.log(e.message)
    }
}
getBook()