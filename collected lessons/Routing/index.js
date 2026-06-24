const express = require('express');
const app = express();
const PORT = 5000;
const UserRoute = require('./routes/User');
const CommentsRoute = require('./routes/Comments');
app.use('/user', UserRoute);
app.use('/comments', CommentsRoute );
app.listen(PORT, () => { 
    console.log(`Server running on ${PORT} ...`)
})