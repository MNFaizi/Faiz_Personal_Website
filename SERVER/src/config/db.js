const mongoose = require('mongoose');
require('dotenv').config({path : './.env.local'})

const url = process.env.MONGO_URI

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const dbConnect = async () => {
    try{
        await mongoose.connect(url)
        console.log("MongoDB successfully connect")
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = dbConnect