"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import BookingModal from "@/components/BookingModal";
import experiences from "@/data/data";
import { useParams } from "next/navigation";
import TicketCard, { tickets } from "@/components/TicketCard";

const getLearningExperience = (id: string) => {
  return experiences.find((exp) => exp.id === id);
};

export default function ExperienceDetail() {
  // const [activeTab, setActiveTab] = useState("description");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const experience = getLearningExperience(params.id as string);

  if (!experience) {
    notFound();
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 flex flex-col overflow-x-hidden lg:flex-row">
        <div className="lg:w-3/4">
          <h1 className="text-sm sm:text-3xl font-bold sm:mb-2">
            {experience.title}
          </h1>
          <p className="text-xs sm:text-lg mb-2">Hosted by {experience.host}</p>
          <div className="relative w-full h-52 mb-4">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              className="rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-3 sm:mb-8">
            <h2 className="text-sm sm:text-2xl font-bold  sm:mb-4">
              Class Information
            </h2>
            <p className="text-xs sm:text-sm">
              <strong>Start Date:</strong> {experience.startDate}
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Time:</strong> {experience.time}
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Avg Session Duration:</strong>{" "}
              {experience.avgSessionDuration}
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Number of Classes:</strong> {experience.numOfClasses}
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Age Group:</strong> {experience.ageGroup}
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Location:</strong> {experience.location}
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Attending:</strong> {experience.attending} out of{" "}
              {experience.capacity} slots booked
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Host Type:</strong> {experience.hostType}
            </p>
            <div className="flex items-center mb-2">
              <p className="text-xs sm:text-sm">
                <strong>Avg Rating:</strong>
              </p>
              <div className="text-yellow-500 flex items-center ml-2">
                {"⭐".repeat(Math.round(experience.rating))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-3 sm:mb-5">
            <h2 className="text-sm sm:text-2xl font-bold mb-2 sm:mb-4">
              Start Dates ({experience.dates.length})
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {experience.dates.map((date, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border p-2 text-xs sm:text-sm sm:p-4 rounded-lg"
                >
                  <span>{date.date}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-600">
                      {date.seatsLeft} seats left
                    </span>
                    <button
                      className="bg-[#A72C76] text-white py-2 px-4 rounded-lg  transition duration-300"
                      onClick={openModal}
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-3 sm:mb-5">
            <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">
              Class Description
            </h2>
            <p className="mb-4 text-xs sm:text-sm">{experience.description}</p>
            <h3 className="text-lg font-semibold mb-2">You Will Learn:</h3>
            <ul className="list-disc list-inside mb-4">
              <li className="text-xs sm:text-sm">Learn how to Crumb Coat</li>
              <li className="text-xs sm:text-sm">
                Work with American Buttercream
              </li>
              <li className="text-xs sm:text-sm">
                Learn various piping techniques including; shells, stars,
                zig-zags, ruffles & rosettes
              </li>
              <li className="text-xs sm:text-sm">
                Work with multiple piping tips
              </li>
              <li className="text-xs sm:text-sm">
                Learn how to apply these techniques to your cake.
              </li>
            </ul>
            <p className="text-gray-600 italic text-xs sm:text-sm">
              All supplies and materials included, classes are hands-on,
              interactive experiences. So, please dress accordingly. We
              recommend wearing casual clothing that you won’t mind getting a
              little sugar on, and flat comfortable shoes. Open toed shoes and
              sandals are not recommended as this is a safety concern when
              working within a kitchen. Long hair should be tied back.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-3 sm:mb-5">
            <h2 className="text-sm sm:text-xl font-bold mb-2 sm:mb-4">
              Reviews ({experience.reviews})
            </h2>
            <div className="text-yellow-500 flex items-center mb-2">
              {"⭐".repeat(Math.round(experience.rating))}
            </div>
            <p className="text-xs sm:text-sm">
              Lots of fun and technically very informative and easy to learn.
              Lisa is an amazing instructor! I highly recommend this class to
              anyone interested in cake decorating and perfecting their craft.
            </p>
            <p className="text-right text-xs sm:text-sm font-semibold mt-2">
              - KERRY H.
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 lg:pl-8">
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-3 sm:mb-5">
            <a href="/book" className="w-full">
              <button className="w-full bg-[#12B9F3] text-white font-semibold py-2 text-xs sm:text-sm sm:py-3 rounded-lg shadow-md  transition duration-300 mb-4">
                Book Now
              </button>
            </a>

            <button className="w-full bg-gray-100 text-gray-700 font-semibold py-2 text-xs sm:text-sm sm:py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 mb-4">
              <BookmarkIcon className="inline h-5 w-5 mr-2" /> Save to Wishlist
            </button>
            <div className="text-center text-gray-500 text-xs sm:text-sm">
              1139 people wishlisted
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-3 sm:mb-5">
            <h2 className="text-xl font-semibold mb-2 sm:mb-4">Price</h2>
            <p className="text-2xl font-bold mb-2">{experience.price}</p>
            <ul className="list-disc list-inside">
              <li className="text-xs sm:text-sm">All levels</li>
              <li className="text-xs sm:text-sm">
                Age Limit: {experience.ageLimit}
              </li>
              <li className="text-xs sm:text-sm">Earn 10% Rewards</li>
              <li className="text-xs sm:text-sm">Price Lock</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-3 sm:mb-5">
            <h2 className="text-sm ssm:text-xl font-semibold mb-2 sm:mb-3">
              Ticket Types
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
              {tickets.map((ticket, idx) => (
                <TicketCard ticket={ticket} key={idx} />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-3 sm:mb-5">
            <h2 className="text-sm sm:text-xl font-semibold mb-2 sm:mb-4">
              Location
            </h2>
            <p className="text-xs sm:text-xs">{experience.location}</p>
          </div>
          <div className="relative w-full h-64 mb-3 sm:mb-5">
            <Image
              src={experience.mapImage}
              alt="Map"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-5 mb-3 sm:mb-5 flex flex-col items-center">
            <h1 className=" font-bold mb-4">Meet the Instructor</h1>
            <Image
              src="https://randomuser.me/api/portraits/women/50.jpg" // Replace with the actual image URL
              alt="Lisa Mwangi"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="text-sm sm:text-2xl font-bold mb-2">Lisa Mwangi</h2>
            <p className="text-xs ssm:text-sm text-gray-500 mb-2">
              Started instructing in 2024
            </p>
            <a href="/staff" className="w-full">
              <button className="w-full bg-[#12B9f3] text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 mt-2">
                See profile
              </button>
            </a>
          </div>
        </div>
      </div>
      <Download />
      <Footer />
      <BookingModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        experience={experience}
      />
    </div>
  );
}
