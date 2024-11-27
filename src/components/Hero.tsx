"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import backgroundImage1 from '@/public/assets/pexels-pixabay-247819.jpg'; // Replace with actual image path
import backgroundImage2 from '@/public/assets/classroom@1x.jpg'; // Replace with actual image path
import backgroundImage3 from '@/public/assets/pexels-leah-newhouse-50725-325521.jpg'; // Replace with actual image path

const banners = [
  {
    image: backgroundImage1,
    title: 'Give Experiences',
    subtitle: 'Thousands of classes. No expiration. You choose the $ amount. Select a category or let the recipient pick.',
    buttonText: 'Book Now',
  },
  {
    image: backgroundImage2,
    title: 'Learn Something New',
    subtitle: 'Explore a variety of courses to help you learn new skills and advance your career.',
    buttonText: 'Start Learning',
  },
  {
    image: backgroundImage3,
    title: 'Join Our Community',
    subtitle: 'Connect with like-minded individuals and grow together.',
    buttonText: 'Sign Up Now',
  },
];

const HeroBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className=" w-full h-40 sm:h-60 md:h-72 lg:h-80 overflow-hidden mx-auto max-w-screen-xl ">
        <Image
          src={banners[currentBanner].image}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-10 md:px-20">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-2 sm:mb-4 transition-all duration-1000">
            {banners[currentBanner].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 transition-all duration-1000">
            {banners[currentBanner].subtitle}
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 sm:px-6 rounded shadow-lg hover:shadow-xl transition-all duration-300">
            {banners[currentBanner].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
