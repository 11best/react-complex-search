import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto flex">
      <Sidebar></Sidebar>
      <div className="px-4">
        <Header></Header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
