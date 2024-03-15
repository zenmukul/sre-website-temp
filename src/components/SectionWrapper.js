import React from 'react';

const SectionWrapper = ({ children, className }) => {
  return <section className={`w-full ${className}`}>{children}</section>;
};

export default SectionWrapper;
