import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Calculator from "./page/Calculator";
import Investment from "./page/Investment";
import DbLogin from "./page/DbLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Investment" element={<Investment />} />
        <Route path="/DatabaseLogin" element={<DbLogin />} />
      </Routes>
    </div>
  );
}

export default App;
