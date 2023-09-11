const express =require('express');
const app =express();
const errorMiddleware = require("./middleware/error");
const bodyParser = require('body-parser');
const cookieParser =require("cookie-parser");
const fileupload =require("express-fileupload")
const path = require('path');
var cors = require("cors")
app.use(express.json());
app.use (cookieParser());
app.use(cors())
   // body parser 
   app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileupload({ useTempFiles:true}))

   //Route Imports
   const product = require("./routes/productRoute");
   const user = require("./routes/userRoute");
   const order =require("./routes/orderRoute");


   app.use("/api/v1", product);
   app.use("/api/v1", user);
   app.use("/api/v1", order);

   //middleware for error
   

    app.use(express.static(path.join(__dirname, '../Frontend/build')));

    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
    });
    
 app.use(errorMiddleware);
module.exports =app;