"use client";
import { FaSearch } from "react-icons/fa";
import CalendarPicker from "./CalendarPicker";
import FiltersDrawer from "./FiltersDrawer"

const SearchBar = () => {
  return (
    <div className=" w-full flex items-center gap-2 sm:p-2 sm:px-4 mb-2">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 shadow rounded-lg outline-none bg-gray-100"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <CalendarPicker />
      <FiltersDrawer/>
    </div>
  );
};

export default SearchBar;
