import { createSlice } from "@reduxjs/toolkit";

const loadDataFromStorage = () => {
  try {
    const loadData = localStorage.getItem("todos");
    return loadData ? JSON.parse(loadData) : [];
  } catch (error) {
    console.error("Error loading todos from localStorage:", error);
    return [];
  }
};

const saveDataInLocalStorage = (todos) => {
  try {
    const todosToStore = todos.map((todo) => ({
      id: todo.id,
      text: todo.text,
      completed: todo.completed,
    }));
    localStorage.setItem("todos", JSON.stringify(todosToStore));
  } catch (error) {
    console.error("Error saving todos to localStorage:", error);
  }
};

const initialState = {
  todos: loadDataFromStorage(),
  status: "idle",
  loading: false,
  error: null,
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      saveDataInLocalStorage(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveDataInLocalStorage(state.todos);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        saveDataInLocalStorage(state.todos);
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveDataInLocalStorage(state.todos);
      }
    },
  },
});
export const { addTodo, removeTodo, editTodo, toggleTodo } =
  todoListSlice.actions;
export default todoListSlice.reducer;
