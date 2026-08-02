const todo=[];
const todoAdd=(User)=>{
todos.push(User);
return true;
}
const allTodosGet=()=>{
    return todo;
}
module.exports={allTodosGet,todoAdd}
