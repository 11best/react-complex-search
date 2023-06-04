import React from "react";
import Header from "./components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
