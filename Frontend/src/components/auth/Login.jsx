import React, { useState } from "react";
import authBg from "../../assets/authbg.jpeg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        { email, password }
      );
      if (res && res.data.success) {
        toast.success("Register Successful");
        // console.log(res.data);
        const data = res.data.data;
        localStorage.setItem("auth", JSON.stringify(res.data.data));

        setAuth({
          ...auth,
          user: data.user,
          token: data.token,
        });

        navigate(location.state || "/");
      }
    } catch (error) {
      console.log("Server Error", error.message);
      toast.error("Server Error");
    }
  };
  return (
    <>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 rounded-2xl shadow-lg flex max-w-3xl">
          <div className="w-1/2 flex items-center">
            <form className="card-body" onSubmit={handleSubmit}>
              <h1 className=" text-2xl font-bold">Login</h1>
              <h1 className=" text-sm font-semibold ">
                Sign In if you already registered
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <NavLink
                    to="/forgot-password"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </NavLink>
                </label>
              </div>
              <div className="form-control mt-3">
                <button
                  type="submit"
                  href="/home"
                  className="btn text-white bg-[#66CAE2] hover:bg-[#60bdd4]"
                >
                  Login
                </button>
              </div>
              <label className="label flex text-right ">
                <NavLink
                  to="/register"
                  className="label-text-alt link link-hover "
                >
                  Don't have account? Register
                </NavLink>
              </label>
            </form>
          </div>
          <div className="w-1/2  p-4 hidden sm:block">
            <img className="rounded-xl" src={authBg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
