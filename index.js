const express = require("express");
const app = express();
const form = require("./routs/form.js");
const todo = require("./routs/todo.js");
const bodyParser=require('body-parser');
const path=require('path');
// app.use((req,res,next)=>{{
//     req.data ='ishaq';
//     console.log(req.url);
//     next(); 
// }});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(express.static(path.join(process.cwd(),'public')));
app.get("/",(req,res)=>{
 res.send("hafiz")
})
app.set("view engine" , "ejs");
app.set("views" , "./views")
app.use("/form",form)
app.use('/todo',todo);

app.listen(3000,()=>{
    console.log("port is running ");
    
})