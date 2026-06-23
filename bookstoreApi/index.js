const express = require('express');
const app = express();
//apply middleware
app.use(express.json());
const joi = require('joi');
const books = [{
    id: 1,
    title: 'black sea',
    author: 'ro',
    description: 'black sea',
    price: 200,
    cover:'soft cover',
},
{
    id: 2,
    title: 'black sea',
    author: 'ro',
    description: 'black sea',
    price: 200,
    cover:'soft cover',
    }
    ,
{
    id: 3,
    title: 'black sea',
    author: 'ro',
    description: 'black sea',
    price: 200,
    cover:'soft cover',
    }]

//http methods
app.get('/', (req, res) => {
    res.send('hello from express js');
}); 
app.get('/api/books', (req, res) => {
    res.status(200).json(books);
})
app.get('/api/books/:id', (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({message:'book not found'})
    }
})
const port = 5000;
app.listen(port, () => {
    console.log(`welcome from  ${port} express`);
})
app.post('/api/books', (req, res) => {
    const schema = joi.object({
        title: joi.string().trim().min(3).max(200).required(),
       description: joi.string().trim().min(3).max(250).required(),
       author: joi.string().min(3).trim().max(200).required(),
        price: joi.number().min(1).required(),
        cover: joi.string().min(3).trim().max(200).required(),
    })
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({message:error.details[0].message});
    }
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        cover:req.body.cover
        
        
    }
    books.push(book);
    //created successfully
    res.status(201).json(book);
})

// app.put();
// app.post();
// app.delete();