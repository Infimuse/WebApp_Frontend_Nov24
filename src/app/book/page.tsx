 "use client"

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BookingPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-20">
          <div className="w-full bg-white shadow-lg rounded-lg p-8">
            <header className="mb-8 text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Confirm and Pay</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Right Column for Property Details */}
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <div className="flex flex-col items-center">
                  <img src="https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg" alt="Property" className="w-full mb-4 rounded-lg object-cover h-64"/>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">Wine Tasting</h3>
                  <p className="text-sm text-gray-600 mt-2">Hosted by Vineyard</p>
                  <p className="text-sm font-semibold text-gray-800 mt-2">4.96 (226 reviews) • Superhost</p>
                </div>
                <div className="mt-8">
                  <p className="text-sm text-gray-600">Price details:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Location: 456 Vineyard Rd, Napa Valley, CA</li>
                    <li>Start Date: June 15th, 2023</li>
                    <li>Time: 2:00 PM - 5:00 PM EDT</li>
                    <li><strong>Total (KES): KSh 48,301.60</strong></li>
                  </ul>
                </div>
                <div className="mt-8">
                  <p className="text-sm text-gray-600">Amenities:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Free parking on premises</li>
                    <li>Wi-Fi</li>
                    <li>Kitchen</li>
                    <li>Air conditioning</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <p className="text-sm text-gray-600">Cancellation policy:</p>
                  <p className="text-sm text-gray-800 mt-2">Free cancellation for 48 hours. After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.</p>
                </div>
                <div className="mt-8">
                  <p className="text-sm text-gray-600">Location:</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086509486073!2d-122.2868656846816!3d37.87159277974467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba6d1c8b1e1f%3A0x4e9b8b7e1e8b1e1f!2s456%20Vineyard%20Rd%2C%20Napa%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Property Location"
                  ></iframe>
                </div>
              </div>
              {/* Left Column for Booking Details */}
              <div>
                {isSignedIn ? (
                  <div className="border rounded-xl mb-10 border-gray-300 p-4">
                    <h2 className="text-lg font-semibold text-gray-800">Your Booking Details</h2>
                    <p className="text-sm text-gray-500">Claudias place is usually booked. This is a rare find.</p>
                  </div>
                ) : (
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800">Log in or sign up to book</h2>
                    <div className="mt-4">
                      <input type="text" placeholder="Phone number" className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                      <button className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded">Continue</button>
                      
                      <div className="flex justify-center space-x-4 mt-4">
                        <button className="p-2 border rounded text-blue-600 border-blue-600">Facebook</button>
                        <button className="p-2 border rounded text-red-600 border-red-600">Google</button>
                        <button className="p-2 border rounded text-gray-800 border-gray-800">Apple</button>
                      </div>
                      <button className="mt-4 w-full border-gray-500 text-gray-800 border py-2 px-4 rounded hover:bg-pink-600">Continue with Email</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;