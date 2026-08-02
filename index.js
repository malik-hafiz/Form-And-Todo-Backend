const express = require("express");
const app = express();
const form = require("./routs/form.js");
const todo = require("./routs/todo.js");
const bodyParser=require('body-parser');
const path=require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
 res.send("Hello Backend")
})
app.set("view engine" , "ejs");
app.set("views" , "./views")
app.use("/form",form)
app.use('/todo',todo);

app.listen(3000,()=>{
    console.log("port is running ");
    
})
