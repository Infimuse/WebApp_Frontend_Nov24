"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaUserCircle } from "react-icons/fa";

import SignUp from "./SignUp";

import Link from "next/link";
import SignIn from "./Signin";

// Types for child component props
// interface ModalProps {
//   onClose: () => void;
// }

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white border-b p-5 md:px-20">
      {/* Left */}
      <Link
        href="/"
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src={`/assets/InfiMuse.png`}
          height={80}
          width={80}
          alt="logo"
          className="object-contain"
        />
      </Link>

      {/* Middle search */}
      <div className="flex items-center py-2"></div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <Link
          href="/pricing"
          className="hidden md:inline cursor-pointer  p-2 rounded-full hover:bg-gray-100 hover:text-[#BB2460] text-black"
        >
          Become a a
        </Link>
        <div className="relative">
          <div
            className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaBars className="h-6" />
            <FaUserCircle className="h-6" />
          </div>
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
            >
              <button
                onClick={() => {
                  setShowDropdown(false);
                  setShowSignIn(true);
                }}
                className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setShowDropdown(false);
                  setShowSignUp(true);
                }}
                className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </header>
  );
};

export default Header;
