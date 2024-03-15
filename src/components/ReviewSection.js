import React from "react";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, ABC Company",
    image: "/images/testimonial-1.jpg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
    commodo.`,
  },
  {
    id: 2,
    name: "John Doe",
    title: "CEO, ABC Company",
    image: "/images/testimonial-2.jpg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
    commodo.`,
  },
  {
    id: 3,
    name: "John Doe",
    title: "CEO, ABC Company",
    image: "/images/testimonial-3.jpg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
    commodo.`,
  },
  // {
  //   id: 4,
  //   name: "John Doe",
  //   title: "CEO, ABC Company",
  //   image: "/images/testimonial-4.jpg",
  //   review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //   Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
  //   commodo.`,
  // },
];

const ReviewSection = () => {
  return (
    <section className="py-12 bg-gray-50 w-full sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionTitle
            title="What our customers say"
            description="We are proud to have served over 1000+ customers in the last 2 years. Here are some of their reviews."
          />

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {data.map((item, id) => (
                <div
                  key={id}
                  className="flex flex-col overflow-hidden shadow-xl
                rounded-2xl"
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <blockquote className="flex-1 ">
                        <p className="text-lg leading-relaxed text-gray-900 ">
                          {item.review}
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 ">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-sm  text-gray-600">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
