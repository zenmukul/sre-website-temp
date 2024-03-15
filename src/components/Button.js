import Link from "next/link";
import React from "react";

const Button = ({ children, icon, reverse, className, variant, override }) => {
  return variant === "outline" ? (
    <a
      href="#"
      title
      className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
      role="button"
    >
      Podcast
    </a>
  ) : variant === "normal" ? (
    <a
      href="#"
      title
      className={`${
        override
          ? override
          : `inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${className}`
      }`}
      role="button"
    >
      {children}
    </a>
  ) : (
    <button className={`relative inline-flex group ${className}`}>
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-md blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-pulse"></div>
      <a
        href="#"
        title=""
        className={`relative  items-center justify-center px-4 py-3 border border-gray-900  text-lg font-bold text-white transition-all duration-200 bg-gray-900  rounded-md focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-gray-900 ${
          reverse ? "flex-row-reverse flex gap-2" : "inline-flex"
        }`}
        role="button"
      >
        {children}{" "}
        {icon !== "slack" ? (
          <>
            <svg
              className="w-5 h-5 ml-3 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </>
        ) : (
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </a>
    </button>
  );
};

export default Button;
