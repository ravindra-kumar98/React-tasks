import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/slice/TodoSlice";

const TodoItems = ({ todos, onEdit }) => {
  const dispatch = useDispatch();
  const handleDlete = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {todo.text}
          <span>
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => onEdit(todo.id, todo.text)}
              style={{
                color: "rgb(13 110 253)",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleDlete(todo.id)}
              style={{
                color: "#ff1818",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: "#01a219",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoItems;
