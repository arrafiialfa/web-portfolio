"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const Timeline = ({ items, useScrollButton = false }) => {
  if (!items) {
    throw new Error("ITEMS IS NOT DEFINED");
  }
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToNext = () => {
    if (activeIndex === items.length - 1) {
      scrollContainerRef.current.scrollTo(0, 0);
      setActiveIndex(0);
    } else {
      setActiveIndex((prevIndex) => prevIndex + 1);
      scrollContainerRef.current.scrollTop += 200;
    }
  };

  return (
    <div className="relative flex items-center justify-center ">
      <div
        className="w-full overflow-y-scroll  scrollbar-hide"
        ref={scrollContainerRef}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex mb-4 flex-wrap sm:flex-nowrap bg-white rounded-lg shadow-lg hover:bg-slate-50"
          >
            <div className="flex-shrink-0 w-64 bg-gray-200 sm:rounded-s-lg   py-2 px-4">
              <p className="text-gray-600">{item.timestamp}</p>
            </div>
            <div className="flex-grow py-2 px-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-gray-500 text-justify">
                {item.description}
              </p>
              <div className="text-right text-sm font-semibold text-blue-700 cursor-pointer">
                See Details
              </div>
            </div>
          </div>
        ))}
      </div>
      {useScrollButton && (
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
