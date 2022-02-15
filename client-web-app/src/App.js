import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import "./sass/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
