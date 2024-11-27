"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Image URLs from Pexels
const backgroundImage1 = 'https://infimuse.s3.amazonaws.com/banner1.jpeg';
const backgroundImage2 = 'https://infimuse.s3.amazonaws.com/groupExperience.jpeg';
const backgroundImage3 = 'https://infimuse.s3.amazonaws.com/workshops.jpeg';
const backgroundImage4 = 'https://infimuse.s3.amazonaws.com/kidActivity.png';

const banners = [
  {
    image: backgroundImage1,
    title: 'Discover and Connect with Local Communities',
    subtitle: 'Vibrant Communities based on your Interests',
    buttonText: 'Communities',
  },
  {
    image: backgroundImage2,
    title: 'Find Group Experiences, Activities and Hangouts around you.',
    subtitle: 'Explore from a wide range of offerings',
    buttonText: 'Discover Groups',
  },
  {
    image: backgroundImage3,
    title: 'Master new skills with like-minded people',
    subtitle: 'Learn new things, Connect with People and get your creative juices flowing',
    buttonText: 'Workshops',
  },

  {
    image: backgroundImage4,
    title: 'Kids Activities to help Discover their Best Self',
    subtitle: 'Help your young ones find and pursue their passions',
    buttonText: 'Kids Fun',
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden min-h-[75vh]"> 
      <div className="w-full h-full overflow-hidden mx-auto max-w-screen-xl">
        <Image
          src={banners[currentBanner].image}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-10 md:px-20">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-2 sm:mb-4 transition-all duration-1000 rounded-full">
            {banners[currentBanner].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4 transition-all duration-1000 rounded-full">
            {banners[currentBanner].subtitle}
          </p>
          <button 
            className={`font-bold py-2 px-4 sm:px-6  shadow-lg hover:shadow-xl transition-all duration-300 rounded-full ${
              banners[currentBanner].buttonText === 'Communities' ? 'bg-rainbow-gradient' : 'bg-[#12B9f3] hover:bg-pink-700'
            } text-white`}
          >
            {banners[currentBanner].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
