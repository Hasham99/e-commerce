import React, { useState } from "react";
import authBg from "../../assets/authbg.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [secret, setSecret] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/register`,
        { username, fullName: name, email, password, phoneNo, secret, address }
      );
      if (res.data.success) {
        toast.success("Register Successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error Successful");
    }
    // console.log(username, name, email, password, phoneNo, address);
    // console.log(import.meta.env.VITE_API_URL);
    // toast("Register Successful");
  };
  return (
    <>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 rounded-2xl shadow-lg flex max-w-3xl">
          <div className="w-1/2 my-auto p-4 hidden sm:block ">
            <img className="rounded-xl" src={authBg} alt="" />
          </div>
          <div className="w-1/2 flex items-center">
            <form className="card-body" onSubmit={handleSubmit}>
              <h1 className=" text-2xl font-bold">Register</h1>
              <h1 className=" text-sm font-semibold ">
                Sign Up if you don't have an account
              </h1>
              <div className="form-control">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Emter phone number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="test"
                  value={secret}
                  onChange={(e) => setSecret(e.target.value)}
                  placeholder="Enter secret (any word)"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter address"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <NavLink
                    to="/login"
                    className="label-text-alt link link-hover"
                  >
                    Already a user? Login
                  </NavLink>
                </label>
              </div>
              <div className="form-control ">
                <button
                  type="submit"
                  className="btn text-white bg-[#66CAE2] hover:bg-[#60bdd4]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
