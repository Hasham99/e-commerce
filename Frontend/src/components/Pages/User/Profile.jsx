import React from "react";
import UserMenu from "../../Layout/UserMenu";
import Layout from "../../Layout/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 max-w-screen h-full">
        <div className="col-span-2 ">
          <UserMenu />
        </div>
        <div className="col-span-10 bg-slate-100 ">Profile</div>
      </div>
    </Layout>
  );
};

export default Profile;
