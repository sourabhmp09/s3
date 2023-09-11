

///////////////////////////////
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); //import config.env file
// require("dotenv").config()

const connectDatabase = () => {
  mongoose
    .connect(
      process.env.DB,

      {
      useNewUrlParser: true,
     useUnifiedTopology: true,
    //  useMongoClient:true,
    // useCreateIndex: true,
    })
    .then((data) =>{
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch(
      (err)=>{
        console.log(`err from mongodb>>   ${err}`);
      }
    )




};

module.exports = connectDatabase;

