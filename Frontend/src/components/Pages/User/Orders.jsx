import React from "react";
import Layout from "../../Layout/Layout";
import UserMenu from "../../Layout/UserMenu";

const Orders = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 max-w-screen h-full">
        <div className="col-span-2 ">
          <UserMenu />
        </div>
        <div className="col-span-10 bg-slate-100 ">Orders</div>
      </div>
    </Layout>
  );
};

export default Orders;
