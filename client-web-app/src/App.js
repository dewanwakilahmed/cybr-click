import { Routes, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import Homepage from "./pages/Homepage";

// Components
import Login from "./components/Login";
import Register from "./components/Register";

// Main SASS
import "./sass/main.scss";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
