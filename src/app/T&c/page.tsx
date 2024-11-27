// pages/terms.js
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <><Navbar /><div className="min-h-screen bg-gray-100 py-12 text-black">
          <Head>
              <title>Terms and Conditions</title>
          </Head>
          <div className="container mx-auto px-6 md:px-12">
              <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
              <div className="bg-white p-8 rounded-lg shadow-md">
                  <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="mb-4">
                      These terms and conditions outline the rules and regulations for the use of our website.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
                  <p className="mb-4">
                      Other than the content you own, under these terms, we own all the intellectual property rights.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">3. Restrictions</h2>
                  <p className="mb-4">
                      You are specifically restricted from publishing any website material in any other media.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
                  <p className="mb-4">
                      In no event shall we, nor any of our officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
                  </p>
              </div>
          </div>
      </div><Footer /></>
  );
};

export default Terms;
