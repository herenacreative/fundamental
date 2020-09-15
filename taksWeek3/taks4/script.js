const url = 'https://jsonplaceholder.typicode.com/users'    

fetch(url)
 //////////////////Get All Data/////////////////////////
//  .then(response=>response.json())
//  .then((data) => console.log(data));

  //////////////////Get Name/////////////////////////
  .then(response=>response.json())
  .then((data) => {
    return data.map((item) =>{
      console.log(item.name)
    })
  });
