import React, { useState } from "react";
// import GoogleLogo from "./google-logo.png";
// import AmazonLogo from "./amazon-logo.png";
// import MicrosoftLogo from "./microsoft-logo.png";
// import FacebookLogo from "./facebook-logo.png";

const jobListings = [
  {
    title: "Senior Site Reliability Engineer",
    company: "Google",
    role: "SRE",
    // logo: GoogleLogo,
  },
  {
    title: "Infrastructure Engineer",
    company: "Amazon",
    role: "Infrastructure",
    // logo: AmazonLogo,
  },
  {
    title: "DevOps Engineer",
    company: "Microsoft",
    role: "SRE",
    // logo: MicrosoftLogo,
  },
  {
    title: "Site Reliability Engineer",
    company: "Facebook",
    role: "SRE",
    // logo: FacebookLogo,
  },
];

const filterNames = jobListings.reduce((acc, job) => {
  if (!acc.includes(job.role)) {
    acc.push(job.role);
  }
  return acc;
}, []);

const Sidebar = ({ handleFilterChange, handleClearAll }) => {
  const [mounted, setMounted] = useState(true);
  return (
    <div className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl md:w-1/4 w-full p-6 mt-6 mx-5">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="flex flex-col space-y-2">
        {mounted && (
          <ul>
            {filterNames.map((filterName, key) => (
              <li className="w-full">
                <label key={filterName} className="flex items-center space-x-2">
                  <input
                    key={key}
                    type="checkbox"
                    name={filterName}
                    onChange={handleFilterChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <span>{filterName}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handleClearAll();
            setMounted(!mounted);
            setTimeout(() => {
              setMounted(true);
            }, 0);
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

const JobCard = ({ title, company, role, logo }) => {
  return (
    <div
      className="bg-white shadow-sm rounded-lg py-6 px-4 w-full
   curosr-pointer border border-gray-200 
    hover:border-blue-500
    "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/10/05201459/Microsoft.png"
            alt={`${company} logo`}
            className="w-12 h-12 object-contain m-0 p-0"
          />
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-700">{company}</p>
          </div>
        </div>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const MainArea = ({ filteredJobs }) => {
  return (
    <div className="flex flex-wrap px-6 w-full gap-4">
      <h2 className="text-2xl font-bold mb-4">Job Openings</h2>
      {filteredJobs.map((job) => (
        <div key={job.title} className="w-full">
          <JobCard
            title={job.title}
            company={job.company}
            role={job.role}
            // logo={job.logo}
          />
        </div>
      ))}
    </div>
  );
};

const JobListings = () => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.name]);
    } else {
      setFilters(filters.filter((f) => f !== e.target.name));
    }
  };

  const handleClearAll = () => {
    setFilters([]);
  };

  const filteredJobs =
    filters.length > 0
      ? jobListings.filter((job) => filters.includes(job.role))
      : jobListings;

  return (
    <div
      className="md:flex-row-reverse md:flex md:my-8
    md:space-x-4 md:space-y-0 space-y-4
    "
    >
      <Sidebar
        handleFilterChange={handleFilterChange}
        handleClearAll={handleClearAll}
      />
      <MainArea filteredJobs={filteredJobs} />
    </div>
  );
};

export default JobListings;
