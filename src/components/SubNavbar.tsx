"use client";

import React, { useRef } from "react";
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
import Link from "next/link";

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
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <Link href="/Explore" className="bg-white py-1  w-full">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex items-center justify-center space-x-8 overflow-x-auto hide-scroll-bar px-5"
          ref={containerRef}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className={`relative flex flex-col items-center cursor-pointer transition duration-150 ease-in-out`}
            >
              <span className="text-sm sm:text-2xl mb-2">{category.icon}</span>
              <span className="text-xs sm:text-sm font-medium">
                {category.name}
              </span>
            </div>
          ))}
        </div>
        <div
          className="absolute left-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
          onClick={scrollLeft}
        >
          <IoIosArrowBack className="text-gray-800 text-xl cursor-pointer" />
        </div>
        <div
          className="absolute right-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
          onClick={scrollRight}
        >
          <IoIosArrowForward className="text-gray-800 text-xl cursor-pointer" />
        </div>
      </div>
    </Link>
  );
};

export default SubNavbar;
