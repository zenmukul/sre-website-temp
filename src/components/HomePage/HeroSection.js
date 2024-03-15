import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";
import { BsSlack } from "react-icons/bs";

const HeroSection = () => {
  return (
    <SectionWrapper>
      <div className="overflow-x-hidden bg-gray-50 pb-8 md:pb-52">
        <div className="py-4 md:py-6" x-data="{expanded: false}"></div>
        <section className="pt-6 sm:pt-12 lg:pt-16 bg-gray-50">
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-lg font-inter sm:text-xl lg:text-2xl text-gray-600">
                For SREs, By SREs
              </h1>
              <p className="mt-3 md:text-6xl font-bold leading-tight text-gray-900 sm:leading-tight text-3xl lg:leading-tight  flex flex-col gap-2 items-center justify-center">
                The Global Home for <br />
                <span className="relative inline-flex sm:inline">
                  <span
                    className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-xl filter opacity-80 w-full px-96 -ml-6 h-full absolute inset-0 group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-pulse
                    rounded-full
                  "
                  />
                  <span className="relative whitespace-nowrap">
                    Site Reliability Engineers
                  </span>
                </span>
              </p>
              <div className="md:px-4 mt-8 px-0 flex gap-4 justify-center lg:px-0">
                <Button
                  variant="normal"
                  override=" mr-2 lg:mr-4
                  inline-flex items-center justify-center w-1/2  md:px-8 py-2 md:py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:ring-offset-gray-50"
                >
                  Join Slack
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
