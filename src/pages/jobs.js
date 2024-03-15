import React from "react";
import Layout from "../components/Layout";
import JobListings from "../components/JobListings";

const jobs = () => {
  return (
    <>
      <Layout title="Jobs" description="Jobs" isHomePage={true}>
        <section className="relative bg-white overflow-hidden max-w-8xl w-full">
          <JobListings />
        </section>
      </Layout>
    </>
  );
};

export default jobs;
