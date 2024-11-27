import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import SubNavbar from '@/components/SubNavbar';
import Datepicker from '@/components/DatePicker';
import SubNavbar2 from '@/components/SubNavbar2';
import Link from 'next/link';
import experiences from '@/data/experiences'; // Adjust the path as necessary
import Location from '@/components/community/location';
import Pagination from '@/components/pagination'; // Assuming you have a pagination component



const KidsActivities = () => {
  const renderCards = (category) => {
    return experiences
      .filter((experience) => experience.category === category)
      .map((experience) => <Card key={experience.id} {...experience} />);
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className='mx-auto overflow-x-auto'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 text-black">
          <SubNavbar2 />
          <SubNavbar />
          <div className="px-[200px] mt-[-40px]">
            <Location />
          </div>
          <Datepicker />
        </div>
        <div>
          <div className='mx-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {renderCards('Kids Activities')}
            </div>
            <div className="flex justify-center mt-8">
              <Pagination />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default KidsActivities;
