const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: String,
    industry: String
})
//customer is the name of collection in mongodb 
module.exports = mongoose.model('Customer', customerSchema);