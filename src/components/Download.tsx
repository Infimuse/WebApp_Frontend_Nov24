import React from "react";
import Image from 'next/image';

const Download = () =>{
  return (
    <div className="bg-gray-800 py-20 rounded-lg text-white p-8 mx-4 sm:mx-6 md:mx-8 lg:mx-20 my-12">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Get the Host App</h2>
          <p className="mb-4">
            Download the app from the Play Store to easily manage your events,
            track bookings, and connect with your attendees. Experience the best
            tools to enhance your event management process.
          </p>
          <button className="flex items-center bg-[#A72C76] text-white py-2 px-4 rounded-lg hover:bg-[#12B9f3] transition duration-300 mx-auto md:mx-0">
            {/* <FaGooglePlay className="mr-2" /> */}
            Download Now
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={`/assets/photo1716214382.jpeg`} alt="App Image" width={100} height={100} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Download;
