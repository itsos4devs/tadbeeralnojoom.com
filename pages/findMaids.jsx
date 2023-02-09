/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Banner from "../components/Banner";
import Maids from "../components/Maids";
import findMaid from "../public/findMaids.jpeg";
import maidPhoto from "../public/maidPhoto.png";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import SearchMaids from "../components/SearchMaids";
import withAuth from "../auth/withAuth";
import axios from "axios";
import { useRef, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useOnClickOutside } from "usehooks-ts";
const findMaids = ({ data }) => {
  const { t, i18n } = useTranslation();

  // DropDown
  const [dropDownCountry, setDropDownCountry] = useState(false);
  const [dropDownProfession, setDropDownProfession] = useState(false);
  const [dropDownNationality, setDropDownNationality] = useState(false);
  const dropDownRef = useRef(null);
  useOnClickOutside(dropDownRef, () => {
    setDropDownCountry(false);
    setDropDownProfession(false);
    setDropDownNationality(false);
  });

  const [nationalities, setNationalities] = useState([]);
  const [nationality, setNationality] = useState("all");
  const [experience, setExperience] = useState("all");

  // gather all nationalities and fix typo errors
  function getUniqueListBy(arr) {
    const ids = arr.map((o) => {
      if (o.nationality.toLowerCase() === "ethiopia") {
        return "ethiopian";
      }
      if (o.nationality.toLowerCase() === "indoneasia") {
        return "indonesia";
      } else {
        return o.nationality.toLowerCase();
      }
    });
    return ids.filter((item, index) => ids.indexOf(item) === index);
  }

  useEffectOnce(() => {
    setNationalities(getUniqueListBy(data));
  });

  return (
    <div>
      <Head>
        <title>Find Maids / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Banner
        imageSrc={findMaid}
        imageUlt="find Maids banner"
        text1={t("findMaid")}
        textPosition={
          "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      />
      {/* Search Maid */}
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto md:space-y-20 sm:space-y-8 space-y-5 md:mb-44 mb-16">
        <div className="text-center xl:mt-36 md:mt-20 mt-10 space-y-2">
          <h1 className="text-[#E48100] font-lato font-bold lg:text-5xl md:text-3xl text-xl">
            {t("findMaidTitle")}
          </h1>
          <p className="md:w-[500px] sm:w-[300px] w-[250px] md:text-sm sm:text-xs text-[10px] mx-auto">
            Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
            nostrud oratio aperiri legimus eu.
          </p>
        </div>
        <div className="space-y-10 select-none">
          <div
            ref={dropDownRef}
            className="xl:max-w-5xl md:max-w-3xl max-w-[300px] mx-auto flex flex-row items-center justify-center lg:space-x-16 md:space-x-10 xxs:space-x-2 space-x-1"
          >
            {/* Country Status */}
            <div className="relative">
              <button
                onClick={() => {
                  setDropDownCountry(!dropDownCountry);
                }}
                className={`text-[#234F7E] bg-[#D2DFED] focus:outline-none rounded-lg lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] md:text-base xxs:text-[10px] text-[6px] px-4 py-2.5 text-center flex ${
                  i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                } justify-between items-center`}
                type="button"
              >
                {i18n.language === "ar" ? "حالة البلد" : "Country Status"}
                <div
                  className={`flex ${
                    i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                  } items-center font-light space-x-1`}
                >
                  <h1 className="text-[#234F7E] ml-1">
                    {i18n.language === "ar" ? "الجميع" : "All"}
                  </h1>
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
            {/* Profession */}
            <div className="relative">
              <button
                onClick={() => setDropDownProfession(!dropDownProfession)}
                className={`text-[#234F7E] bg-[#D2DFED] focus:outline-none rounded-lg lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] md:text-base xxs:text-[10px] text-[6px] px-4 py-2.5 text-center flex ${
                  i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                } justify-between items-center`}
                type="button"
              >
                {i18n.language === "ar" ? "المهنة" : "Profession "}
                <div
                  className={`flex ${
                    i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                  } items-center font-light space-x-1`}
                >
                  <h1 className="text-[#234F7E] ml-1">
                    {i18n.language === "ar" ? "الجميع" : "All"}
                  </h1>
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
            {/* Nationality */}
            <div className="relative">
              <button
                onClick={() => setDropDownNationality(!dropDownNationality)}
                className={`text-[#234F7E] bg-[#D2DFED] focus:outline-none rounded-lg lg:w-[280px] md:w-[200px] xxs:w-[130px] w-[100px] md:text-base xxs:text-[10px] text-[6px] px-4 py-2.5 text-center flex ${
                  i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                } justify-between items-center`}
                type="button"
              >
                {i18n.language === "ar" ? "الجنسية" : "Nationality"}
                <div
                  className={`flex ${
                    i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                  } items-center font-light space-x-1`}
                >
                  <h1 className="text-[#234F7E] ml-1">
                    {i18n.language === "ar" ? "الجميع" : "All"}
                  </h1>
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
                    <h1
                      onClick={(e) => {
                        setNationality(e.target.outerText);
                        setDropDownNationality(false);
                      }}
                      className="block cursor-pointer md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      All
                    </h1>
                  </li>
                  {nationalities.map((item, index) => (
                    <li key={index}>
                      <h1
                        onClick={(e) => {
                          setNationality(e.target.outerText);
                          setDropDownNationality(false);
                        }}
                        className="block first-letter:uppercase cursor-pointer md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item}
                      </h1>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`w-fit mx-auto flex items-center space-x-10 ${
              i18n.language === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <h1 className="font-roboto font-bold text-xl text-[#234F7E] ml-8">
              {i18n.language === "ar" ? ":الخبرة" : "Experience:"}
            </h1>
            <div
              className={`space-x-2 flex items-center ${
                i18n.language === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <input
                className="ml-2"
                type="radio"
                id="default-radio-1"
                value="experienced"
                name="default-radio"
                onChange={(e) => setExperience(e.target.value)}
              />
              <label
                className="text-[#234F7E] text-lg font-roboto"
                htmlFor="default-radio-1"
              >
                {i18n.language === "ar" ? "خبير" : "Experienced"}
              </label>
            </div>
            <div
              className={`space-x-2 flex items-center ${
                i18n.language === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <input
                className="ml-2"
                type="radio"
                id="default-radio-2"
                value="beginner"
                name="default-radio"
                onChange={(e) => setExperience(e.target.value)}
              />
              <label
                htmlFor="default-radio-2"
                className="text-[#234F7E] text-lg font-roboto"
              >
                {i18n.language === "ar" ? "مبتدئ" : "Beginner"}
              </label>
            </div>
            <div
              className={`space-x-2 flex items-center ${
                i18n.language === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <input
                className="ml-2"
                type="radio"
                id="default-radio-3"
                value="all"
                name="default-radio"
                defaultChecked
                onChange={(e) => setExperience(e.target.value)}
              />
              <label
                htmlFor="default-radio-3"
                className="text-[#234F7E] text-lg font-roboto"
              >
                {i18n.language === "ar" ? "الكل" : "All"}
              </label>
            </div>
          </div>
        </div>
        <Maids
          data={data}
          nationalityFilter={nationality}
          experience={experience}
        />
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(findMaids);

export async function getStaticProps(context) {
  const options = {
    method: "GET",
    url: "https://alnujoomerp.net/api/v1/Maids",
    params: { "api-key": "8o0884ws88kkoc484k4s8kg0o04okockk0k0gwso" },
  };

  const res = await axios.request(options);
  return {
    props: {
      data: res.data.response,
    },
  };
}
