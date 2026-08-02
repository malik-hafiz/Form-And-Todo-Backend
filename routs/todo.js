const express =require('express');
const { todoAdd, allTodoGet } = require('../controller/todo');
const router = express.Router();
router.post('/add',(req,res)=>{
todoAdd(req.body.data);
res.send("todo Added!");
})
router.get('/',(req,res)=>{
res.render("todo",{todo:allTodoGet()});
})
module.exports= router;
