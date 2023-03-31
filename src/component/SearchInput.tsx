import clsx from "clsx";

type State = {
  searchObj: any;
  searchString: string;
};

type Action =
  | { type: "search_key_changed" }
  | { type: "search_value_changed" }
  | { type: "submit" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "search_key_changed":
      return {
        ...state,
        searchObj: {
          kk: "value test",
        },
      };

    default:
      return state;
  }
};

const SearchInput = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-input"
          className="px-2 py-1 border-2 border-teal-400 rounded-md"
        />
        <input
          type="submit"
          value="Submit"
          className={clsx(
            "p-2 ml-2 text-sm bg-teal-100 border-teal-200 rounded-md",
            "cursor-pointer border-1 text-slate-700",
            "hover:bg-teal-500 hover:text-white"
          )}
        />
      </form>
    </div>
  );
};

export default SearchInput;
