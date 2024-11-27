"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/community/Sidebar';
import MainContent from '@/components/community/MainContent';
import RightSidebar from '@/components/community/RightSidebar';
import Navbar from '@/components/CommunityNav';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-white w-full flex flex-col justify-evenly">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex w-full flex-col md:flex-row gap-4 px-4 overflow-x-hidden"> {/* Flex container for sidebars and main content */}
        {/* Sidebar */}
        <div className="md:w-1/4 flex-1">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="w-full bg-white border-r border-l border-b border-primary-container_border_color flex-2">
        
          <MainContent />
        </main>

        {/* Right Sidebar */}
        <aside className="w-full bg-white lg:block flex-1"> {/* Remove sticky class */}
          <RightSidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}
