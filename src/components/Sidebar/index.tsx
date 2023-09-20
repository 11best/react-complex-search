import clsx from "clsx";

const Sidebar = () => {
  return (
    <div className="w-60 px-4">
      <div
        className={clsx(
          "text-orange-300 font-bold text-lg h-16 flex items-center",
          "border-b border-slate-200"
        )}
      >
        Title
      </div>
      <div>sidebar</div>
      <div>sidebar</div>
      <div>sidebar</div>
      <div>sidebar</div>
    </div>
  );
};

export default Sidebar;
