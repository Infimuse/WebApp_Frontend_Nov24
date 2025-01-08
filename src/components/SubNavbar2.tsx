// components/SubNavbar2.js
"use client";
import React, { useState } from "react";

const categories = [
  { name: "All", path: "/" },
  { name: "Groups", path: "/groups" },
  { name: "Workshops", path: "/workshops" },
  { name: "For Kids ", path: "/Kids-activities" },
  { name: "Today", path: "/today" },
  { name: "Tomorrow", path: "/tomorrow" },
  { name: "Weekend", path: "/weekend" },
];

const SubNavbar2 = () => {
  // State to track the currently active category
  const [activeCategory, setActiveCategory] = useState([categories[0].path]);

  return (
    <div className="bg-white ">
      <div className="mx-auto w-full hide-scroll-bar">
        <div className="flex gap-2 z-10 items-center py-2 px-4 w-full md:justify-center justify-start overflow-x-auto whitespace-nowrap sm:gap-1  hide-scrollbar">
          {categories.map((category, index) => (
            <div key={index} >
              <div
                className={`flex items-center cursor-pointer px-2 sm:px-3 py-2 rounded-full ${
                  activeCategory.includes(category.path)
                    ? "bg-[#18bdfa] text-white"
                    : "text-black hover:bg-[#18bdfa] hover:text-white"
                }`}
                onClick={() =>
                  setActiveCategory([...activeCategory, category.path])
                }
              >
                <a className="text-xs sm:text-sm font-medium">{category.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar2;
