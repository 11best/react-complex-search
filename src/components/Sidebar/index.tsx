import clsx from "clsx";
import logo from "../../assets/logo/papuan_logo.png";

const Sidebar = () => {
  return (
    <div className="w-60 px-4">
      <div className="flex border-b border-slate-200">
        <img src={logo} alt="papuan_logo" className="w-8 h-fit mx-2 my-4" />
        <div
          className={clsx(
            "text-orange-300 font-bold text-lg h-16 flex items-center"
          )}
        >
          Papuan
        </div>
      </div>

      <div>sidebar</div>
      <div>sidebar</div>
      <div>sidebar</div>
      <div>sidebar</div>
    </div>
  );
};

export default Sidebar;
