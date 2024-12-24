// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
// import SignIn from "./Signin";
// import SignUp from "./SignUp";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
//   const dropdownRef = useRef(null);
//   const [scrolledBeyondBanner, setScrolledBeyondBanner] = useState(false);
//   const pathname = usePathname();

//   // Check authentication status on component mount
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

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

//   const handleSignOut = () => {
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };
//   useEffect(() => {
//     const handleScroll = () => {
//       if (pathname === "/Explore") {
//         setScrolledBeyondBanner(true);
//         return;
//       }
//       const bannerElement = document.querySelector(".banner");
//       const bannerHeight = window.innerHeight * 0.75;
//       const scrollPosition = window.scrollY;
//       // Change header background only after scrolling past the banner
//       if (scrollPosition > bannerHeight) {
//         setScrolledBeyondBanner(true); // Opaque background
//       } else {
//         setScrolledBeyondBanner(false); // Transparent background
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

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
//     // <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-20">
//     <div className="bg-white w-screen">
//       <header
//         className={`fixed top-0 left-0 z-50 w-full grid grid-cols-3 max-w-[1280px] mx-auto  shadow-md p-5 md:px-20 text-white transition-all duration-300 ${
//           scrolledBeyondBanner ? "bg-white" : "bg-transparent"
//         }`}
//       >
//         {/* Left */}
//         <Link
//           href="/"
//           className="relative flex items-center h-10 cursor-pointer my-auto"
//         >
//           <Image
//             src={`/assets/InfiMuse G&T.png`}
//             height={80}
//             width={80}
//             alt="logo"
//            
//             objectPosition="left"
// className="object-contain"
//           />
//         </Link>

//         {/* Middle search */}
//         <div className="flex items-center py-2">
//           {/* <input type="text" placeholder="Start your searchJ" className="flex-grow pl-5 bg-transparent outline-none" />
//         <FaSearch className="hidden md:inline h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" /> */}
//         </div>

//         {/* Right */}
//         <div className="flex items-center justify-end space-x-4 text-gray-500">
//           {/* Communities and Become a Host links */}
//           <Link
//             href="/communities"
//             className="flex gap-1 bg-rainbow-gradient p-2 cursor-pointer rounded-full text-white font-semibold"
//           >
//             <FaSearch className="h-6 cursor-pointer" />
//             Communities
//           </Link>
//           {/* <Link href="/communities" class=" flex gap-1 bg-rainbow-gradient p-2 cursor-pointer rounded-full text-white font-semibold">
//         <FaSearch className="h-6 cursor-pointer" />
//           Communities
//         </Link> */}
//           <Link
//             href="/pricing"
//             className="hidden md:inline cursor-pointer  p-2 rounded-full hover:bg-gray-100 hover:text-[#BB2460] text-black"
//           >
//             Become a host
//           </Link>
//           {/* <FaGlobe className="h-6 cursor-pointer" /> */}
//           <div className="relative">
//             <div
//               className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer"
//               onClick={() => setShowDropdown(!showDropdown)}
//             >
//               <FaBars className="h-6" />
//               <FaUserCircle className="h-6" />
//             </div>
//             {showDropdown && (
//               <div
//                 ref={dropdownRef}
//                 className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
//               >
//                 <button
//                   onClick={() => {
//                     setShowDropdown(false);
//                     setShowSignIn(true);
//                   }}
//                   className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   Sign In
//                 </button>
//                 <button
//                   onClick={() => {
//                     setShowDropdown(false);
//                     setShowSignUp(true);
//                   }}
//                   className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
//         {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
//       </header>
//     </div>
//   );
// };

// export default Header;

"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scrolledBeyondBanner, setScrolledBeyondBanner] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Check for authentication token
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll behavior to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/Explore") {
        setScrolledBeyondBanner(true);
        return;
      }

      const bannerHeight = window.innerHeight * 0.75;
      setScrolledBeyondBanner(window.scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Sign out handler
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white shadow-md transition-all duration-300 ${
        scrolledBeyondBanner ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/InfiMuse G&T.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4">
          <Link
            href="/communities"
            className="flex items-center gap-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 py-2 rounded-full font-semibold"
          >
            <FaSearch />
            Communities
          </Link>
          <Link
            href="/pricing"
            className="hidden md:inline-block px-4 py-2 rounded-full text-black hover:bg-gray-100 hover:text-[#BB2460] transition-colors"
          >
            Become a Host
          </Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center gap-2 border-2 p-2 rounded-full"
            >
              <FaBars color="gray"/>
              <FaUserCircle color="gray"/>
            </button>

            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
              >
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={handleSignOut}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        setShowSignIn(true);
                      }}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        setShowSignUp(true);
                      }}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals for Sign In/Sign Up */}
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </header>
  );
};

export default Header;

