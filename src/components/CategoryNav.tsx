




// // "use client";
// // import React, { useState, useRef } from "react";
// // import {
// //   FaFootballBall,
// //   FaHiking,
// //   FaBook,
// //   FaPaintBrush,
// //   FaLaptopCode,
// // } from "react-icons/fa";
// // import { GiCookingPot, GiStairsGoal } from "react-icons/gi";
// // import { MdPsychology } from "react-icons/md";
// // import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// // const categories = [
// //   {
// //     name: "Sports",
// //     icon: <FaFootballBall className="text-green-500" />,
// //     subcategories: ["Football", "Basketball", "Tennis", "Swimming"],
// //   },
// //   {
// //     name: "Life Skills",
// //     icon: <GiCookingPot className="text-orange-500" />,
// //     subcategories: ["Cooking", "Financial Literacy", "Time Management"],
// //   },
// //   {
// //     name: "Adventure",
// //     icon: <FaHiking className="text-brown-500" />,
// //     subcategories: ["Hiking", "Camping", "Rock Climbing"],
// //   },
// //   {
// //     name: "Educational",
// //     icon: <FaBook className="text-blue-500" />,
// //     subcategories: ["Math", "Science", "History", "Languages"],
// //   },
// //   {
// //     name: "Therapy",
// //     icon: <MdPsychology className="text-purple-500" />,
// //     subcategories: [
// //       "Physical Therapy",
// //       "Occupational Therapy",
// //       "Mental Health",
// //     ],
// //   },
// //   {
// //     name: "Art",
// //     icon: <FaPaintBrush className="text-pink-500" />,
// //     subcategories: ["Drawing", "Painting", "Sculpture"],
// //   },
// //   {
// //     name: "Technology",
// //     icon: <FaLaptopCode className="text-gray-500" />,
// //     subcategories: ["Coding", "Robotics", "AI"],
// //   },
// //   {
// //     name: "Crafts",
// //     icon: <GiStairsGoal className="text-teal-700" />,
// //     subcategories: ["Knitting", "Sewing", "Woodworking"],
// //   },
// // ];

// // const CategoryNav = () => {
// //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
// //   const [selectedSubcategories, setSelectedSubcategories] = useState<{
// //     [key: string]: Set<string>;
// //   }>({});
// //   const containerRef = useRef<HTMLDivElement | null>(null);

// //   const handleCategoryClick = (categoryName: string) => {
// //     setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
// //   };

// //   const handleSubcategoryClick = (categoryName: string, subcategory: string) => {
// //     setSelectedSubcategories((prev) => {
// //       const newState = { ...prev };
// //       if (!newState[categoryName]) {
// //         newState[categoryName] = new Set();
// //       }

// //       if (newState[categoryName].has(subcategory)) {
// //         newState[categoryName].delete(subcategory); // Deselect if already selected
// //       } else {
// //         newState[categoryName].add(subcategory); // Select if not selected
// //       }

// //       return newState;
// //     });
// //   };

// //   const scrollLeft = () => {
// //     containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
// //   };

// //   const scrollRight = () => {
// //     containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
// //   };

// //   const activeSubcategories =
// //     categories.find((c) => c.name === selectedCategory)?.subcategories || [];

// //   return (
// //     <div className="bg-white py-1 w-full">
// //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div
// //           className="relative flex items-center justify-center space-x-8 overflow-x-auto hide-scroll-bar px-5"
// //           ref={containerRef}
// //         >
// //           {categories.map((category) => {
// //             const hasSelectedSubcategories =
// //               selectedSubcategories[category.name]?.size > 0;

// //             return (
// //               <div
// //                 key={category.name}
// //                 className={`relative flex flex-col items-center cursor-pointer transition duration-150 ease-in-out ${
// //                   selectedCategory === category.name || hasSelectedSubcategories
// //                     ? "text-[#BB2460]"
// //                     : "text-gray-800"
// //                 }`}
// //                 onClick={() => handleCategoryClick(category.name)}
// //               >
// //                 <span className="text-sm sm:text-2xl mb-2">{category.icon}</span>
// //                 <span className="text-xs sm:text-sm font-medium">
// //                   {category.name}
// //                 </span>
// //               </div>
// //             );
// //           })}
// //         </div>
// //         <div
// //           className="absolute left-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
// //           onClick={scrollLeft}
// //         >
// //           <IoIosArrowBack className="text-gray-800 text-xl cursor-pointer" />
// //         </div>
// //         <div
// //           className="absolute right-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
// //           onClick={scrollRight}
// //         >
// //           <IoIosArrowForward className="text-gray-800 text-xl cursor-pointer" />
// //         </div>
// //       </div>

// //       {/* Subcategories */}
// //       <div className="ml-8">
// //         {activeSubcategories.length > 0 && (
// //           <div className="flex flex-wrap gap-2 mb-4 justify-center">
// //             {activeSubcategories.map((subcategory) => (
// //               <span
// //                 key={subcategory}
// //                 onClick={() =>
// //                   handleSubcategoryClick(selectedCategory!, subcategory)
// //                 }
// //                 className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium ${
// //                   selectedSubcategories[selectedCategory!]?.has(subcategory)
// //                     ? "bg-[#BB2460] text-white"
// //                     : "bg-[#12B9F3] text-white"
// //                 }`}
// //               >
// //                 {subcategory}
// //               </span>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryNav;

// "use client";
// import React, { useState, useRef } from "react";
// import {
//   FaFootballBall,
//   FaHiking,
//   FaBook,
//   FaPaintBrush,
//   FaLaptopCode,
// } from "react-icons/fa";
// import { GiCookingPot, GiStairsGoal } from "react-icons/gi";
// import { MdPsychology } from "react-icons/md";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// const categories = [
//   {
//     name: "Sports",
//     icon: <FaFootballBall className="text-green-500" />,
//     subcategories: ["Football", "Basketball", "Tennis", "Swimming"],
//   },
//   {
//     name: "Life Skills",
//     icon: <GiCookingPot className="text-orange-500" />,
//     subcategories: ["Cooking", "Financial Literacy", "Time Management"],
//   },
//   {
//     name: "Adventure",
//     icon: <FaHiking className="text-brown-500" />,
//     subcategories: ["Hiking", "Camping", "Rock Climbing"],
//   },
//   {
//     name: "Educational",
//     icon: <FaBook className="text-blue-500" />,
//     subcategories: ["Math", "Science", "History", "Languages"],
//   },
//   {
//     name: "Therapy",
//     icon: <MdPsychology className="text-purple-500" />,
//     subcategories: [
//       "Physical Therapy",
//       "Occupational Therapy",
//       "Mental Health",
//     ],
//   },
//   {
//     name: "Art",
//     icon: <FaPaintBrush className="text-pink-500" />,
//     subcategories: ["Drawing", "Painting", "Sculpture"],
//   },
//   {
//     name: "Technology",
//     icon: <FaLaptopCode className="text-gray-500" />,
//     subcategories: ["Coding", "Robotics", "AI"],
//   },
//   {
//     name: "Crafts",
//     icon: <GiStairsGoal className="text-teal-700" />,
//     subcategories: ["Knitting", "Sewing", "Woodworking"],
//   },
// ];

// const CategoryNav = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedSubcategories, setSelectedSubcategories] = useState<{
//     [key: string]: Set<string>;
//   }>({});
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   // Toggle category selection
//   const handleCategoryClick = (categoryName: string) => {
//     setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
//   };

//   // Toggle subcategory selection
//   const handleSubcategoryClick = (categoryName: string, subcategory: string) => {
//     setSelectedSubcategories((prev) => {
//       const newState = { ...prev };

//       if (!newState[categoryName]) {
//         newState[categoryName] = new Set();
//       }

//       if (newState[categoryName].has(subcategory)) {
//         newState[categoryName].delete(subcategory); // Deselect if already selected
//       } else {
//         newState[categoryName].add(subcategory); // Select if not selected
//       }

//       return newState;
//     });
//   };

//   // Scroll handlers
//   const scrollLeft = () => {
//     containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
//   };

//   // Get active subcategories for the selected category
//   const activeSubcategories =
//     categories.find((c) => c.name === selectedCategory)?.subcategories || [];

//   return (
//     <div className="bg-white py-1 w-full">
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="relative flex items-center justify-center space-x-8 overflow-x-auto hide-scroll-bar px-5"
//           ref={containerRef}
//         >
//           {categories.map((category) => {
//             const hasSelectedSubcategories =
//               selectedSubcategories[category.name]?.size > 0;

//             return (
//               <div
//                 key={category.name}
//                 className={`relative flex flex-col items-center cursor-pointer transition duration-150 ease-in-out ${
//                   selectedCategory === category.name || hasSelectedSubcategories
//                     ? "text-[#BB2460]"
//                     : "text-gray-800"
//                 }`}
//                 onClick={() => handleCategoryClick(category.name)}
//               >
//                 <span className="text-sm sm:text-2xl mb-2">{category.icon}</span>
//                 <span className="text-xs sm:text-sm font-medium">
//                   {category.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//         <div
//           className="absolute left-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
//           onClick={scrollLeft}
//         >
//           <IoIosArrowBack className="text-gray-800 text-xl cursor-pointer" />
//         </div>
//         <div
//           className="absolute right-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
//           onClick={scrollRight}
//         >
//           <IoIosArrowForward className="text-gray-800 text-xl cursor-pointer" />
//         </div>
//       </div>

//       {/* Subcategories */}
//       <div className="ml-8">
//         {activeSubcategories.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-4 justify-center">
//             {activeSubcategories.map((subcategory) => (
//               <span
//                 key={subcategory}
//                 onClick={() =>
//                   handleSubcategoryClick(selectedCategory!, subcategory)
//                 }
//                 className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium ${
//                   selectedSubcategories[selectedCategory!]?.has(subcategory)
//                     ? "bg-[#BB2460] text-white"
//                     : "bg-[#12B9F3] text-white"
//                 }`}
//               >
//                 {subcategory}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryNav;

// "use client";
// import React, { useState, useRef } from "react";
// import {
//   FaFootballBall,
//   FaHiking,
//   FaBook,
//   FaPaintBrush,
//   FaLaptopCode,
// } from "react-icons/fa";
// import { GiCookingPot, GiStairsGoal } from "react-icons/gi";
// import { MdPsychology } from "react-icons/md";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// const categories = [
//   {
//     name: "Sports",
//     icon: <FaFootballBall className="text-green-500" />,
//     subcategories: ["Football", "Basketball", "Tennis", "Swimming"],
//   },
//   {
//     name: "Life Skills",
//     icon: <GiCookingPot className="text-orange-500" />,
//     subcategories: ["Cooking", "Financial Literacy", "Time Management"],
//   },
//   {
//     name: "Adventure",
//     icon: <FaHiking className="text-brown-500" />,
//     subcategories: ["Hiking", "Camping", "Rock Climbing"],
//   },
//   {
//     name: "Educational",
//     icon: <FaBook className="text-blue-500" />,
//     subcategories: ["Math", "Science", "History", "Languages"],
//   },
//   {
//     name: "Therapy",
//     icon: <MdPsychology className="text-purple-500" />,
//     subcategories: [
//       "Physical Therapy",
//       "Occupational Therapy",
//       "Mental Health",
//     ],
//   },
//   {
//     name: "Art",
//     icon: <FaPaintBrush className="text-pink-500" />,
//     subcategories: ["Drawing", "Painting", "Sculpture"],
//   },
//   {
//     name: "Technology",
//     icon: <FaLaptopCode className="text-gray-500" />,
//     subcategories: ["Coding", "Robotics", "AI"],
//   },
//   {
//     name: "Crafts",
//     icon: <GiStairsGoal className="text-teal-700" />,
//     subcategories: ["Knitting", "Sewing", "Woodworking"],
//   },
// ];

// const CategoryNav = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedSubcategories, setSelectedSubcategories] = useState<{
//     [key: string]: Set<string>;
//   }>({});
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   // Toggle category selection
//   const handleCategoryClick = (categoryName: string) => {
//     setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
//   };

//   // Toggle subcategory selection
//   const handleSubcategoryClick = (categoryName: string, subcategory: string) => {
//     setSelectedSubcategories((prev) => {
//       const newState = { ...prev };

//       if (!newState[categoryName]) {
//         newState[categoryName] = new Set();
//       }

//       if (newState[categoryName].has(subcategory)) {
//         newState[categoryName].delete(subcategory); // Deselect if already selected
//       } else {
//         newState[categoryName].add(subcategory); // Select if not selected
//       }

//       return newState;
//     });
//   };

//   // Scroll handlers
//   const scrollLeft = () => {
//     containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
//   };

//   // Get active subcategories for the selected category
//   const activeSubcategories =
//     categories.find((c) => c.name === selectedCategory)?.subcategories || [];

//   return (
//     <div className="bg-white py-1 w-full">
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="relative flex items-center justify-center space-x-8 overflow-x-auto hide-scroll-bar px-5"
//           ref={containerRef}
//         >
//           {categories.map((category) => {
//             const hasSelectedSubcategories =
//               selectedSubcategories[category.name]?.size > 0;

//             return (
//               <div
//                 key={category.name}
//                 className={`relative flex flex-col items-center cursor-pointer transition duration-150 ease-in-out ${
//                   selectedCategory === category.name || hasSelectedSubcategories
//                     ? "text-[#BB2460]"
//                     : "text-gray-800"
//                 }`}
//                 onClick={() => handleCategoryClick(category.name)}
//               >
//                 <span className="text-sm sm:text-2xl mb-2">{category.icon}</span>
//                 <span className="text-xs sm:text-sm font-medium">
//                   {category.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//         <div
//           className="absolute left-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
//           onClick={scrollLeft}
//         >
//           <IoIosArrowBack className="text-gray-800 text-xl cursor-pointer" />
//         </div>
//         <div
//           className="absolute right-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
//           onClick={scrollRight}
//         >
//           <IoIosArrowForward className="text-gray-800 text-xl cursor-pointer" />
//         </div>
//       </div>

//       {/* Subcategories */}
//       <div className="ml-8">
//         {activeSubcategories.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-4 justify-center">
//             {activeSubcategories.map((subcategory) => (
//               <span
//                 key={subcategory}
//                 onClick={() =>
//                   handleSubcategoryClick(selectedCategory!, subcategory)
//                 }
//                 className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium ${
//                   selectedSubcategories[selectedCategory!]?.has(subcategory)
//                     ? "bg-[#BB2460] text-white"
//                     : "bg-[#12B9F3] text-white"
//                 }`}
//               >
//                 {subcategory}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryNav;
// "use client";
// import React, { useState, useRef } from "react";
// import {
//   FaFootballBall,
//   FaHiking,
//   FaBook,
//   FaPaintBrush,
//   FaLaptopCode,
// } from "react-icons/fa";
// import { GiCookingPot, GiStairsGoal } from "react-icons/gi";
// import { MdPsychology } from "react-icons/md";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// const categories = [
//   {
//     name: "Sports",
//     icon: <FaFootballBall className="text-green-500" />,
//     subcategories: ["Football", "Basketball", "Tennis", "Swimming"],
//   },
//   {
//     name: "Life Skills",
//     icon: <GiCookingPot className="text-orange-500" />,
//     subcategories: ["Cooking", "Financial Literacy", "Time Management"],
//   },
//   {
//     name: "Adventure",
//     icon: <FaHiking className="text-brown-500" />,
//     subcategories: ["Hiking", "Camping", "Rock Climbing"],
//   },
//   {
//     name: "Educational",
//     icon: <FaBook className="text-blue-500" />,
//     subcategories: ["Math", "Science", "History", "Languages"],
//   },
//   {
//     name: "Therapy",
//     icon: <MdPsychology className="text-purple-500" />,
//     subcategories: [
//       "Physical Therapy",
//       "Occupational Therapy",
//       "Mental Health",
//     ],
//   },
//   {
//     name: "Art",
//     icon: <FaPaintBrush className="text-pink-500" />,
//     subcategories: ["Drawing", "Painting", "Sculpture"],
//   },
//   {
//     name: "Technology",
//     icon: <FaLaptopCode className="text-gray-500" />,
//     subcategories: ["Coding", "Robotics", "AI"],
//   },
//   {
//     name: "Crafts",
//     icon: <GiStairsGoal className="text-teal-700" />,
//     subcategories: ["Knitting", "Sewing", "Woodworking"],
//   },
// ];

// const CategoryNav = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedSubcategories, setSelectedSubcategories] = useState<{
//     [key: string]: Set<string>;
//   }>({});
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   // Toggle category selection
//   const handleCategoryClick = (categoryName: string) => {
//     setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
//   };

//   // Toggle subcategory selection
//   const handleSubcategoryClick = (categoryName: string, subcategory: string) => {
//     setSelectedSubcategories((prev) => {
//       const newState = { ...prev };

//       if (!newState[categoryName]) {
//         newState[categoryName] = new Set();
//       }

//       if (newState[categoryName].has(subcategory)) {
//         newState[categoryName].delete(subcategory); // Deselect if already selected
//       } else {
//         newState[categoryName].add(subcategory); // Select if not selected
//       }

//       return newState;
//     });
//   };

//   // Scroll handlers
//   const scrollLeft = () => {
//     containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
//   };

//   // Get active subcategories for the selected category
//   const activeSubcategories =
//     categories.find((c) => c.name === selectedCategory)?.subcategories || [];

//   return (
//     <div className="bg-white py-1 w-full">
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="relative flex items-center justify-center space-x-8 overflow-x-auto hide-scroll-bar px-5"
//           ref={containerRef}
//         >
//           {categories.map((category) => {
//             const hasSelectedSubcategories =
//               selectedSubcategories[category.name]?.size > 0;

//             return (
//               <div
//                 key={category.name}
//                 className={`relative flex flex-col items-center cursor-pointer transition duration-150 ease-in-out ${
//                   selectedCategory === category.name || hasSelectedSubcategories
//                     ? "text-[#BB2460]"
//                     : "text-gray-800"
//                 }`}
//                 onClick={() => handleCategoryClick(category.name)}
//               >
//                 <span className="text-sm sm:text-2xl mb-2">{category.icon}</span>
//                 <span className="text-xs sm:text-sm font-medium">
//                   {category.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//         <div
//           className="absolute left-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
//           onClick={scrollLeft}
//         >
//           <IoIosArrowBack className="text-gray-800 text-xl cursor-pointer" />
//         </div>
//         <div
//           className="absolute right-1 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white"
//           onClick={scrollRight}
//         >
//           <IoIosArrowForward className="text-gray-800 text-xl cursor-pointer" />
//         </div>
//       </div>

//       {/* Subcategories */}
//       <div className="ml-8">
//         {activeSubcategories.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-4 justify-center">
//             {activeSubcategories.map((subcategory) => (
//               <span
//                 key={subcategory}
//                 onClick={() =>
//                   handleSubcategoryClick(selectedCategory!, subcategory)
//                 }
//                 className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium ${
//                   selectedSubcategories[selectedCategory!]?.has(subcategory)
//                     ? "bg-[#BB2460] text-white"
//                     : "bg-[#12B9F3] text-white"
//                 }`}
//               >
//                 {subcategory}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryNav;



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

const CategoryNav = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState<{
    [key: string]: Set<string>;
  }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Toggle category selection
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  // Toggle subcategory selection
  const handleSubcategoryClick = (categoryName: string, subcategory: string) => {
    setSelectedSubcategories((prev) => {
      const newState = { ...prev };

      if (!newState[categoryName]) {
        newState[categoryName] = new Set();
      }

      if (newState[categoryName].has(subcategory)) {
        newState[categoryName].delete(subcategory); // Deselect if already selected
      } else {
        newState[categoryName].add(subcategory); // Select if not selected
      }

      return newState;
    });
  };

  // Scroll handlers
  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Get active subcategories for the selected category
  const activeSubcategories =
    categories.find((c) => c.name === selectedCategory)?.subcategories || [];

  return (
    <div className="bg-white my-3 py-1 w-full">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex items-center justify-center space-x-8 overflow-x-auto hide-scroll-bar px-5"
          ref={containerRef}
        >
          {categories.map((category) => {
            const hasSelectedSubcategories =
              selectedSubcategories[category.name]?.size > 0;

            return (
              <div
                key={category.name}
                className={`relative flex flex-col items-center cursor-pointer transition duration-150 ease-in-out ${
                  selectedCategory === category.name || hasSelectedSubcategories
                    ? "text-[#BB2460]"
                    : "text-gray-800"
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <span className="text-sm sm:text-2xl mb-2">{category.icon}</span>
                <span className="text-xs sm:text-sm font-medium">
                  {category.name}
                </span>
              </div>
            );
          })}
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

      {/* Subcategories */}
      <div className="ml-8">
        {activeSubcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {activeSubcategories.map((subcategory) => (
              <span
                key={subcategory}
                onClick={() =>
                  handleSubcategoryClick(selectedCategory!, subcategory)
                }
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium ${
                  selectedSubcategories[selectedCategory!]?.has(subcategory)
                    ? "bg-[#BB2460] text-white"
                    : "bg-[#12B9F3] text-white"
                }`}
              >
                {subcategory}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryNav;
