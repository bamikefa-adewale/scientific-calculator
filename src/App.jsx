import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Calculator from "./page/Calculator";
import Investment from "./page/Investment";
import ProtectRoute from "./page/protectRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Calculator" element={<ProtectRoute />}>
          <Route index element={<Calculator />} />
        </Route>
        <Route path="/Investment" element={<Investment />} />
      </Routes>
    </div>
  );
}

export default App;
