// components/SubNavbar2.js
"use client";
import React, { useState } from "react";
import Link from "next/link";

const categories = [
  { name: "All", path: "/" },
  { name: "Experiences", path: "/activities" },
  { name: "Activities", path: "/learning-experiences" },
  { name: "Hangouts", path: "/sipping-hangouts" },
  { name: "For Kids ", path: "/Kids-activities" },
  { name: "Workshops", path: "/workshops" },
  // { name: 'Packages', path: '/packages' }
];

const SubNavbar2 = () => {
  // State to track the currently active category
  const [activeCategory, setActiveCategory] = useState(categories[0].path);

  return (
    <div className="bg-white py-2 border-b">
      <div className="mx-auto w-full">
        <div className="flex gap-2 z-10 items-center py-2 px-4 w-full md:justify-center justify-start overflow-x-auto whitespace-nowrap sm:gap-1 ">
          {categories.map((category, index) => (
            <Link key={index} href={category.path} passHref>
              <div
                className={`flex items-center cursor-pointer px-3 py-2 rounded-full ${
                  activeCategory === category.path
                    ? "bg-[#18bdfa] text-white"
                    : "text-black hover:bg-[#18bdfa] hover:text-white"
                }`}
                onClick={() => setActiveCategory(category.path)}
              >
                <a className="text-sm font-medium">{category.name}</a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar2;
