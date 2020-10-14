const sortBook = new Promise((resolve, reject)=>{
    const dataBook = [  {title:'laskar pelangi', tahun: 2012, pages: 120},
                        {title:'seorang introvert', tahun: 2020, pages: 50}, 
                        {title:'web programming', tahun: 2020, pages: 28}, 
                        {title: 'Akuntansi', tahun: 2019, pages: 200}
                    ]
    const sorting = dataBook.sort((a,b)=>(a.tahun>b.tahun)? 1: ((b.tahun>a.tahun)? -1:0))
    setTimeout(()=>{
        resolve(sorting)
    },1000)
    setTimeout(()=>{
        reject(new Error("internet unstable"))
    },2000)
    
})

// sortBook.then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err.message)
// })

const sorting = async() => {
    try{
        let result = await sortBook
        console.log(result)
    }catch(e){
        console.log(e.message)
    }
}
sorting()