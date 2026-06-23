const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log("hello middlewares");
    next();

});
const checkIfPedro = (req,res,next) => { 
    const name = req.body.name;
    if (name === "Pedro") {
        res.json({ error: "yo , we dont allow pedro here" });
    }
    else { 
        next();
    }
}
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.post('/', checkIfPedro, (req, res) => { 
    res.json({ message: "you logged in" });
})
app.listen(3000, () => {
    console.log("Server Running...");
});