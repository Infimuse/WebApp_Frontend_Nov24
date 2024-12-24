"use client";

import React from 'react';
import Sidebar from '@/components/community/Sidebar';
import MainContent from '@/components/community/MainContent';
import RightSidebar from '@/components/community/RightSidebar';
import Navbar from '@/components/CommunityNav';
import Footer from '@/components/Footer';

export default function HomePage() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <div className="bg-white w-full flex flex-col justify-evenly">
      <Navbar />

      <div className="flex w-full flex-col md:flex-row gap-4 max-w-[1280px] mx-auto px-4 overflow-x-hidden">
        {" "}
        {/* Flex container for sidebars and main content */}
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-1/5 bg-white p-4">
          <Sidebar />
        </div>
        {/* Main content */}
        <main className=" border-r border-l border-b border-primary-container_border_color w-full lg:w-3/5 bg-white p-4">
          <MainContent />
        </main>
        {/* Right Sidebar */}
        <aside className="w-ful hidden lg:block lg:w-1/5 bg-gray-100 p-4">
          {" "}
          {/* Remove sticky class */}
          <RightSidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}
