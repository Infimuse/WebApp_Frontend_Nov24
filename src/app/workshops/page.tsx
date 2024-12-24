import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card'

import SubNavbar from '@/components/SubNavbar';
import Datepicker from '@/components/DatePicker';
import SubNavbar2 from '@/components/SubNavbar2';
import experiences from '@/data/experiences'; // Adjust the path as necessary
import Location from '@/components/community/location';
import Pagination from '@/components/pagination'; // Assuming you have a pagination component


const Workshops = () => {
  const renderCards = (category:string) => {
    return experiences
      .filter((experience) => experience.category === category)
      .map((experience) => <Card key={experience.id} {...experience} />);
  };

  return (
    <div className="bg-white">
      <Navbar />
      {/* <div className="sticky top-[100px] z-50 bg-transparent px-20 "> {/* Adjust top value based on your Navbar's height *
        <Link href="/"
           className="text-white bg-pink-700 p-2 rounded hover:bg-pink-800 ">
            Back
        </Link>
      </div> */}
      <div className="container mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 my-8 text-black">
        <SubNavbar2 />
        <SubNavbar />
        <div className="px-[200px] mt-[-40px]">
        <Location />
        </div>
        <Datepicker />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 text-black">
        <h2 className="text-2xl font-bold mb-4">Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-28">
          {renderCards('Workshops')}
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

export default Workshops;
