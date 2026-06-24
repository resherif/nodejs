const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send("Hello World from GET User");
});
router.post('/', (req, res) => { 
    res.json({ message: "user created successfully!" });
})
module.exports = router;