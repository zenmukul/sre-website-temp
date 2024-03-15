import React from "react";
import SectionTitle from "./SectionTitle";

const StatsSection = () => {
  const data = [
    {
      title: "Happy Clients",
      value: "1000+",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Projects Completed",
      value: "1000+",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Awards Won",
      value: "1000+",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 w-full">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Stats"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold text-4xl">
                <span className="text-transparent bg-clip-text opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]">
                  {item.value}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                {item.title}
              </p>
              <p className="text-xs mt-0.5 text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
