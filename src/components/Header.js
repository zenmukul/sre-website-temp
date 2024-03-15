import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import SRELogo from "../assets/logo-sre.svg";
import Image from "next/image";
import { PopupButton } from "@typeform/embed-react";
import { BsPhoneFill, BsTelephone, BsTelephoneFill } from "react-icons/bs";

const data = [
  // {
  //   id: 1,
  //   title: 'Home',
  //   link: '/',
  // },
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
  // {
  //   id: 4,
  //   type: "popup",
  //   title: "Contact",
  //   link: "/contact",
  // },
];

const Header = ({ isHomePage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-gray-50 top-0 relative w-full pt-2 border-gray-100 flex flex-col justify-center items-center pb-4`}
    >
      <div className="w-full max-w-8xl px-2">
        <div className="flex items-center justify-between">
          {/* Logo Image */}
          <Link
            href="/"
            className="
          flex items-center justify-center gap-2 font-bold text-xs md:text-md tracking-wider
          "
          >
            <Image
              src={SRELogo}
              alt="sre Logo"
              width={!isMobile ? 80 : 60}
              height={!isMobile ? 80 : 60}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out 
              "
            />
            <p
              className="
            border-l border-gray-600 pl-2 md:text-base text-black font-bold tracking-wider
            "
            >
              Site Reliability Engineering
            </p>
          </Link>

          {/* Hamburger Menu (for mobile) */}

          <MobileMenu
            className={`${
              isMobile ? "" : "hidden"
            } lg:hidden z-50 self-end focus:outline-none`}
          />

          {/* Navigation Menu */}
          <nav
            className={`${
              isMobile ? "hidden" : ""
            } lg:block text-black w-full lg:w-auto`}
          >
            <ul className="flex justify-center items-center gap-6">
              {data.map((item, id) => (
                <Link key={id} href={item.link}>
                  <li
                    key={item.id}
                    className="mx-4 hover:underline font-medium tracking-wider"
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
              <li>
                <PopupButton
                  id="bemaJKpJ"
                  className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full items-center flex gap-2"
                  size={60}
                  hideHeaders={true}
                  hideFooter={true}
                >
                  <BsTelephoneFill className="inline-block" />
                  Contact
                </PopupButton>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
