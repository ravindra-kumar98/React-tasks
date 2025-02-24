import React from "react";
import { useSelector } from "react-redux";

const CompletedTodoItems = () => {
  const completedTodos = useSelector((state) => state.Todo.todos.filter((item) => item.completed));
  return <section>
    <h3>Complteded list</h3>
     <ul style={{maxHeight: '400px',
      overflowY: 'auto',
      overflowX: 'hidden',}}>
    {
      completedTodos.length === 0 ? <li style={{color: "red"}}>You haven't completed any todo, Please complete...</li> : completedTodos.map((item)=>(
        <li key={item.id} className="todo-item">
          {item.text} 
        </li>
      ))
    }
  </ul>
  </section>
};

export default CompletedTodoItems;
