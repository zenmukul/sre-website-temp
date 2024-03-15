import { Menu, Transition } from "@headlessui/react";
import { PopupButton } from "@typeform/embed-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronUp, BsMenuButton, BsTelephoneFill } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";

export default function MobileMenu({ className }) {
  return (
    <div className={`w-56 mb-4 text-right ${className}`}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black px-2 py-2 text-sm font-medium text-white">
            <AiOutlineMenu
              className="h-5 w-5  text-white hover:text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <a href="/blog">About</a>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <a href="/jobs">Jobs</a>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <PopupButton
                    id="bemaJKpJ"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    hideHeaders={true}
                    hideFooter={true}
                  >
                    Contact
                  </PopupButton>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
