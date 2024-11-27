// pages/cancellation.js
import React from 'react';
import Head from 'next/head';

const Cancellation = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Head>
        <title>Cancellation Policy</title>
      </Head>
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-6">Cancellation Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
          </p>
          <h2 className="text-2xl font-bold mb-4">1. Cancellation by Customer</h2>
          <p className="mb-4">
            Customers may cancel their reservation up to 24 hours before the scheduled event for a full refund.
          </p>
          <h2 className="text-2xl font-bold mb-4">2. Cancellation by Us</h2>
          <p className="mb-4">
            We reserve the right to cancel any event due to low enrollment or other circumstances which would make the event non-viable.
          </p>
          <h2 className="text-2xl font-bold mb-4">3. Refund Policy</h2>
          <p className="mb-4">
            If an event is canceled, customers will be offered a full refund or the option to transfer to another event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cancellation;
