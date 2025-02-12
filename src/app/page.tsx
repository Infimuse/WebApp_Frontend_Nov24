"use client";
import React from "react";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import SubNavbar2 from "@/components/SubNavbar2";
import Banner from "@/components/Banner";
import UpcomingEvents from "@/components/UpcomingEvents";

import "./globals.css";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import Location from "@/components/community/location";

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
  return (
    <div className="bg-white w-full relative">
      <Banner />
      <ScrollToTopButton />
      <UpcomingEvents />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 pt-1 mb-2 text-black">
        <SubNavbar2 />
        <div className="mt-3 mb-10">
          <SubNavbar />
        </div>
        <div className="max-w-[1240px] mx-auto my-3">
          <Location />
        </div>
        <section className="relative mb-8 max-w-[1240px] mx-auto">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {experiences.map((experience) => (
              <Card key={experience.id} {...experience} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
