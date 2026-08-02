const express =require('express');
const { addTodo, allTodoGet } = require('../controller/todo');
const router = express.Router();
router.post('/add',(req,res)=>{
 addTodo(req.body.data);
res.send("todo Added!");
})
router.get('/',(req,res)=>{
res.render("todo",{todo:allTodoGet()});
})
module.exports= router;
