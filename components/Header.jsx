import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/logo.png";
import {
  ChevronDownIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useRouter } from "next/router";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef(null);
  useOnClickOutside(dropDownRef, () => setDropDown(false));
  const router = useRouter();
  return (
    <div className="bg-[#000]/50 md:h-[71px] h-[30px] absolute left-0 right-0">
      <div className="flex justify-between items-center xl:max-w-[1500px] lg:max-w-[1000px] md:max-w-[750px] sm:max-w-[400px] max-w-[300px] m-auto h-full">
        {/* Logo */}
        <div className="md:w-40 md:h-10 sm:w-12 w-10">
          <Image
            src={logo}
            alt="LOGO"
            width={151}
            height={40}
            className="rounded-lg cursor-pointer"
            onClick={() =>
              router.push({
                pathname: "/",
              })
            }
            priority
          />
        </div>
        {/* Pages */}
        <div className="flex xl:space-x-12 lg:space-x-6 md:space-x-3 space-x-2">
          <h1 className="text-white md:text-base sm:text-[10px] text-[7px] cursor-pointer select-none">
            Home
          </h1>
          <h1 className="text-white md:text-base sm:text-[10px] text-[7px] cursor-pointer select-none">
            About Us
          </h1>
          <h1 className="text-white md:text-base sm:text-[10px] text-[7px] cursor-pointer select-none">
            Our Team
          </h1>
          <h1 className="text-white md:text-base sm:text-[10px] text-[7px] cursor-pointer select-none">
            Services
          </h1>
          <h1 className="text-white md:text-base sm:text-[10px] text-[7px] cursor-pointer select-none">
            Contact Us
          </h1>
        </div>
        {/* Phone */}
        <div className="flex items-center lg:space-x-5 md:space-x-2 space-x-1 relative">
          {/* Language Dropdown */}
          <div>
            <div
              className="flex items-center hover:cursor-pointer space-x-1 select-none relative"
              onClick={() => setDropDown(!dropDown)}
              ref={dropDownRef}
            >
              <h1 className="text-white md:text-base sm:text-[10px] text-[7px]">
                EN
              </h1>
              <ChevronDownIcon className="md:h-4 md:w-4 h-2 w-2 text-white" />
              <div
                className={
                  dropDown
                    ? "z-10 absolute top-7 w-fit bg-white rounded divide-y divide-gray-100 shadow"
                    : "hidden"
                }
              >
                <ul className="text-sm text-gray-700">
                  <li onClick={() => window.location.reload()}>
                    <a className="font-semibold block md:py-2 md:px-4 py-0.5 px-2 cursor-pointer select-none md:text-base text-[10px]">
                      AR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <PhoneArrowUpRightIcon className="lg:h-5 md:h-4 lg:w-5 md:w-4 sm:w-2 w-1.5 sm:h-2 h-1.5 text-white cursor-pointer" />
          <h1 className="text-white md:text-base sm:text-[10px] text-[6px]">
            0504664093
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
