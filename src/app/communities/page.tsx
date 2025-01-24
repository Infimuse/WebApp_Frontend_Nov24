"use client";

import React from 'react';
import Sidebar from '@/components/community/Sidebar';
import MainContent from '@/components/community/MainContent';
import RightSidebar from '@/components/community/RightSidebar';


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
          <MainContent />
        </main>
        {/* Right Sidebar */}
        <aside className="w-full hidden lg:block lg:w-1/5 bg-white">
          {" "}
          {/* Remove sticky class */}
          <RightSidebar />
          <div className="p-3 text-xs">
            <span className="text-gray-300 mr-2">Privacy</span>
            <span className="text-gray-300 mr-2">Terms</span>
            <h6 className="text-gray-300 mr-2">@Infimuse LTD</h6>
          </div>
        </aside>
      </div>

    
    </div>
  );
}
