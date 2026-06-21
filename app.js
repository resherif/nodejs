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

app.get("/", (req, res) => {
  res.send(customer);
});
app.get("/api/customers", async (req, res) => {
  const result = await Customer.find();
  res.send({ data: result });
});
app.get("/api/customers/:id",async (req,res)=>{
   try{
     const {id}=req.params;
    const result=await Customer.findById(id);
    if(!result){
        res.status(404).json({message:"customer not found"});
    }
    res.json({data:result});
   }catch(err){
    res.status(500).json({message:err.message});
   }
})
app.post("/api/customers", async(req, res) => {
  const newCustomer =await new Customer(req.body);
  await newCustomer.save();
  console.log(newCustomer);
  res.status(201).json({newCustomer});
});
app.put("/api/customers/:id",async (req,res)=>{
    try{
        const {id}=req.params;
        const result=await Customer.findByIdAndUpdate(id,req.body,{new:true});
        if(!result){
            res.status(404).json({message:"customer not found"});
        }
        console.log(result);
        res.json({message:"customer updated successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
})
app.delete("/api/customers/:id",async (req,res)=>{
    const {id}=req.params;
    const result=await Customer.deleteOne({_id:id});
    if(result.deletedCount===0){
        res.status(404).json({message:"customer not found"});
    }
res.json({message:"customer deleted successfully"});
})
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
