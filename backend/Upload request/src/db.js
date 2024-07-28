const mongoose = require('mongoose');
require('dotenv').config();

let mongooseURI;

mongooseURI = process.env.MONGO_URI;

mongoose.set('strictQuery', true)

const connectToMongo = async () => {
    await mongoose.connect(mongooseURI)
    console.log('connected to mongoDB')
}

module.exports = connectToMongo