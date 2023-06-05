import clsx from "clsx";
import { useState } from "react";

type HeaderItem = {
  name: string;
  url: string;
};

const headerItems: HeaderItem[] = [
  {
    name: "page 1",
    url: "",
  },
  {
    name: "page 2",
    url: "",
  },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="h-12 bg-red-300">
      <div className="hidden sm:flex justify-between items-center">
        <div className=" bg-yellow-200 w-20 h-12 flex items-center justify-center">
          Title
        </div>
        <div>
          {headerItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="font-semibold hover:text-amber-500 mx-4"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="sm:hidden absolute right-0">
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-amber-200 p-2 m-1 hover:bg-amber-300 rounded"
        >
          ham
        </button>
        <div
          className={clsx(
            expanded ? "absolute right-0 bg-amber-200 w-64" : "hidden"
          )}
        >
          <div className="flex flex-col">
            {headerItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="font-semibold hover:text-amber-500 my-2 ml-8 w-fit"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
