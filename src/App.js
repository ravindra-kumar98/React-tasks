import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrimeNumber from "./pages/prime-number/PrimeNumber";
import Layouts from "./pages/layouts/Layouts";
import EvenOdd from "./pages/even-odd/EvenOdd";
import Factorial from "./pages/factorial/Factorial";

function App() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route path="/" element={<PrimeNumber />} />
        <Route path="/even-odd" element={<EvenOdd />} />
        <Route path="/factorial" element={<Factorial />} />
      </Route>
    </Routes>
  );
}

export default App;
