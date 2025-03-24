import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import { getAuthToken } from "./helpers/_token";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const token = getAuthToken();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);

    if (!token) {
      navigate("/auth/register");
    }

    if (location.pathname === "/auth/login") {
      navigate("/auth/login");
      return;
    }

    if (location.pathname === "/auth/register") {
      navigate("/auth/register");
      return;
    }

    navigate("/dashboard");
  }, []);

  return (
    <Routes>
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <div className="page">
            <SideNavigation />
            <MainLayout />
          </div>
        }
      />
      <Route path="/dashboard/categories" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
