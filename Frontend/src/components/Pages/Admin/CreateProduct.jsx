import React from "react";
import AdminMenu from "../../Layout/AdminMenu";
import Layout from "../../Layout/Layout";

const CreateProduct = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 max-w-screen h-full">
        <div className="col-span-2 ">
          <AdminMenu />
        </div>
        <div className="col-span-10 bg-slate-100 ">Create Product</div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
