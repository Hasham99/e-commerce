import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import AdminMenu from "./AdminMenu";
import { useAuth } from "../context/auth";

const Layout = ({ children }) => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Header />
      <main className="h-[60vh]  max-w-container mx-10 px-2 py-4 ">
        <Toaster />
        {/* {auth?.user?.role === 1 ? (
          <>
            <AdminMenu />
          </>
        ) : (
          <></>
        )} */}

        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
