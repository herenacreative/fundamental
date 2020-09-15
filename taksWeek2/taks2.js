const searchName = (searching, count, callback) => {
  if(/^[0-9]+$/.test(searching)){
    console.log("Please only enter Name")
    return false
  }

  const names = ['Abigail', 'Alexander', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Deirdre', 'Diana', 'Elizabeth', 'Ella','Faith', 'Olivia', 'Penelope']
  
  const filters = (query) => {
    return names.filter(name => {
      return name.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
  }
  
  const newArray = filters(searching)
  const result = newArray.length > count ? newArray.length = count: '' 

  callback(newArray)
}

const showName = (show) => {
  console.log(show)
}

searchName('an', 3, showName)