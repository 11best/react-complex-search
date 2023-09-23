import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-7">
      <Sidebar></Sidebar>
      <div className="px-4 col-span-5">
        <Header></Header>
        <main className="m-2">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
