const mongoose = require('mongoose');
//DEFINE MONGODB CONNECTION URL
const mongourl = 'mongodb://localhost:27017/hotels'
//SETUP MONGODB CONNECTION
mongoose.connect(mongourl)
    //useNewUrlParser: true,
    //useUnifiedTopology: true


//get the default connection
// mongoose maintains a default connection object representing the mongodb connection.
const db = mongoose.connection;      

// define event listeners for databse connection
db.on('connected', () => {
    console.log('connected to mongodb server');
});

db.on('disconnected', () => {
    console.log('disconnected to mongodb server');
});

db.on('error', () => {
    console.log('mongodb server error');
});

//exports database  connectionmodule.exports
module.exports = db;
