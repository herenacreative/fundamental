const sortBook = new Promise((resolve, reject)=>{
    const dataBook = [{title:'laskar pelangi', pages: 120},{title:'seorang introvert', pages: 50}, {title:'web programming', pages: 28}, {title: 'Akuntansi', pages: 200}]
    const sorting = dataBook.sort((a,b)=>(a.title>b.title)? 1: ((b.title>a.title)? -1:0))
    setTimeout(()=>{
        resolve(sorting)
    },1000)
    setTimeout(()=>{
        reject(new Error("internet not connected"))
    },2000)
    
})

sortBook.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.message)
})

// const sortBook = (sortBy) => {
//     new Promise((resolve, reject)=>{
//     const dataBook = [{title:'laskar pelangi', pages: 120},{title:'seorang introvert', pages: 50}, {title:'web programming', pages: 28}, {title: 'Akuntansi', pages: 200}]
//     const sorting = dataBook.sort((a,b)=>(a.`{sortBy}`>b.title)? 1: ((b.title>a.title)? -1:0))
//     setTimeout(()=>{
//         resolve(sorting)
//     },1000)
//     setTimeout(()=>{
//         reject(new Error("internet not connected"))
//     },2000)
    
// })
// }

// sortBook.then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err.message)
// })