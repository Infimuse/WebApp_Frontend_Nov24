"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from "react-icons/fa";


const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (
    date: Date | null,
    event?: React.MouseEvent | React.KeyboardEvent
  ) => {
    console.log(event)
    if (date) {
      setStartDate(date);
      setShowDatePicker(false); // Hide date picker after selecting a date
    }
  };


  return (
    <div className="flex flex-col items-center justify-center md:mt-20 text-black w-full relative">
      {/* First row with This Week and Next Week buttons */}
      <div className="flex items-center justify-center space-x-4 mb-3">
        <button className="px-10 py-2 bg-gray-100 hover:bg-[#bb2460] hover:text-white whitespace-nowrap rounded-full">
          This Week
        </button>
        <button className="px-5 py-2 bg-gray-100 hover:bg-[#bb2460] hover:text-white whitespace-nowrap rounded-full">
          Next Week
        </button>
        <button
          className="flex items-center px-6 py-2 bg-gray-100 hover:bg-gray-200 hover:text-black whitespace-nowrap rounded-full"
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <span>Select a date</span>
          <FaCalendarAlt className="ml-2" />
        </button>
        <button className="px-9 py-2 bg-gray-100 hover:bg-[#bb2460] hover:text-white whitespace-nowrap rounded-full">
          Reset
        </button>
      </div>

      {/* Date Picker */}
      {showDatePicker && (
        <div className="absolute top-24 z-50 bg-white rounded-lg shadow-lg mt-2">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            inline
            className="bg-white rounded-lg shadow-lg w-64"
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerComponent;
