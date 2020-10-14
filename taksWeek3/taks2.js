const getmonth = (callback) =>{
    setTimeout(() => {
        let err = true;
        let month = ['January', 'February', "March", "April", "May", "Juny",
                    "July", "Agust", "September", "October", "November", "Desember"]
        if(!err){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
        
        const result = month.map((item)=>{
            return item
        })
        callback(result)
    }, 4000)    
}

const showmonth=(show)=>{
    console.log(show)
}

getmonth(showmonth)