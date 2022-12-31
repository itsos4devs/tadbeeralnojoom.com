import Image from "next/image";
import React from "react";
import icon from "../public/icon.png";
const Footer = () => {
  return (
    <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-[300px] mx-auto mb-10 relative">
      {/* Newsletters */}
      <div className="bg-[#234F7E] xl:h-52 lg:h-44 md:h-36 h-20 flex items-center justify-center md:space-x-20 space-x-5">
        <h1 className="text-white xl:text-4xl lg:text-3xl md:text-xl sm:text-xs text-[10px] font-roboto font-normal">
          Subscribe Newsletters
        </h1>
        <div className="relative">
          <input
            className="lg:w-[450px] md:w-[300px] sm:w-[200px] w-[150px] px-5 md:py-4 md:text-base text-xs py-1 rounded-lg focus:outline-blue-500"
            type="email"
          />
          <button className="absolute md:right-5 right-1 lg:top-2 md:top-3 top-1.5 clickButton bg-[#0081FE] lg:px-5 md:px-3 lg:py-2 md:py-1 px-2 md:text-lg sm:text-[10px] text-[8px] py-0.5 rounded-xl text-white">
            Subscribe now
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-20">
        <div className="flex lg:space-x-16 md:space-x-8 space-x-4">
          <h3 className="text-gray-700 md:text-base sm:text-xs text-[8px] cursor-pointer">
            About us
          </h3>
          <h3 className="text-gray-700 md:text-base sm:text-xs text-[8px] cursor-pointer">
            Our Services
          </h3>
          <h3 className="text-gray-700 md:text-base sm:text-xs text-[8px] cursor-pointer">
            Our Team
          </h3>
          <h3 className="text-gray-700 md:text-base sm:text-xs text-[8px] cursor-pointer">
            Contact Us
          </h3>
        </div>
        {/* Icons */}
        <div className="flex md:space-x-5 space-x-2 items-center">
          {/* Linked in */}
          <div className="bg-[#234F7E]/25 p-2 rounded-full text-[#234F7E] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="md:w-5 sm:w-2 w-1 md:h-5 sm:h-2 h-1"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </div>
          {/* Facebook */}
          <div className="bg-[#234F7E]/25 p-2 rounded-full text-[#234F7E] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="md:w-5 sm:w-2 w-1 md:h-5 sm:h-2 h-1"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </div>
          {/* Twitter */}
          <div className="bg-[#234F7E]/25 p-2 rounded-full text-[#234F7E] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="md:w-5 sm:w-2 w-1 md:h-5 sm:h-2 h-1"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
          </div>
        </div>
      </div>

      <hr className="my-8 h-px bg-gray-200 border-0 md:mt-14 mt-5" />

      {/* bottom */}
      <div className="flex items-center justify-between">
        <div className="md:w-9 md:h-9 sm:w-6 sm:h-6 w-4 h-4">
          <Image src={icon} alt="Icon" width={36} height={50} />
        </div>
        <div className="flex space-x-5">
          <h3 className="text-gray-700 sm:text-[10px] cursor-pointer md:text-sm text-[8px]">
            Terms of Service
          </h3>
          <h3 className="text-gray-700 sm:text-[10px] cursor-pointer md:text-sm text-[8px]">
            Privacy Policy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
