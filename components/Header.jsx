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
    <div className="bg-[#000]/50 h-[71px] absolute left-0 right-0">
      <div className="flex justify-between items-center max-w-[1500px] m-auto h-full">
        {/* Logo */}
        <div>
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
        <div className="flex space-x-12">
          <h1 className="text-white text-base cursor-pointer select-none">
            Home
          </h1>
          <h1 className="text-white text-base cursor-pointer select-none">
            About Us
          </h1>
          <h1 className="text-white text-base cursor-pointer select-none">
            Our Team
          </h1>
          <h1 className="text-white text-base cursor-pointer select-none">
            Services
          </h1>
          <h1 className="text-white text-base cursor-pointer select-none">
            Contact Us
          </h1>
        </div>
        {/* Phone */}
        <div className="flex items-center space-x-5 relative">
          {/* Language Dropdown */}
          <div>
            <div
              className="flex items-center hover:cursor-pointer space-x-1 select-none relative"
              onClick={() => setDropDown(!dropDown)}
              ref={dropDownRef}
            >
              <h1 className="text-white">EN</h1>
              <ChevronDownIcon className="h-4 w-4 text-white" />
              <div
                className={
                  dropDown
                    ? "z-10 absolute top-7 w-fit bg-white rounded divide-y divide-gray-100 shadow"
                    : "hidden"
                }
              >
                <ul className="text-sm text-gray-700">
                  <li onClick={() => window.location.reload()}>
                    <a className="font-semibold block py-2 px-4 cursor-pointer select-none">
                      AR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <PhoneArrowUpRightIcon className="h-5 w-5 text-white cursor-pointer" />
          <h1 className="text-white">0504664093</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
