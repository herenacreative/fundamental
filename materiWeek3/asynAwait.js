// let janjian = new Promise((resolve, reject)=>{
//     let success = true;
//     if(success){
//         resolve('berhasil')
//     }else{
//         reject(new Error( 'janji dibatalkan'))  //kalau ada error nanti akan ngesolv erronya rest.error
//     }
// })

// janjian.then((result)=>{
//     console.log(result)
// }).catch((error)=> {
//     console.log(error)
// })

////////////////asa////////////////

// let janjian = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Sintaherena')
//     }, 1000)
//     setTimeout(()=>{
//         reject(new Error('Connnection Timeout'))
//     }, 2000)
// })

// janjian.then((result)=>{
//     console.log(result)
// }).catch((error)=> {
//     console.log(error.message)
// })


////////////////asa////////////////

let janjian = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({
            nama: 'Sinta herena',
            kelas: 18
        })
    }, 2100)
    setTimeout(()=>{
        reject(new Error('Connnection unStable'))
    }, 2000)
    setTimeout(()=>{
        reject(new Error('Connnection Timeout'))
    }, 3000)
})

// janjian.then((result)=>{
//     if(result.kelas == 18){
//     console.log('benar')    
//     }else{
//         console.log('salah')
//     }
    
// }).catch((error)=> {
//     console.log(error.message)
// }).finally(()=>{
//     console.log('selesai')
// })

async function rejanjian(){
    let result = await janjian()
    console.log(result)
}
rejanjian()