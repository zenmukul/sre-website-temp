import React from "react";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";
import zenduty from "../assets/zenduty_logo.webp";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Jobs",
    link: "/jobs",
  },
  {
    id: 3,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

const socials = [
  {
    id: 1,
    title: "Twitter",
    link: "https://twitter.com/zenopsys",
    icon: FaTwitter,
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/zenopsys",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    title: "Facebook",
    link: "https://www.facebook.com/zenopsys",
    icon: FaFacebookF,
  },
  {
    id: 5,
    title: "Instagram",
    link: "https://www.instagram.com/zenopsys",
    icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="bottom-0 py-10 sm:py-10 lg:py-16 sm:pt-16 lg:pt-24 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-8xl">
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* <span className="mb-6 sm:mb-0 w-full">
            <Newsletter />
          </span> */}
          <span className="flex flex-col sm:flex-row items-center justify-between w-full">
            <p className="mb-4 sm:mb-0">Site Reliability Engineering</p>
            {/* Navigation Menu */}
            <nav className="text-black mb-4 sm:mb-0">
              <ul className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {data.map((item, id) => (
                  <Link key={id} href={item.link}>
                    <li key={item.id} className="mx-4  tracking-wider">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
            <ul className="flex items-center space-x-3 ">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {React.createElement(social.icon, {
                      className:
                        "w-7 h-auto text-white rounded-md bg-black p-1 transition-all duration-200 hover:scale-105 hover:bg-gray-800",
                    })}
                  </a>
                </li>
              ))}
            </ul>
          </span>
        </div>
        <hr className="mt-10 mb-6 sm:mt-16 sm:mb-10 border-gray-200" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-md text-center text-gray-600 mb-4 sm:mb-0">
            © {new Date().getFullYear()} Site Reliability Engineering. All
            rights reserved.
          </p>
          <p className="text-sm text-center text-gray-600 flex items-center justify-center">
            Powered by
            <a href="https://www.zenduty.com">
              <Image src={zenduty} width={140} height={50} alt="Zenduty" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
