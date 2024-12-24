"use client";

import React, { useRef } from "react";
// import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
import Card from "@/components/Card";
import SubNavbar2 from "@/components/SubNavbar2";
// import Download from "@/components/Download";
import Banner from "@/components/Banner";
// import DatePicker from "@/components/DatePicker";
import Link from "next/link";
import "./globals.css";

interface ArrowProps{
  onClick: () => void
}
const Arrow = ({ onClick }:ArrowProps) => (
  <div
    onClick={onClick}
    className="absolute hidden md:block top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-gray-300 shadow-xl p-2 rounded-full cursor-pointer animate-dance"
    style={{ right: "-38px" }} // Adjust the 'right' value to keep the arrow visible
  >
    <IoIosArrowForward className="text-black text-xl" />
  </div>
);

const experiences = [
  // Sipping Hangouts
  {
    id: "10",
    image: "https://images.pexels.com/photos/1473007/pexels-photo-1473007.jpeg",
    title: "Wine Tasting",
    host: "Vineyard",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 50",
    rating: 4.5,
    slotsBooked: 10,
  },
  {
    id: "144",
    image: "https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg",
    title: "Beer Brewing Workshop",
    host: "Local Brewery",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 60",
    rating: 4.3,
    slotsBooked: 7,
  },
  {
    id: "5",
    image: "https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg",
    title: "Cocktail Mixology Class",
    host: "Mixology Bar",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 70",
    rating: 4.7,
    slotsBooked: 12,
  },
  {
    id: "141",
    image: "https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg",
    title: "Beer Brewing Workshop",
    host: "Local Brewery",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 60",
    rating: 4.3,
    slotsBooked: 7,
  },
  {
    id: "159",
    image: "https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg",
    title: "Cocktail Mixology Class",
    host: "Mixology Bar",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 70",
    rating: 4.7,
    slotsBooked: 12,
  },
  {
    id: "14",
    image: "https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg",
    title: "Beer Brewing Workshop",
    host: "Local Brewery",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 60",
    rating: 4.3,
    slotsBooked: 7,
  },
  {
    id: "15",
    image: "https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg",
    title: "Cocktail Mixology Class",
    host: "Mixology Bar",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 70",
    rating: 4.7,
    slotsBooked: 12,
  },
  // Kids Activities
  {
    id: "11",
    image: "https://images.pexels.com/photos/5765/kids.jpg",
    title: "Kids Cooking Class",
    host: "Cooking School",
    status: "Upcoming",
    category: "Kids Activities",
    price: " 30",
    rating: 4.2,
    slotsBooked: 5,
  },
  {
    id: "166",
    image: "https://images.pexels.com/photos/701014/pexels-photo-701014.jpeg",
    title: "Art and Craft Workshop",
    host: "Art Studio",
    status: "Upcoming",
    category: "Kids Activities",
    price: " 25",
    rating: 4.6,
    slotsBooked: 9,
  },
  {
    id: "17",
    image: "https://images.pexels.com/photos/385025/pexels-photo-385025.jpeg",
    title: "Kids Dance Class",
    host: "Dance Academy",
    status: "Upcoming",
    category: "Kids Activities",
    price: " 35",
    rating: 4.4,
    slotsBooked: 8,
  },
  {
    id: "16",
    image: "https://images.pexels.com/photos/701014/pexels-photo-701014.jpeg",
    title: "Art and Craft Workshop",
    host: "Art Studio",
    status: "Upcoming",
    category: "Kids Activities",
    price: " 25",
    rating: 4.6,
    slotsBooked: 9,
  },
  {
    id: "120",
    image: "https://images.pexels.com/photos/385025/pexels-photo-385025.jpeg",
    title: "Kids Dance Class",
    host: "Dance Academy",
    status: "Upcoming",
    category: "Kids Activities",
    price: " 35",
    rating: 4.4,
    slotsBooked: 8,
  },
  {
    id: "126",
    image: "https://images.pexels.com/photos/701014/pexels-photo-701014.jpeg",
    title: "Art and Craft Workshop",
    host: "Art Studio",
    status: "Upcoming",
    category: "Kids Activities",
    price: " 25",
    rating: 4.6,
    slotsBooked: 9,
  },
  {
    id: "127",
    image: "https://images.pexels.com/photos/385025/pexels-photo-385025.jpeg",
    title: "Kids Dance Class",
    host: "Dance Academy",
    status: "Upcoming",
    category: "Kids Activities",
    price: " 35",
    rating: 4.4,
    slotsBooked: 8,
  },
  // Workshops
  {
    id: "122",
    image: "https://images.pexels.com/photos/385025/pexels-photo-385025.jpeg",
    title: "Photography Workshop",
    host: "Photo Studio",
    status: "Upcoming",
    category: "Workshops",
    price: " 80",
    rating: 4.8,
    slotsBooked: 15,
  },
  {
    id: "128",
    image: "https://images.pexels.com/photos/3787329/pexels-photo-3787329.jpeg",
    title: "Digital Marketing Workshop",
    host: "Marketing Experts",
    status: "Upcoming",
    category: "Workshops",
    price: " 90",
    rating: 4.9,
    slotsBooked: 20,
  },
  {
    id: "129",
    image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg",
    title: "Creative Writing Workshop",
    host: "Writers Guild",
    status: "Upcoming",
    category: "Workshops",
    price: " 70",
    rating: 4.7,
    slotsBooked: 12,
  },
  // Packages
  {
    id: "13",
    image: "https://images.pexels.com/photos/936093/pexels-photo-936093.jpeg",
    title: "Fitness Bootcamp",
    host: "Gym",
    status: "Upcoming",
    category: "Packages",
    price: " 200",
    rating: 4.6,
    slotsBooked: 18,
  },
  {
    id: "20",
    image: "https://images.pexels.com/photos/3820381/pexels-photo-3820381.jpeg",
    title: "Yoga Retreat",
    host: "Yoga Studio",
    status: "Upcoming",
    category: "Packages",
    price: " 250",
    rating: 4.9,
    slotsBooked: 22,
  },
  {
    id: "21",
    image: "https://images.pexels.com/photos/3741015/pexels-photo-3741015.jpeg",
    title: "Wellness Spa Weekend",
    host: "Luxury Spa",
    status: "Upcoming",
    category: "Packages",
    price: " 300",
    rating: 4.8,
    slotsBooked: 25,
  },
  // More Learn a Skill
  {
    id: "22",
    image:
      "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg",
    title: "Learn to Play Guitar",
    host: "Music Academy",
    status: "Upcoming",
    category: "Packages",
    price: " 120",
    rating: 4.7,
    slotsBooked: 14,
  },
  {
    id: "23",
    image: "https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg",
    title: "DIY Home Repairs",
    host: "Home Improvement Center",
    status: "Upcoming",
    category: "Packages",
    price: " 80",
    rating: 4.4,
    slotsBooked: 11,
  },
  {
    id: "24",
    image: "https://images.pexels.com/photos/66066/pexels-photo-66066.jpeg",
    title: "Gardening for Beginners",
    host: "Community Garden",
    status: "Upcoming",
    category: "Packages",
    price: " 50",
    rating: 4.6,
    slotsBooked: 13,
  },
  // More Unique Experiences
  // {
  //   id: '25',
  //   image: 'https://images.pexels.com/photos/1209318/pexels-photo-1209318.jpeg',
  //   title: 'Hot Air Balloon Ride',
  //   host: 'Adventure Company',
  //   status: 'Upcoming',
  //   category: 'Unique Experiences',
  //   price: ' 300',
  //   rating: 4.5,
  //   slotsBooked: 10,
  // },
  {
    id: "26",
    image: "https://images.pexels.com/photos/164502/pexels-photo-164502.jpeg",
    title: "Scuba Diving Adventure",
    host: "Dive School",
    status: "Upcoming",
    category: "Workshops",
    price: " 400",
    rating: 4.9,
    slotsBooked: 16,
  },
  {
    id: "27",
    image:
      "https://images.pexels.com/photos/33608/aircraft-jet-landing-cloud.jpg",
    title: "Helicopter Tour",
    host: "Aerial Tours",
    status: "Upcoming",
    category: "Workshops",
    price: " 500",
    rating: 4.8,
    slotsBooked: 19,
  },
  // More Practice
  {
    id: "28",
    image: "https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg",
    title: "Meditation Classes",
    host: "Wellness Center",
    status: "Upcoming",
    category: "Workshops",
    price: " 90",
    rating: 4.7,
    slotsBooked: 14,
  },
  {
    id: "29",
    image: "https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg",
    title: "Advanced Yoga",
    host: "Yoga Studio",
    status: "Upcoming",
    category: "Practice",
    price: " 110",
    rating: 4.5,
    slotsBooked: 12,
  },
  // {
  //   id: '30',
  //   image: 'https://images.pexels.com/photos/303846/pexels-photo-303846.jpeg',
  //   title: 'CrossFit Training',
  //   host: 'CrossFit Gym',
  //   status: 'Upcoming',
  //   category: 'Practice',
  //   price: ' 130',
  //   rating: 4.6,
  //   slotsBooked: 15,
  // },
];

const HomePage = () => {
  const ExploreRef = useRef<HTMLDivElement | null>(null);
  // const sippingHangoutsRef = useRef(null);
  const kidsActivitiesRef = useRef<HTMLDivElement | null>(null);
  const workshopsRef = useRef<HTMLDivElement | null>(null);
  // const packagesRef = useRef(null);



  const scrollToEnd = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollTo({ left: ref.current.scrollWidth, behavior: "smooth" });
  };

  const renderCards = (category: string) => {
    return experiences
      .filter((experience) => experience.category === category)
      .map((experience) => <Card key={experience.id} {...experience} />);
  };

  return (
    <div className="bg-white w-full">
      <Navbar />
      <div className="pt-30"/>
      <Banner />
      <div className="container h-full  mx-auto px-4 sm:px-6 lg:px-8 my-4 text-black">
        <SubNavbar2 />
        <SubNavbar />

        <section className="relative mb-8 max-w-[1240px] mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl rajdhani-bold text-gray-700">
                Explore and Connect
              </h2>
              <p className="text-gray-600">
                Discover fun Learning Experiences & Group Hangouts around you
              </p>
            </div>
            <Link href="/Explore">
              <button className="text-black py-2 px-4 rounded-lg underline">
                View More
              </button>
            </Link>
          </div>

          <div className="space-y-8">
            <div
              ref={ExploreRef}
              className="flex overflow-x-auto space-x-10 pb-4 hide-scrollbar"
            >
              {experiences.slice(0, 8).map((experience) => (
                <div key={experience.id}>
                  <Card {...experience} />
                </div>
              ))}
            </div>
            <Arrow onClick={() => scrollToEnd(ExploreRef)} />

            <div
              ref={ExploreRef}
              className="flex space-x-10 overflow-x-auto pb-4 hide-scrollbar"
            >
              {experiences.slice(8, 16).map((experience) => (
                <div key={experience.id}>
                  <Card {...experience} />
                </div>
              ))}
            </div>
            <Arrow onClick={() => scrollToEnd(ExploreRef)} />
          </div>
        </section>

        <section className="relative mb-8 max-w-[1240px] mx-auto">
          <div className="flex space-x-10 justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Workshops</h2>
              <p className="text-gray-600">
                Join our workshops and enhance your skills in various fields.
              </p>
            </div>
            <Link href="/workshops">
              <button className=" text-black py-2 px-4 rounded-lg underline">
                View More
              </button>
            </Link>
          </div>
          <div
            ref={workshopsRef}
            className="flex space-x-10 overflow-x-auto pb-4 hide-scrollbar"
          >
            {renderCards("Workshops")}
          </div>
          <Arrow onClick={() => scrollToEnd(workshopsRef)} />
        </section>

        {/* <section className="relative mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Sipping Hangouts</h2>
              <p className="text-gray-600">Discover great places to hang out and enjoy your favorite drinks.</p>
            </div>
            <Link href="/sipping-hangouts">
              <button className="text-black py-2 px-4 rounded-lg underline">View More</button>
            </Link>
          </div>
          <div
            ref={sippingHangoutsRef}
            className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar"
          >
            {renderCards('Sipping Hangouts')}
          </div>
          <Arrow onClick={() => scrollToEnd(sippingHangoutsRef)} />
        </section> */}

        <section className="relative mb-8 max-w-[1240px] mx-auto">
          <div className="flex space-x-10 justify-between items-center mb-4 hide-scrollbar">
            <div>
              <h2 className="text-2xl font-bold">For Kids </h2>
              <p className="text-gray-600">
                Fun and educational activities designed for kids of all ages.
              </p>
            </div>
            <Link href="/Kids-activities">
              <button className="text-black py-2 px-4 rounded-lg underline">
                View More
              </button>
            </Link>
          </div>
          <div
            ref={kidsActivitiesRef}
            className="flex space-x-10 overflow-x-auto pb-4 hide-scrollbar"
          >
            {renderCards("Kids Activities")}
          </div>
          <Arrow onClick={() => scrollToEnd(kidsActivitiesRef)} />
        </section>

        {/* <section className="relative mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Packages</h2>
              <p className="text-gray-600">Exclusive packages to get the best value for your activities.</p>
            </div>
            <Link href="/packages">
              <button className="text-black py-2 px-4 rounded-lg underline">View More</button>
            </Link>
          </div>
          <div
            ref={packagesRef}
            className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar"
          >
            {renderCards('Packages')}
          </div>
          <Arrow onClick={() => scrollToEnd(packagesRef)} />
        </section> */}
      </div>
      {/* <Download /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
