import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Calculator from "./page/Calculator";
import ProtectRoute from "./page/protectRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/calculator" element={<ProtectRoute />}>
          <Route index element={<Calculator />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
