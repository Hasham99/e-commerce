import React, { useState } from "react";
import authBg from "../../assets/authbg.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPaswords = () => {
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/forgot-password`,
        { email, secret, newPassword }
      );
      if (res && res.data.success) {
        toast.success("Password Changed Successful");
        navigate("/login");
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
              <h1 className=" text-2xl font-bold">Forgot Password</h1>
              <h1 className=" text-sm font-semibold ">Reset your password</h1>
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
                  <span className="label-text">Secret</span>
                </label>
                <input
                  type="text"
                  value={secret}
                  placeholder="your secret"
                  onChange={(e) => setSecret(e.target.value)}
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
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="new password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <button
                  type="submit"
                  className="btn text-white bg-[#66CAE2] hover:bg-[#60bdd4]"
                >
                  Forgot Password
                </button>
              </div>
              <label className="label flex text-right ">
                <NavLink
                  to="/login"
                  className="label-text-alt link link-hover "
                >
                  Goto Login
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

export default ForgotPaswords;
