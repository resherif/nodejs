const express = require('express');
const router = express.Router(); // ✅ تأكدي من الـ R الكابيتال والأقواس () في الآخر

router.get('/', (req, res) => {
    res.send("Hello from comments GET");
});

router.post('/', (req, res) => { 
    res.json({ message: "you logged in" });
});

module.exports = router;