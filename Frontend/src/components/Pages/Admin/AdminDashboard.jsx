import React from "react";
import Layout from "../../Layout/Layout";
import AdminMenu from "../../Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-2 ">
          <AdminMenu />
        </div>
        <div className="col-span-10 bg-white shadow-lg w-fit ml-4 px-6 py-2 h-fit rounded-lg space-y-2">
          <h1 className="text-2xl font-bold">Admin Details</h1>
          <h1 className="text-xl">Username : {auth?.user?.username}</h1>
          <h1 className="text-xl">
            Name : <span className=" capitalize">{auth?.user?.fullName}</span>
          </h1>
          <h1 className="text-xl">Email : {auth?.user?.email}</h1>
          <h1 className="text-xl ">Phone # : {auth?.user?.phoneNo}</h1>
          <h1 className="text-xl ">Address : {auth?.user?.address}</h1>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
