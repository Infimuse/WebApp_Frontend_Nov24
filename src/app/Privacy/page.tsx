// pages/privacy.js
import React from 'react';
import Head from 'next/head';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 text-gray-900">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
          </p>
          <h2 className="text-2xl font-bold mb-4">1. Information Collection</h2>
          <p className="mb-4">
            We collect information from you when you register on our site or fill out a form.
          </p>
          <h2 className="text-2xl font-bold mb-4">2. Information Use</h2>
          <p className="mb-4">
            Any of the information we collect from you may be used to personalize your experience and improve our website.
          </p>
          <h2 className="text-2xl font-bold mb-4">3. Information Protection</h2>
          <p className="mb-4">
            We implement a variety of security measures to maintain the safety of your personal information.
          </p>
          <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
          <p className="mb-4">
            We use cookies to understand and save your preferences for future visits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
