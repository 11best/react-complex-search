import clsx from "clsx";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="h-16 flex items-center justify-end">
      <div className="flex gap-4">
        <div
          title="nothing here just mockup"
          className={clsx(
            "w-8 h-8 bg-slate-300 hover:bg-orange-400 rounded-full",
            "cursor-pointer duration-300"
          )}
        ></div>
        <div
          title="nothing here just mockup"
          className={clsx(
            "w-8 h-8 bg-slate-300 hover:bg-orange-400 rounded-full",
            "cursor-pointer duration-300"
          )}
        ></div>
      </div>
    </header>
  );
};

export default Header;
