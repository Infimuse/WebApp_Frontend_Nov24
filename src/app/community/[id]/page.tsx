"use client";

import React from "react";
import Sidebar from "@/components/community/Sidebar";
import MainContent from "@/components/community/MainContent";
import RightSidebar from "@/components/community/RightSidebar";
import Footer from "@/components/Footer";

export default function HomePage() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <div className="bg-white w-full flex flex-col justify-evenly max-w-[1280px] mx-auto">
      <div className="flex w-full flex-col md:flex-row gap-4 max-w-[1280px] mx-auto px-4 overflow-x-hidden">
        {/* Flex container for sidebars and main content */}
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-1/5 bg-white p-y">
          <Sidebar />
        </div>
        {/* Main content */}
        <main className="   border-b border-primary-container_border_color pt-[-5] w-full lg:w-3/5 bg-white lg:p-4">
          <section className="mb-3">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-700">
              COMMUNITY NAME
            </h3>
            <div className="rounded-lg border p-2 sm:p-5 flex flex-col sm:flex-row  gap-3 sm:gap-5 sm:items-center">
              <article className="">
                <img
                  src="/assets/image.jpeg"
                  className="h-14 sm:w-20 sm:h-20 w-14 rounded-full"
                />
              </article>
              <article className="text-gray-700  ">
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
          </section>
          <MainContent />
        </main>
        {/* Right Sidebar */}
        <aside className="w-full hidden lg:block lg:w-1/5 bg-white">
          {" "}
          {/* Remove sticky class */}
          <RightSidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}
