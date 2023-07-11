"use client";
import React, { useState, useRef } from "react";

const Timeline = ({ items }) => {
  if (!items) {
    throw new Error("ITEMS IS NOT DEFINED");
  }
  const scrollContainerRef = useRef(null);
  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowAllItems = () => {
    setShowAllItems((prevValue) => !prevValue);
  };

  const scrollToNext = () => {
    scrollContainerRef.current.scrollTop += 200;
  };

  return (
    <div className="relative flex items-center justify-center ">
      <div className="w-full h-96 overflow-y-scroll" ref={scrollContainerRef}>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex mb-6 bg-white rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0 w-64 bg-gray-200 py-2 px-4">
              <p className="text-gray-600">{item.timestamp}</p>
            </div>
            <div className="flex-grow py-2 px-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
        {!showAllItems && (
          <div className="flex justify-center py-4">
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={toggleShowAllItems}
            >
              Show More
            </button>
          </div>
        )}
      </div>
      {showAllItems && (
        <button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full p-2 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none"
          onClick={scrollToNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Timeline;
