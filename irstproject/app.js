console.log('hello node');
let x = 10;
const { json } = require('body-parser');

// let y = 20;
// function funt(a, b) {return a+b};
// var result = funt(x, y);
// console.log(result);
// console.log(90 + result);
// const express = require('express');
// const app = express();
// const { log } = require('./logger');
// log();
const http = require('http');
// const books = [{
//     id: 1,
//     name: 'physics',
    
// },{
//     id: 2,
//     name: 'Math',
    
// },{
//     id: 3,
//     name: 'chemistry',
    
//     },
//     {
//     id: 4,
//     name: 'bio',
    
//     },
//     {
//     id: 5,
//     name: 'geo',
    
//     },
//     {
//     id: 6,
//     name: 'analytics',
    
//     },
//     {
//     id: 7,
//     name: 'psychology',
    
//     },
// ]
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<h1>welcome to node </h1>');
//         res.end();
//     }
//     if (req.url === '/api/books') {
//         res.write(JSON.stringify(books))
//         res.end();
//     }
// });
// server.listen(5000, () => console.log('server is running in port 5000'))
