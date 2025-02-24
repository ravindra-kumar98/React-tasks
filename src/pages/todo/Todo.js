import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../store/slice/TodoSlice";
import { Button, Form } from "react-bootstrap";
import TodoItems from "../../components/TodoItems.js";
const Todo = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Todo.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) {
      setError("Please enter a todo item");
      return;
    }

    if (todos.some((todo) => todo.text === trimmed)) {
      setError("Todo already exists");
      return;
    }

    if (editingId) {
      dispatch(editTodo({ id: editingId, text: trimmed }));
      setEditingId(null);
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        text: trimmed,
        completed: false,
      };
      dispatch(addTodo(newTodo));
    }
    setInput("");
    setError("");
  };
  const handleEdit = (id, text) => {
    setEditingId(id);
    setInput(text);
  };
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <div className="pr-card">
          <h2>Add Todo</h2>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Add a new todo"
              aria-label="Add a new todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              isInvalid={!!error}
            />
            <Button type="submit" variant="primary" aria-label="Add todo">
              <FontAwesomeIcon icon={editingId ? faCheck : faPlus} />
            </Button>
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </InputGroup>
        </div>
      </Form>
      <TodoItems todos={todos} onEdit={handleEdit} />
    </section>
  );
};

export default Todo;
