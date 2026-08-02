const express = require("express");
const routs = express.Router();
routs.get("/",(req,res)=>{
   res.render("form", {user:req.query.name ||"User"})
});
routs.post('/submit',(req,res)=>{
   res.send(req.body);
    })
module.exports = routs;