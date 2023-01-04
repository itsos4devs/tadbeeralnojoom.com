import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../public/logo.png";
import profile from "../public/profile.png";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef(null);
  useOnClickOutside(dropDownRef, () => setDropDown(false));
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#000]/50 md:h-[71px] h-[30px] absolute left-0 right-0">
      <div className="flex justify-between items-center xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px] sm:max-w-[400px] max-w-[300px] m-auto h-full">
        {/* Logo */}
        <div className="md:w-32 md:h-10 sm:w-12 w-10">
          <Image
            src={logo}
            alt="LOGO"
            width={151}
            height={40}
            className="rounded-lg cursor-pointer select-none"
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
          <h1
            className="text-white md:text-base sm:text-[10px] text-[5px] cursor-pointer select-none"
            onClick={() =>
              router.push({
                pathname: i18n.language === "ar" ? "" : "/",
              })
            }
          >
            {i18n.language === "ar" ? t("contact") : t("home")}
          </h1>
          <h1 className="text-white md:text-base sm:text-[10px] text-[5px] cursor-pointer select-none">
            {i18n.language === "ar" ? t("services") : t("about")}
          </h1>
          <h1 className="text-white md:text-base sm:text-[10px] text-[5px] cursor-pointer select-none">
            {t("team")}
          </h1>
          <h1
            onClick={() =>
              router.push({
                pathname: i18n.language === "ar" ? "" : "/ourServices",
              })
            }
            className="text-white md:text-base sm:text-[10px] text-[5px] cursor-pointer select-none"
          >
            {i18n.language === "ar" ? t("about") : t("services")}
          </h1>
          <h1 className="text-white md:text-base sm:text-[10px] text-[5px] cursor-pointer select-none">
            {i18n.language === "ar" ? t("home") : t("contact")}
          </h1>
        </div>
        {/* Phone */}
        <div className="flex items-center lg:space-x-5 md:space-x-2 space-x-1 relative">
          {/* Language Dropdown */}
          {/* <div>
            <div
              className="flex items-center hover:cursor-pointer space-x-1 select-none relative"
              onClick={() => setDropDown(!dropDown)}
              ref={dropDownRef}
            >
              <h1 className="text-white md:text-base sm:text-[10px] text-[7px]">
                {i18n.language.toUpperCase()}
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
                  <li
                    onClick={() =>
                      i18n.language === "ar"
                        ? i18n.changeLanguage("en")
                        : i18n.changeLanguage("ar")
                    }
                  >
                    <a className="font-semibold block md:py-2 md:px-4 py-0.5 px-2 cursor-pointer select-none md:text-base text-[10px]">
                      {i18n.language === "ar" ? "EN" : "AR"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {/* Language change */}
          <div className="flex space-x-1 md:space-x-2">
            <h1
              className={
                i18n.language === "en"
                  ? "text-[5px] md:text-base cursor-pointer text-yellow-500"
                  : "text-white text-[5px] md:text-base cursor-pointer hover:text-yellow-500"
              }
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </h1>
            <h1 className="text-white text-[5px] md:text-base">|</h1>
            <h1
              className={
                i18n.language === "ar"
                  ? "text-[5px] md:text-base cursor-pointer text-yellow-500"
                  : "text-white text-[5px] md:text-base cursor-pointer hover:text-yellow-500"
              }
              onClick={() => i18n.changeLanguage("ar")}
            >
              AR
            </h1>
          </div>
          <PhoneArrowUpRightIcon className="lg:h-5 md:h-4 lg:w-5 md:w-4 sm:w-2 w-1.5 sm:h-2 h-1.5 text-white cursor-pointer" />
          <h1 className="text-white md:text-base sm:text-[10px] text-[5px]">
            0504664093
          </h1>
          <div className="relative" ref={dropDownRef}>
            <div className="w-4 h-4 md:w-10 md:h-10 lg:w-12 lg:h-12">
              <Image
                src={profile}
                alt="Profile"
                className="rounded-full cursor-pointer select-none"
                width={50}
                height={50}
                onClick={() => setDropDown(!dropDown)}
              />
            </div>
            <div
              className={
                dropDown
                  ? "z-10 absolute right-0 md:w-44 w-28 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  : "hidden"
              }
            >
              {/* Email and name */}
              <div className="md:py-3 md:px-4 py-2 px-2 md:text-sm text-[10px] text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">name@flowbite.com</div>
              </div>
              {/* categories */}
              <ul
                className="md:py-1 py-0 md:text-sm text-[10px] text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <Link
                    href="/favourites"
                    className="block md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    WishList/Favourites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upcomingInterviews"
                    className="block md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Upcoming Interviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Setttings
                  </Link>
                </li>
              </ul>
              {/* Sign out */}
              <div className="py-1">
                <a
                  href="#"
                  className="block md:py-2 md:px-4 py-2 px-2 md:text-sm text-[10px] text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
