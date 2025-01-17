// // components/SubNavbar2.js
// "use client";
// import React, { useState } from "react";

// const categories = [
//   { name: "Upcoming", path: "/" },
//   { name: "Groups", path: "/groups" },
//   { name: "Workshops", path: "/workshops" },
//   { name: "For Kids ", path: "/Kids-activities" },
//   { name: "Today", path: "/today" },
//   { name: "Tomorrow", path: "/tomorrow" },
//   { name: "Weekend", path: "/weekend" },
// ];

// const SubNavbar2 = () => {
//   // State to track the currently active category
//   const [activeCategory, setActiveCategory] = useState([categories[0].path]);

//   return (
//     <div className="bg-white ">
//       <div className="mx-auto w-full hide-scroll-bar">
//         <div className="flex gap-2 z-10 items-center py-2 px-4 w-full md:justify-center justify-start overflow-x-auto whitespace-nowrap sm:gap-1  hide-scrollbar">
//           {categories.map((category, index) => (
//             <div key={index} >
//               <div
//                 className={`flex items-center cursor-pointer px-2 sm:px-3 py-2 rounded-full ${
//                   activeCategory.includes(category.path)
//                     ? "bg-[#18bdfa] text-white"
//                     : "text-black hover:bg-[#18bdfa] hover:text-white"
//                 }`}
//                 onClick={() =>
//                   setActiveCategory([...activeCategory, category.path])
//                 }
//               >
//                 <a className="text-xs sm:text-sm font-medium">{category.name}</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubNavbar2;


"use client";
import React, { useState } from "react";

const categories = [
  { name: "Upcoming", path: "/" },
  { name: "Groups", path: "/groups" },
  { name: "Workshops", path: "/workshops" },
  { name: "For Kids", path: "/Kids-activities" },
  { name: "Today", path: "/today" },
  { name: "Tomorrow", path: "/tomorrow" },
  { name: "Weekend", path: "/weekend" },
];

const SubNavbar2 = () => {
  // State to track the currently active categories
  const [activeCategory, setActiveCategory] = useState<string[]>([categories[0].path]); // First item selected by default

  const toggleCategory = (path: string) => {
    if (path === categories[0].path && activeCategory.includes(path)) {
      // Reset selection when clicking the first item
      setActiveCategory([]);
    } else if (activeCategory.includes(path)) {
      // Remove the clicked category
      setActiveCategory((prev) => prev.filter((category) => category !== path));
    } else {
      // Add the clicked category
      setActiveCategory((prev) =>
        path === categories[0].path ? [path] : [...prev, path]
      );
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto w-full hide-scroll-bar">
        <div className="flex gap-2 z-10 items-center py-2 px-4 w-full md:justify-center justify-start overflow-x-auto whitespace-nowrap sm:gap-1 hide-scrollbar">
          {categories.map((category, index) => (
            <div key={index}>
              <div
                className={`flex items-center cursor-pointer px-2 sm:px-3 py-2 rounded-full ${
                  activeCategory.includes(category.path)
                    ? "bg-[#18bdfa] text-white"
                    : "text-blac"
                }`}
                onClick={() => toggleCategory(category.path)}
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
