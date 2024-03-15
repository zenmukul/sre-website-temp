import React from "react";
import Button from "./Button";
import { CiLock } from "react-icons/ci";

const Newsletter = () => {
  return (
    <section className="py-10 w-full">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-8xl">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Get full access to our newsletter
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex-1 w-full  min-w-0 px-4 sm:px-0">
              <label htmlFor="email" className="sr-only" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email to get started"
                className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 border-gray-300 ring-1 ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                required
              />
            </div>
            <Button icon="arrow">Get Access Now</Button>
          </div>
        </form>
        <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
          <CiLock className="flex-shrink-0 w-5 h-5 text-gray-900" />
          <span className="ml-2 text-sm text-gray-600">
            {" "}
            Your data is complely secured with us. We don’t share with anyone.{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
