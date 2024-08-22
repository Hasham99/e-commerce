import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Policy from "./components/Pages/Policy";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPaswords from "./components/auth/ForgotPaswords";
import AdminPrivateRoute from "./components/Routes/AdminPrivateRoute";
import AdminDashboard from "./components/Pages/Admin/AdminDashboard";
import CreateCategory from "./components/Pages/Admin/CreateCategory";
import CreateProduct from "./components/Pages/Admin/CreateProduct";
import Users from "./components/Pages/Admin/Users";
import Profile from "./components/Pages/User/Profile";
import Orders from "./components/Pages/User/Orders";
import UserDashboard from "./components/Pages/User/UserDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPaswords />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminPrivateRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
};

export default App;
