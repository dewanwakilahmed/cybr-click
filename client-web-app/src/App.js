import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { IconContext } from "react-icons";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./redux/utils/setAuthToken";
import { loadUser } from "./redux";

// Private Route
import PrivateRoute from "./routing/PrivateRoute";

// Pages
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

// Tabs
import HomeTab from "./pages/dashboard-tabs/HomeTab";
import BlogsTab from "./pages/dashboard-tabs/BlogsTab";
import VideosTab from "./pages/dashboard-tabs/VideosTab";
import EbooksTab from "./pages/dashboard-tabs/EbooksTab";
import MyProfileTab from "./pages/dashboard-tabs/MyProfileTab";

// Components
import Login from "./components/Login";
import Register from "./components/Register";
import CreateOrUpdateProfile from "./components/CreateOrUpdateProfile";
import Profile from "./components/Profile";
import Blogs from "./components/Blogs";
import CreateBlogPost from "./components/CreateBlogPost";

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
      <IconContext.Provider value={{ className: "react-icon" }}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          >
            <Route index element={<HomeTab />} />
            <Route path="home" element={<HomeTab />} />
            <Route path="blogs" element={<BlogsTab />}>
              <Route index element={<Blogs />} />
              <Route path="create-blog" element={<CreateBlogPost />} />
            </Route>
            <Route path="videos" element={<VideosTab />} />
            <Route path="ebooks" element={<EbooksTab />} />
            <Route path="my-profile" element={<MyProfileTab />}>
              <Route index element={<Profile />} />
              <Route path="me" element={<Profile />} />
              <Route path="update" element={<CreateOrUpdateProfile />} />
              <Route path="create" element={<CreateOrUpdateProfile />} />
            </Route>
          </Route>
        </Routes>
      </IconContext.Provider>
    </Provider>
  );
};

export default App;
