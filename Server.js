const express = require("express");

const pizza=require('./modal/pizzamodal')

const app = express();
const data =require("./data")
app.use(express.json());

app.get('./',(req , res)=>{
    res.send("Server working");
});
app.get("./pizzas",(req,res)=>{

    pizza.find({},(err,docs)=>{
      if(err) {
        console.log(err);
      }
      else{
        res.send(docs)
      }
    })
});

const port = process.env.PORT || 5000;

app.listen(port,() => 'server running on port port');
