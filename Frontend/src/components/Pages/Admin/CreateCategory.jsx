import React from "react";
import Layout from "../../Layout/Layout";
import AdminMenu from "../../Layout/AdminMenu";

const CreateCategory = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 max-w-screen h-full">
        <div className="col-span-2 ">
          <AdminMenu />
        </div>
        <div className="col-span-10 bg-slate-100 ">Create Category</div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
