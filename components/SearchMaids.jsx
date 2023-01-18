import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

const SearchMaids = () => {
  const [dropDownCountry, setDropDownCountry] = useState(false);
  const [dropDownProfession, setDropDownProfession] = useState(false);
  const [dropDownNationality, setDropDownNationality] = useState(false);
  const dropDownRef = useRef(null);
  useOnClickOutside(dropDownRef, () => {
    setDropDownCountry(false);
    setDropDownProfession(false);
    setDropDownNationality(false);
  });
  return (
    <div className="space-y-10">
      <div className="relative xl:w-[1000px] lg:w-[800px] md:w-[500px] xs:w-[300px] w-[250px] mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
        </div>
        <input
          type="search"
          className="block p-3 xl:w-[1000px] lg:w-[800px] md:w-[500px] xs:w-[300px] w-[250px] pl-10 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-[#D2DFED] focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          placeholder="Search here your desired CV"
        />
      </div>
      <div
        ref={dropDownRef}
        className="xl:max-w-5xl md:max-w-3xl max-w-[300px] mx-auto flex flex-row items-center justify-center lg:space-x-16 md:space-x-10 xxs:space-x-2 space-x-1"
      >
        <div className="relative">
          <button
            onClick={() => setDropDownCountry(!dropDownCountry)}
            className="text-[#234F7E] bg-[#D2DFED] focus:outline-none rounded-lg lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] md:text-base xxs:text-[10px] text-[6px] px-4 py-2.5 text-center inline-flex justify-between items-center"
            type="button"
          >
            Country Status{" "}
            <div className="flex items-center font-light space-x-1">
              <h1 className="text-[#234F7E]">All</h1>
              <ChevronDownIcon className="h-4 w-4 text-[#234F7E]" />
            </div>
          </button>
          <div
            className={
              dropDownCountry
                ? "z-10 absolute right-0 lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                : "hidden"
            }
          >
            <ul
              className="md:py-1 py-0 md:text-sm text-[10px] text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <h1 className="block cursor-pointer md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  lorem
                </h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setDropDownProfession(!dropDownProfession)}
            className="text-[#234F7E] bg-[#D2DFED] focus:outline-none rounded-lg lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] md:text-base xxs:text-[10px] text-[7px] px-4 py-2.5 text-center inline-flex justify-between items-center"
            type="button"
          >
            Profession{" "}
            <div className="flex items-center font-light space-x-1">
              <h1 className="text-[#234F7E]">All</h1>
              <ChevronDownIcon className="h-4 w-4 text-[#234F7E]" />
            </div>
          </button>
          <div
            className={
              dropDownProfession
                ? "z-10 absolute right-0 lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                : "hidden"
            }
          >
            <ul
              className="md:py-1 py-0 md:text-sm text-[10px] text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <h1 className="block cursor-pointer md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  lorem
                </h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setDropDownNationality(!dropDownNationality)}
            className="text-[#234F7E] bg-[#D2DFED] focus:outline-none rounded-lg lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] md:text-base xxs:text-[10px] text-[7px] px-4 py-2.5 text-center inline-flex justify-between items-center"
            type="button"
          >
            Nationality{" "}
            <div className="flex items-center font-light space-x-1">
              <h1 className="text-[#234F7E]">All</h1>
              <ChevronDownIcon className="h-4 w-4 text-[#234F7E]" />
            </div>
          </button>
          <div
            className={
              dropDownNationality
                ? "z-10 absolute right-0 lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                : "hidden"
            }
          >
            <ul
              className="md:py-1 py-0 md:text-sm text-[10px] text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <h1 className="block cursor-pointer md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  lorem
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto flex items-center space-x-10">
        <h1 className="font-roboto text-xl text-[#234F7E]">Experience</h1>
        <div className="space-x-2 flex items-center">
          <input
            type="radio"
            id="default-radio-1"
            value=""
            name="default-radio"
          />
          <label
            className="text-[#234F7E] text-lg font-roboto"
            for="default-radio-1"
          >
            Yes
          </label>
        </div>
        <div className="space-x-2 flex items-center">
          <input
            type="radio"
            id="default-radio-2"
            value=""
            name="default-radio"
          />
          <label className="text-[#234F7E] text-lg font-roboto">No</label>
        </div>
      </div>
      <div className="w-44 mx-auto">
        <button
          type="submit"
          className="text-white w-44 bg-[#234F7E] clickButton font-medium rounded-lg text-sm md:py-2 py-1"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchMaids;
