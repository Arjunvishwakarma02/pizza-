const mongoose = require("mongoose");

var mongoURL ='mongodb+srv://pizza:pizza1234@cluster0.fd5rwss.mongodb.net/test'
mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewurlParser:true})

var data = mongoose.connection

data.on('connected',()=>{
    console.log('Database connect successfully');
})

data.on('error',()=>{
    console.log('mongo database connection failed');
})

module.exports = mongoose