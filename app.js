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
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const Customer = require("./models/Customers");
const app = express();
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
const PORT = process.env.PORT || 3000;
const connection = process.env.connection;
const customers = [
  {
    name: "reham",
    industry: "software dev",
    "favourite Numbers": [2, 9, 7],
    "favourite persons": [
      {
        name: "mom",
        Relatonship: "parent",
      },
      {
        name: "Dad",
        Relationship: "parent",
      },
    ],
  },
];
const customer = new Customer({
  name: "caleb",
  industry: "marketing",
});
customer.save();
app.get("/", (req, res) => {
  res.send(customer);
});
app.get("/api/customers", (req, res) => {
  res.send({ data: customers });
});
app.post("/api/customers", (req, res) => {
  const newCustomer = req.body;
  customers.push(newCustomer);
  console.log(customers);
  res.status(201).send(newCustomer);
});

const start = async () => {
  try {
    await mongoose.connect(connection);
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
