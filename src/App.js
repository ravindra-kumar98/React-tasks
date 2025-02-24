import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrimeNumber from "./pages/prime-number/PrimeNumber";
import Layouts from "./pages/layouts/Layouts";
import EvenOdd from "./pages/even-odd/EvenOdd";
import Factorial from "./pages/factorial/Factorial";
import Counter from "./pages/counter/Counter";
import Todo from "./pages/todo/Todo";
import CompletedTodoItems from "./components/completedTodoItems";

function App() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route path="/" element={<PrimeNumber />} />
        <Route path="/even-odd" element={<EvenOdd />} />
        <Route path="/factorial" element={<Factorial />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo-list" element={<Todo />} />
        <Route path="/completed-list" element={<CompletedTodoItems />} />
      </Route>
    </Routes>
  );
}

export default App;
