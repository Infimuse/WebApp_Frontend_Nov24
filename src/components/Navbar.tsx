// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [scrolledBeyondBanner, setScrolledBeyondBanner] = useState(false);
//   const dropdownRef = useRef(null);
//   const pathname = usePathname();

//   // Check for authentication token
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token);
//   }, []);

//   // Handle click outside dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Scroll behavior to toggle header background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (pathname === "/Explore") {
//         setScrolledBeyondBanner(true);
//         return;
//       }

//       const bannerHeight = window.innerHeight * 0.75;
//       setScrolledBeyondBanner(window.scrollY > bannerHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pathname]);

//   // Sign out handler
//   const handleSignOut = () => {
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 z-50 w-full bg-white shadow-md transition-all duration-300 ${
//         scrolledBeyondBanner ? "bg-white" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-[1240px] mx-auto flex items-center justify-between p-5">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/assets/InfiMuse G&T.png"
//             alt="Logo"
//             width={80}
//             height={80}
//             className="object-contain"
//           />
//         </Link>

//         {/* Right Navigation */}
//         <div className="flex items-center space-x-4">
//           <Link
//             href="/communities"
//             className="flex items-center gap-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 py-2 rounded-full font-semibold"
//           >
//             <FaSearch />
//             Communities
//           </Link>
//           <Link
//             href="/pricing"
//             className="hidden md:inline-block px-4 py-2 rounded-full text-black hover:bg-gray-100 hover:text-[#BB2460] transition-colors"
//           >
//             Become a Host
//           </Link>

//           {/* Dropdown Menu */}
//           <div className="relative">
//             <button
//               onClick={() => setShowDropdown((prev) => !prev)}
//               className="flex items-center gap-2 border-2 p-2 rounded-full"
//             >
//               <FaBars color="gray"/>
//               <FaUserCircle color="gray"/>
//             </button>

//             {showDropdown && (
//               <div
//                 ref={dropdownRef}
//                 className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
//               >
//                 {isAuthenticated ? (
//                   <>
//                     <button
//                       onClick={handleSignOut}
//                       className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Sign Out
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => {
//                         setShowDropdown(false);
//                         setShowSignIn(true);
//                       }}
//                       className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Sign In
//                     </button>
//                     <button
//                       onClick={() => {
//                         setShowDropdown(false);
//                         setShowSignUp(true);
//                       }}
//                       className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Sign Up
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modals for Sign In/Sign Up */}
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
// import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // const [scrolledBeyondBanner, setScrolledBeyondBanner] =
  useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // const pathName = usePathname();

  // Check for authentication token
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll behavior to toggle header background

  // Sign out handler
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white shadow-md transition-all duration-300 `}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/InfiMuse.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4">
          <div className="relative group p-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(219,112,147,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 rounded-full transition-opacity duration-300 group-hover:opacity-100"></div>
            <Link
              href="/communities"
              className="relative flex items-center gap-1 bg-white text-black px-4 py-2 rounded-full font-semibold z-10"
            >
              <FaSearch />
              Communities
            </Link>
          </div>

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
              <FaBars color="gray" />
              <FaUserCircle color="gray" />
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
