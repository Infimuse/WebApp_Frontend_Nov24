import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import experiences from '@/data/experiences';
import Link from 'next/link';
import SubNavbar from '@/components/SubNavbar';
import Datepicker from '@/components/DatePicker';
import SubNavbar2 from '@/components/SubNavbar2';
import Location from '@/components/community/location';
import Pagination from '@/components/pagination';



const Explore = () => {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <div className="mx-auto px-4 w-full sm:px-2 lg:px-8 my-8 overflow-x-hidden text-black max-w-[1280px] mx-auto">
        <Datepicker />
        <SubNavbar2 />
        <SubNavbar />
        <div className="flex  py-6 border-b mt-[-56px] ">
                    <Location/>
            </div>
        {/* <SubNavbar2 /> */}
        <div>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {experiences.map((experience) => (
              <Card key={experience.id} {...experience} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Pagination />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
