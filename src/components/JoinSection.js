import React from "react";
import Button from "./Button";

const JoinSection = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-8xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt=""
              />
            </div>
            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                alt=""
              />
            </div>
            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                alt=""
              />
            </div>
          </div>
          <h2 className="mt-8 text-3xl font-bold leading-snug text-black lg:mt-12 sm:text-4xl lg:text-5xl">
            Join{" "}
            <span
              className="text-blue-600
            "
            >
              5,482+
            </span>{" "}
            developers around the world
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
          <Button className="mt-8 sm:mt-10" icon="slack" reverse>
            Join Slack
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
