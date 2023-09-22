import clsx from "clsx";
import logo from "../../assets/logo/papuan_logo.png";

const Sidebar = () => {
  return (
    <div className="w-60 px-4">
      <div className="border-b border-slate-200">
        <a href="/" className="flex w-fit">
          <img src={logo} alt="papuan_logo" className="w-8 h-fit mx-2 my-4" />
          <p className="text-orange-300 font-bold text-lg h-16 flex items-center">
            Papuan
          </p>
        </a>
      </div>

      <div>sidebar</div>
      <div>sidebar</div>
      <div>sidebar</div>
      <div>sidebar</div>
    </div>
  );
};

export default Sidebar;
