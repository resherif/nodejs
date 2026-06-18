// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World\n");
// })
// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });
const { v4: uuidv4 } = require("uuid"); 
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3001;
const customers= [
    {
  "name":"reham",
  "industry":"software dev",
  "favourite Numbers":[
    2,9,7
  ],
  "favourite persons":[{
    "name":"mom",
    "Relatonship":"parent"
    
  }
  ,
  {
    "name":"Dad",
    "Relationship":"parent"

  }]
}];
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/api/customers", (req, res) => {
    res.send({"data":customers});
})
app.post('/api/customers', (req, res) => {
    const newCustomer = req.body;
    customers.push(newCustomer);
    console.log(customers);
    res.status(201).send(newCustomer);
});
app.listen(port, () => { 
    console.log(`Server running at http://localhost:${port}/`);
})