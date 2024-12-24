// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { FaSearch, FaBars, FaUserCircle, FaGlobe } from "react-icons/fa";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import Link from "next/link";

// import DatePickerComponent from "./DatePicker";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const dropdownRef = useRef(null);

//   // Click outside handler
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownRef]);

//   return (
//     <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-20">
//       {/* Left */}
//       <Link
//         href="/"
//         className="relative flex items-center h-10 cursor-pointer my-auto"
//       >
//         <Image
//           src={`/assets/InfiMuse G&T.png`}
//           height={80}
//           width={80}
//           alt="logo"
//           className="object-contain"
//           objectPosition="left"
//         />
//       </Link>

//       {/* Middle search */}
//       <div className="flex items-center py-2">
//         {/* <input type="text" placeholder="Start your searchJ" className="flex-grow pl-5 bg-transparent outline-none" />
//         <FaSearch className="hidden md:inline h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" /> */}
//       </div>

//       {/* Right */}
//       <div className="flex items-center justify-end space-x-4 text-gray-500">
//         <Link
//           href="/communities"
//           className=" flex gap-1 bg-rainbow-gradient p-2 cursor-pointer rounded-full text-white font-semibold"
//         >
//           <FaSearch className="h-6 cursor-pointer" />
//           Communities
//         </Link>
//         <Link
//           href="/pricing"
//           className="hidden md:inline cursor-pointer  p-2 rounded-full bg-[#12B9f3]   text-white"
//         >
//           Become a host
//         </Link>
//         {/* <FaGlobe className="h-6 cursor-pointer" /> */}
//         <div className="relative">
//           <div
//             className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer"
//             onClick={() => setShowDropdown(!showDropdown)}
//           >
//             <FaBars className="h-6" />
//             <FaUserCircle className="h-6" />
//           </div>
//           {showDropdown && (
//             <div
//               ref={dropdownRef}
//               className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
//             >
//               <button
//                 onClick={() => {
//                   setShowDropdown(false);
//                   setShowSignIn(true);
//                 }}
//                 className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => {
//                   setShowDropdown(false);
//                   setShowSignUp(true);
//                 }}
//                 className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
//       {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import SignIn from "./Signin";
import SignUp from "./SignUp";
import Link from "next/link";

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    // Add event listener for 'mousedown'
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-20">
      {/* Left */}
      <Link
        href="/"
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src={`/assets/InfiMuse G&T.png`}
          height={80}
          width={80}
          alt="logo"
          className="object-contain"
        />
      </Link>

      {/* Middle search */}
      <div className="flex items-center py-2">
        {/* Optional search input */}
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <Link
          href="/communities"
          className="flex gap-1 bg-rainbow-gradient p-2 cursor-pointer rounded-full text-white font-semibold"
        >
          <FaSearch className="h-6 cursor-pointer" />
          Communities
        </Link>
        <Link
          href="/pricing"
          className="hidden md:inline cursor-pointer p-2 rounded-full bg-[#12B9f3] text-white"
        >
          Become a host
        </Link>

        {/* Dropdown */}
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

      {/* SignIn and SignUp Modals */}
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </header>
  );
};

export default Header;
