// const express = require('express')
// const api_helper = require('./helper')
// const app = express()
// const port = 3000
// const fetch = require('node-fetch');
// const url = 'https://jsonplaceholder.typicode.com/users'  
// /*
// * Route to DEMO the API call to a REST API Endpoint 
// * REST URL : https://jsonplaceholder.typicode.com/todos/1
// */

// // app.get('/getAPIResponse', (req, res) => {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => {
// //         res.json(response)
// //     })
// //     .catch(error => {
// //         res.send(error)
// //     })
// // })

// // app.get('/getAPIResponse', (req, res) => {
// //     api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos/1')
// //     .then(response => {
// //         console.log(response)
// //     })
// //     .catch(error => {
// //         res.send(error)
// //     })
// // })

// const getData = async url => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     const result = json.map((item) =>{
//         console.log(item.name)
//         })
//     // console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData(url);

// app.listen(port, () => console.log(`App listening on port ${port}!`))

// const http = require('http')
// const fetch = require("node-fetch");
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
