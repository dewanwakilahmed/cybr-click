import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./redux/utils/setAuthToken";
import { loadUser } from "./redux";

// Pages
import Homepage from "./pages/Homepage";

// Components
import Login from "./components/Login";
import Register from "./components/Register";

// Main SASS
import "./sass/main.scss";

// Set Auth Token
const token = localStorage.token;
if (token) {
  setAuthToken(token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
};

export default App;
