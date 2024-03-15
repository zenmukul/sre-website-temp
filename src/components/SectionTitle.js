import React from "react";

const SectionTitle = ({ title, description, align }) => {
  return (
    <div
      className={`max-w-2xl mx-auto mb-4 ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      <h2 className="text-3xl font-bold leading-normal text-black sm:text-4xl lg:text-4xl">
        {title}
      </h2>
      <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
