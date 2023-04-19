import clsx from "clsx";
import FilterOption from "./FilterOption";

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

const statusOptions = ["Approved", "Declined", "In progress"];
// search string
// create date
// expired date

const SearchInput = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex w-3/5">
        <input
          type="text"
          id="search-input"
          className={clsx(
            "w-full px-2 py-1 border-2 border-teal-400 rounded-md"
          )}
        />
        <input
          type="submit"
          value="Submit"
          className={clsx(
            "p-2 ml-2 rounded-md transition-all duration-300",
            "cursor-pointer border-1 text-white",
            "bg-teal-500 hover:bg-teal-700"
          )}
        />
      </form>

      <div className="w-3/5 bg-teal-100 rounded-md mt-4">
        {/* <FilterOption /> */}
        <div className="p-2 grid grid-cols-4">
          <label htmlFor="status" className="mx-2 col-span-1 flex items-center">
            Status
          </label>
          <select
            name="status"
            id="status"
            className={clsx(
              "appearance-none px-2 py-1 border-2 border-teal-400",
              "rounded-md cursor-pointer col-span-3"
            )}
          >
            {statusOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
