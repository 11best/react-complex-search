import clsx from "clsx";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="h-16 flex items-center justify-end">
      <div className="flex gap-4">
        <button
          title="nothing here just mockup"
          className="px-2 py-1 border border-slate-300 rounded-md text-slate-700"
        >
          butt
        </button>
        <div
          title="nothing here just mockup"
          className={clsx(
            "w-8 h-8 bg-slate-300 hover:bg-orange-400 rounded-full",
            "cursor-pointer"
          )}
        ></div>
      </div>
    </header>
  );
};

export default Header;
