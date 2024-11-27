"use client";
import React, { useState, useEffect } from "react";
import { MdHome, MdOutlineSchool, MdMoreHoriz, MdPostAdd } from "react-icons/md";
import { FaCalendarDays, FaUserPlus } from "react-icons/fa6";
import { PiChalkboardTeacher } from "react-icons/pi";
import { CiCircleList } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import SigninUp from "../SignUp"; // Import the SigninUp component here

export default function SideBar() {
  const [isDayExperiencesOpen, setIsDayExperiencesOpen] = useState(false);
  const [isMyCommunitiesOpen, setIsMyCommunitiesOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsSignedIn(true);
    }
  }, []);

  if (showSignIn) {
    return <SigninUp />;
  }

  return (
    <div className="flex md:flex-col flex-row justify-between px-3 bg-white text-black h-full w-80">
      <div className="flex-row flex items-center md:items-start md:flex-col overflow-x-auto w-full">
        <nav className="mb-5 ">
          <ul className="flex w-screen md:w-full flex-row md:flex-col items-center md:items-start">
            <Link href="/">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdHome />
                <li className="ml-4 sidebar-text-bold text-xs font-bold">Home</li>
              </div>
            </Link>
            <div>
              <div
                className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-4 py-3 transform transition-colors duration-200 cursor-pointer"
                onClick={() => setIsDayExperiencesOpen(!isDayExperiencesOpen)}
              >
                <FaCalendarDays />
                <li className="font-regular ml-4">
                  <Link href="/Explore" className="text-xs">
                    Discover Groups
                  </Link>
                </li>
              </div>
            </div>
            <Link href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-4 py-3 transform transition-colors duration-200">
                <PiChalkboardTeacher />
                <li className="ml-4 font-regular text-xs">Messages</li>
              </div>
            </Link>
            <div>
              <div
                className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-4 py-3 transform transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMyCommunitiesOpen(!isMyCommunitiesOpen)}
              >
                <IoPeople />
                <li className="ml-4 font-regular flex text-xs">My Communities</li>
              </div>
              {isMyCommunitiesOpen && (
                <ul className="pl-12 mt-2">
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">Biking</li>
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">Wine Tasting</li>
                </ul>
              )}
            </div>
            <Link href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-4 py-3 transform transition-colors duration-200">
                <CgProfile />
                <li className="ml-4 font-regular">Profile</li>
              </div>
            </Link>
             <Link href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-4 py-3 transform transition-colors duration-200">
                <MdPostAdd />
                <li className="ml-4 font-regular">Post</li>
              </div>
            </Link>
          </ul>
        </nav>
        {isSignedIn ? (
          <button className="bg-[#12B9f3] text-white rounded-full p-2 shadow-lg w-full transform transition-colors duration-500 hover:bg-primary-button_hover font-bold sidebar-text-bold">
            Post
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white hidden lg:flex font-bold py-1 px-8 rounded text-sm mt-6"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}