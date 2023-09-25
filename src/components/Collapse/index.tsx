import { useState } from "react";
import clsx from "clsx";
import Chevron from "../../assets/icons/Chevron";

const Collapse = () => {
  const [isExpand, setExpand] = useState(false);

  return (
    <section>
      <button
        className="font-bold w-full flex items-center justify-between group"
        onClick={() => setExpand(!isExpand)}
      >
        Generate Cat
        <Chevron
          className={clsx(
            "w-5 h-5 duration-300 text-slate-400 group-hover:text-slate-700",
            isExpand && "rotate-90"
          )}
        />
      </button>
      {isExpand && (
        <a
          href="/generate-cat"
          className="block w-full p-2 hover:text-orange-400 duration-300"
        >
          Random Cat
        </a>
      )}
    </section>
  );
};

export default Collapse;
