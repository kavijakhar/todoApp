
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://kavitajakhar2007:kavitajakhar2007@cluster0.fppakrp.mongodb.net/?retryWrites=true&w=majority"


const connectToMongo = () => {
    mongoose.connect(mongoURI)
    console.log("connected")
}
module.exports = connectToMongo     