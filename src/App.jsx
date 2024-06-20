import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Calculator from "./page/Calculator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
