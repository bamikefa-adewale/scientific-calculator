/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/page/Home";
import Calculator from "./component/page/Calculator";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
