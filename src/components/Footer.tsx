/* eslint-disable react/no-unescaped-entities */

// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-white">
      <div className="pt-5 mt-5 border-t border-gray-200 ">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            {/* Language Dropdown */}

            {/* End Language Dropdown */}

            <div className="space-x-4 text-sm ms-4">
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800  "
                href="/T&c"
              >
                Terms
              </a>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800  "
                href="/Privacy"
              >
                Privacy
              </a>
            
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="mt-3 hidden sm:flex">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="#"
                aria-label="Brand"
              >
                Infimuse
              </a>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
                © {new Date().getFullYear()} Infimuse Technologies Limited.
              </p>
            </div>

            {/* Social Brands */}
            <div className="space-x-4">
             
              
             
            </div>
            {/* End Social Brands */}
          </div>
          {/* End Col */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
