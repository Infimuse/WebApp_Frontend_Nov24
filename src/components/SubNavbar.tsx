"use client";

import React, { useState, useRef } from "react";
import {
  FaFootballBall,
  FaHiking,
  FaBook,
  FaPaintBrush,
  FaLaptopCode,
} from "react-icons/fa";
import { GiCookingPot, GiStairsGoal } from "react-icons/gi";
import { MdPsychology } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import Link from "next/link";

const categories = [
  {
    name: "Sports",
    icon: <FaFootballBall className="text-green-500" />,
    subcategories: ["Football", "Basketball", "Tennis", "Swimming"],
  },
  {
    name: "Life Skills",
    icon: <GiCookingPot className="text-orange-500" />,
    subcategories: ["Cooking", "Financial Literacy", "Time Management"],
  },
  {
    name: "Adventure",
    icon: <FaHiking className="text-brown-500" />,
    subcategories: ["Hiking", "Camping", "Rock Climbing"],
  },
  {
    name: "Educational",
    icon: <FaBook className="text-blue-500" />,
    subcategories: ["Math", "Science", "History", "Languages"],
  },
  {
    name: "Therapy",
    icon: <MdPsychology className="text-purple-500" />,
    subcategories: [
      "Physical Therapy",
      "Occupational Therapy",
      "Mental Health",
    ],
  },
  {
    name: "Art",
    icon: <FaPaintBrush className="text-pink-500" />,
    subcategories: ["Drawing", "Painting", "Sculpture"],
  },
  {
    name: "Technology",
    icon: <FaLaptopCode className="text-gray-500" />,
    subcategories: ["Coding", "Robotics", "AI"],
  },
  {
    name: "Crafts",
    icon: <GiStairsGoal className="text-teal-700" />,
    subcategories: ["Knitting", "Sewing", "Woodworking"],
  },
];

const SubNavbar = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeSubcategories, setActiveSubcategories] = useState<Set<string>>(
    new Set()
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory((prev) =>
      prev === categoryName ? null : categoryName
    );
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setActiveSubcategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(subcategory)) {
        newSet.delete(subcategory);
      } else {
        newSet.add(subcategory);
      }
      return newSet;
    });
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const selectedSubcategories =
    categories.find((c) => c.name === selectedCategory)?.subcategories || [];

  return (
    <div className="bg-white py-4 sticky top-5 w-full z-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
        <div
          className="relative flex items-center justify-center space-x-8 overflow-x-auto hide-scroll-bar p-2"
          ref={containerRef}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className={`relative flex flex-col items-center cursor-pointer transition duration-150 ease-in-out ${
                selectedCategory === category.name
                  ? "text-[#BB2460]"
                  : "text-gray-800"
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
        <div
          className="absolute left-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
          onClick={scrollLeft}
        >
          <IoIosArrowBack className="text-gray-800 text-2xl cursor-pointer" />
        </div>
        <div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
          onClick={scrollRight}
        >
          <IoIosArrowForward className="text-gray-800 text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Subcategories */}
      {selectedSubcategories.length > 0 && (
        <div className="ml-8 mt-4">
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {selectedSubcategories.map((subcategory) => (
              <span
                key={subcategory}
                onClick={() => handleSubcategoryClick(subcategory)}
                className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium ${
                  activeSubcategories.has(subcategory)
                    ? "bg-[#BB2460] text-white"
                    : "bg-[#12B9F3] text-white"
                }`}
              >
                {subcategory}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubNavbar;
