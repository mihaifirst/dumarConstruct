import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { getAuthToken } from "./helpers/_token";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import "../src/styles/Page.module.css";
import PricesPage from "./pages/PricesPage";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";

function App() {
  const token = getAuthToken();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate("/auth/register");
    }

    if (location.pathname === "/dashboard") {
      navigate("/dashboard/categories");
      return;
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
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="categories" element={<CategoryPage />} />
        <Route path="prices" element={<PricesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
