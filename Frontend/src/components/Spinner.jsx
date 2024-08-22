import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevVal) => --prevVal);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, location, navigate, path]);

  return (
    <div className="flex flex-col max-w-screen h-[100vh] items-center justify-center s">
      <div className="loading loading-dots loading-lg"></div>
      <div className="text-sm font-medium"> Redirecting in {count} seconds</div>
    </div>
  );
};

export default Spinner;
