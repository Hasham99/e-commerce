import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div>HomePage</div>
      <div>{JSON.stringify(auth, null, 4)}</div>
    </Layout>
  );
};

export default HomePage;
