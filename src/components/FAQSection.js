import React from "react";
import SectionTitle from "./SectionTitle";
import { Disclosure } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";

const faqs = [
  {
    question: "How to create an account?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    question: "How can I make payment using Paypal?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit do amet sint. Velit officia consequat duis enim velit mollit.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-10 w-full bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-8xl">
        <SectionTitle
          title="Frequently Asked Questions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={index}>
              {({ open }) => (
                <React.Fragment>
                  <Disclosure.Button
                    className="transition-all rounded-xl duration-200 bg-white border border-gray-200  cursor-pointer hover:bg-gray-50 flex items-center text-left justify-between w-full px-4 py-5 sm:p-4
                   
                  "
                  >
                    <span className="flex text-sm md:text-lg font-semibold text-black">
                      {faq.question}
                    </span>
                    <BsChevronUp
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-4 h-4 text-gray-400`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 md:px-4 md:py-2 mt-4 bg-gray">
                    <p className=" text-sm md:text-base text-gray-500">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </React.Fragment>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
