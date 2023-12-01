import clsx from "clsx";
import logo from "../../assets/logo/papuan_logo.png";
import { ReactNode } from "react";

const Sidebar = (props: {children: ReactNode}) => {
  return (
    <aside id="sidebar" className="px-4 col-span-2">
      <div className="border-b border-slate-200 py-4">
        <a href="/" className="flex w-fit h-8">
          <img src={logo} alt="papuan_logo" className="w-8 h-fit mx-2" />
          <p className="text-orange-400 font-bold text-md flex items-center">
            Papuan
          </p>
        </a>
      </div>
      <div className="px-2 py-4 text-sm">
        {props.children}
      </div>
    </aside>
  );
};

export default Sidebar;
