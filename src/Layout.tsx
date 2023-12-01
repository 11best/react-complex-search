import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Collapse from "./components/Collapse";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-7">
      <Sidebar>
        <Collapse
          name="Generate Cat"
          children={[{ name: "Random Cat", path: "/random-cat" }]}
        />
      </Sidebar>
      <div className="px-4 col-span-5">
        <Header></Header>
        <main className="m-2">{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
