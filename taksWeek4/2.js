const reversed = (str) =>{
    if(typeof str != 'string') return console.log('input must be a string')

    //convert string-array
    let arr = str.toLowerCase().split(' ')

    //var penampung
    let newArr = []
    for(let i = arr.length-1; i>= 0; i--){ 
        
        //memasukkan value ke sebuah array dan disimpan di paling akhir / paling kanan
        newArr.push(arr[i]) 
    }

    //convert array-string
    const result = newArr.join(' ') 
    console.log(result)
}
reversed(1231)