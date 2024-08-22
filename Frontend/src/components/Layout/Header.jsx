import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  // console.log("Header", auth);
  function handleLogout() {
    localStorage.removeItem("auth");
    const localClear = localStorage.getItem("auth");
    if (!localClear) {
      window.location.reload();
      navigate("/");
      toast.success("Logout Successful");
    }
  }
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 shadow-md md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-y-2 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/">User</NavLink>
              </li>
              <li>
                <NavLink to="/">Logout</NavLink>
              </li>
            </ul>
          </div>
          <a className=" font-medium text-xl">E-commerce</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-2 px-1 ">
            <li>
              <NavLink
                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"} `}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart (0)</NavLink>
            </li>
            {auth?.token && auth?.user ? (
              <></>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
            {auth?.token && auth?.user ? (
              <>
                <li className="px-3 py-2 capitalize text-white bg-green-500 rounded-lg">
                  {auth?.user?.fullName}
                </li>
                <li className=" text-white bg-red-500 rounded-lg">
                  <div onClick={handleLogout}>Logout</div>
                </li>
              </>
            ) : (
              <></>
            )}
            {/* <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
