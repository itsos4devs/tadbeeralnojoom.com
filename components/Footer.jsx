import Image from "next/image";
import React from "react";
import icon from "../public/icon.png";
const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10">
      {/* Newsletters */}
      <div className="bg-[#234F7E] h-52 flex items-center justify-center space-x-20">
        <h1 className="text-white text-4xl font-roboto font-normal">
          Subscribe Newsletters
        </h1>
        <div className="relative">
          <input
            className="w-[450px] px-5 py-4 rounded-lg focus:outline-blue-500"
            type="email"
          />
          <button className="absolute right-5 top-2 clickButton bg-[#0081FE] px-5 py-2 rounded-xl text-white">
            Subscribe now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-20">
        <div className="flex space-x-16">
          <h3 className="text-gray-700 cursor-pointer">About us</h3>
          <h3 className="text-gray-700 cursor-pointer">Our Services</h3>
          <h3 className="text-gray-700 cursor-pointer">Our Team</h3>
          <h3 className="text-gray-700 cursor-pointer">Contact Us</h3>
        </div>
        <div>
          <h1>hgi</h1>
        </div>
      </div>
      <hr className="my-8 h-px bg-gray-200 border-0 mt-14" />
      <div className="flex items-center justify-between">
        <Image src={icon} alt="Icon" width={36} height={50} />
        <div className="flex space-x-5">
          <h3 className="text-gray-700 cursor-pointer text-sm">
            Terms of Service
          </h3>
          <h3 className="text-gray-700 cursor-pointer text-sm">
            Privacy Policy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
