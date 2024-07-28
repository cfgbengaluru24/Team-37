//create a schema with fields like name,date,address,image_url,area
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;