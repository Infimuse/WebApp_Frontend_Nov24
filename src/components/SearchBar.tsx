import { FaSearch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";

const SearchBar = () => {
  return (
    <div className="w-full flex items-center gap-2 px-2 sm:px-4 mb-2">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 shadow rounded-lg outline-none bg-gray-100"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <button className="p-3 shadow text-gray-600 rounded-md bg-gray-100 h-full flex items-center justify-center">
        <LuCalendar />
      </button>
      <button className="p-3 shadow text-gray-600 rounded-md bg-gray-100 h-full flex items-center justify-center">
        <LuSettings2 />
      </button>
    </div>
  );
};

export default SearchBar;
