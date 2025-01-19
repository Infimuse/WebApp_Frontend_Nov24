"use client";

import React from "react";
import Sidebar from "@/components/community/Sidebar";
import Tweets from "@/components/community/Tweets";

import RightSidebar from "@/components/community/RightSidebar";
import Footer from "@/components/Footer";

// export default function HomePage() {
//   return (
//     <div className="bg-white w-full flex flex-col justify-evenly max-w-[1280px] mx-auto">
//       <div className="flex w-full flex-col md:flex-row gap-4 max-w-[1280px] mx-auto px-4 overflow-x-hidden">
//         {/* Flex container for sidebars and main content */}
//         {/* Sidebar */}
//         <div className="hidden lg:block lg:w-1/5 bg-white p-y">
//           <Sidebar />
//         </div>
//         {/* Main content */}
//         <main className="border-b border-primary-container_border_color pt-[-5] w-full lg:w-3/5 bg-white lg:p-4 relative">
//           <section className="mb-3">
//             <h3 className="text-lg sm:text-2xl font-bold text-gray-700">
//               COMMUNITY NAME
//             </h3>
//             <div className="rounded-lg border p-2 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-5 sm:items-center">
//               <article>
//                 <img
//                   src="/assets/image.jpeg"
//                   className="h-14 sm:w-20 sm:h-20 w-14 rounded-full"
//                 />
//               </article>
//               <article className="text-gray-700">
//                 <h2 className="font-bold">Community Name</h2>
//                 <p className="font-semibold">Hosted by Victor</p>
//                 <div className="flex gap-3 font-bold mt-3">
//                   <span>11 Posts</span>
//                   <span>3 Team</span>
//                   <span>56 Members</span>
//                 </div>
//                 <div className="flex items-center gap-3 mt-3">
//                   <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
//                     Karen
//                   </span>
//                   <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
//                     Ngong
//                   </span>
//                   <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
//                     Sarit
//                   </span>
//                 </div>
//                 <div>Group Description</div>
//               </article>
//             </div>
//           </section>

//           <div className="flex justify-center items-center min-h-screen relative">
//             {/* Flex container to center content vertically and horizontally */}
//             <div className="px-2 w-half max-w-3xl flex-4 mr-10 ml-10">
//               {/* Tweets Section */}
//               <div className="mx-auto flex flex-col items-center space-y-1">
//                 <Tweets />
//               </div>
//             </div>
//             {/* Floating button inside the main content area */}
//             <FloatingButton onClick={() => {}} />
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="w-full hidden lg:block lg:w-1/5 bg-white">
//           <RightSidebar />
//         </aside>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// interface Props {
//   onClick: () => void;
//   label?: React.ReactNode;
// }

// const FloatingButton = ({ onClick, label }: Props) => {
//   return (
//     <button
//       onClick={onClick}
//       className="sticky bottom-1/2 transform translate-y-1/2 right-5 w-10 h-10 bg-[#12b9f3] text-white rounded-full shadow-lg flex items-center justify-center transition duration-300 z-50"
//     >
//       {label}
//     </button>
//   );
// };

export default function HomePage() {
  return (
    <div className="bg-white w-full flex flex-col justify-evenly max-w-[1280px] mx-auto">
      <div className="flex w-full flex-col md:flex-row gap-4 max-w-[1280px] mx-auto px-4 overflow-x-hidden">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-1/5 bg-white p-y">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="border-b border-primary-container_border_color pt-[-5] w-full lg:w-3/5 bg-white lg:p-4 relative overflow-y-auto h-screen">
          {/* This makes the content scrollable */}
          <section className="mb-3">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-700">
              COMMUNITY NAME
            </h3>
            <div className="rounded-lg border p-2">
              <div className=" sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-10 sm:items-center">
                <img
                  src="/assets/image.jpeg"
                  className="w-[150px] h-[150px] rounded-full"
                />

                <article className="text-gray-700">
                  <h2 className="font-bold">Community Name</h2>
                  <p className="font-semibold">Hosted by Victor</p>
                  <div className="flex gap-3 font-bold mt-3">
                    <span>11 Posts</span>
                    <span>3 Team</span>
                    <span>56 Members</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
                      Karen
                    </span>
                    <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
                      Ngong
                    </span>
                    <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
                      Sarit
                    </span>
                  </div>
                </article>
              </div>
              <section className="text-gray-700">
                <div className="text-xs sm:text-sm">
                  A premier polo club offering exciting matches, exclusive
                  events, and a vibrant community of enthusiasts.
                </div>
              </section>
              <section className="p-3 flex justify-between text-xs sm:text-sm items-center font-bold text-gray-700">
                <span>3 Posts</span>
                <span>5 Team</span>
                <span>5 members</span>
              </section>
              <div className="flex items-center gap-3 mt-3">
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Sports
                </span>
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Hiking
                </span>
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Art
                </span>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center min-h-screen relative">
            {/* Flex container to center content vertically and horizontally */}
            <div className="px-2 w-half max-w-3xl flex-4 mr-10 ml-10">
              {/* Tweets Section */}
              <div className="mx-auto flex flex-col items-center space-y-1">
                <Tweets />
              </div>
            </div>

            {/* Floating button inside the scrollable content */}
          </div>
          {/* <FloatingButton onClick={() => {}} /> */}
        </main>

        {/* Right Sidebar */}
        <aside className="w-full hidden lg:block lg:w-1/5 bg-white">
          <RightSidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}

interface Props {
  onClick: () => void;
  label?: React.ReactNode;
}

export const FloatingButton = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="sticky bottom-1/2 transform translate-y-1/2 right-5 w-10 h-10 bg-[#12b9f3] text-white rounded-full shadow-lg flex items-center justify-center transition duration-300 z-50"
    >
      {label}
    </button>
  );
};
