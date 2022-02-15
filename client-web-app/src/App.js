import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";

// Components
import Login from "./components/Login";
import Register from "./components/Register";

import "./sass/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
