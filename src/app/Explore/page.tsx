import React from "react";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import experiences from "@/data/experiences";
import SubNavbar2 from "@/components/SubNavbar2";
import Location from "@/components/community/location";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/SearchBar";
import CategoryNav from "@/components/CategoryNav";
import ScrollToTopButton from "@/components/ScrollToTopButton"

const Explore = () => {
  return (
    <div className="bg-white w-full relative">
      <ScrollToTopButton/>
      <div className="mx-auto px-4 w-full sm:px-2 lg:px-8 overflow-x-hidden text-black max-w-[1280px]">
        <SearchBar />
        {/* <Datepicker /> */}
        <div className="my-4">
        <SubNavbar2 />
        </div>
        <CategoryNav />
        <div className=" border-b ">
          <Location />
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
