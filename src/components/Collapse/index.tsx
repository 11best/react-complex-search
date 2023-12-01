import { useState } from "react";
import clsx from "clsx";
import Chevron from "../../assets/icons/Chevron";

const Collapse = (props: {
  name: string;
  children: [{ name: string; path: string }];
}) => {
  const [isExpand, setExpand] = useState(false);

  return (
    <section>
      <button
        className="font-bold w-full flex items-center justify-between group"
        onClick={() => setExpand(!isExpand)}
      >
        {props.name}
        <Chevron
          className={clsx(
            "w-5 h-5 duration-300 text-slate-400 group-hover:text-slate-700",
            isExpand && "rotate-90"
          )}
        />
      </button>
      {props.children.map(
        (c) =>
          isExpand && (
            <a
              key={c.path}
              href={"/generate-cat" + c.path}
              className="block w-full p-2 hover:text-orange-400 duration-300"
            >
              {c.name}
            </a>
          )
      )}
    </section>
  );
};

export default Collapse;
