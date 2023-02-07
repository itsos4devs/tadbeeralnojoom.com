import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import withAuth from "../auth/withAuth";
import maidPhoto from "../public/maidPhoto.png";

const Maids = ({ data }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [pageNumber, setPageNumber] = useState(15);
  const [starter, setStarter] = useState(0);
  const divRef = useRef(null);

  const nextPage = () => {
    setStarter(starter + 15);
    divRef.current.scrollIntoView({
      behavior: "smooth",
    });
    return setPageNumber(pageNumber + 15);
  };

  const previousPage = () => {
    setStarter(starter - 15);
    divRef.current.scrollIntoView({
      behavior: "smooth",
    });
    return setPageNumber(pageNumber - 15);
  };
  return (
    <div>
      <div
        className="grid lg:grid-cols-5 grid-cols-3 xl:gap-x-10 lg:gap-x-2 md:gap-y-28 gap-y-10 pt-5"
        ref={divRef}
      >
        {data.slice(starter, pageNumber).map((item, index) => {
          if (router.pathname === "/") {
            if (index <= 14) {
              return (
                <div
                  key={item.passport_number}
                  className="flex flex-col items-center space-y-1 group"
                >
                  {/* Image */}
                  <div className="md:h-28 md:w-28 sm:h-16 sm:w-16 h-10 w-10">
                    <Image
                      src={item.img || maidPhoto}
                      alt="Maid Photo"
                      className={`rounded-full group-hover:border-2 group-hover:border-yellow-500`}
                      width={117}
                      height={117}
                    />
                  </div>
                  {/* Name */}
                  <h1 className="md:text-base sm:text-sm text-xs font-semibold text-center first-letter:uppercase lowercase">
                    {item.name}
                  </h1>
                  {/* Job */}
                  {/* <h1 className="md:text-base sm:text-sm text-xs font-semibold">
                {item.job}
              </h1> */}
                  {/* Location */}
                  <h1 className="md:text-sm text-xs first-letter:uppercase lowercase">
                    {item.nationality}
                  </h1>
                  {/* Experience Years */}
                  <h1 className="md:text-sm text-xs first-letter:uppercase lowercase">
                    {item.experience}
                  </h1>
                  <button
                    onClick={() => {
                      router.push({
                        pathname: `/profile/[pid]`,
                        query: { pid: item.passport_number },
                      });
                    }}
                    className={`clickButton bg-[#E48100] md:px-3 px-2 py-0.5 md:text-base sm:text-xs text-[7px] text-white rounded-md`}
                  >
                    {t("maidViewProfile")}
                  </button>
                </div>
              );
            }
          } else if (router.pathname === "/findMaids") {
            if (index < pageNumber) {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-1 group"
                >
                  {/* Image */}
                  <div className="md:h-28 md:w-28 sm:h-16 sm:w-16 h-10 w-10">
                    <Image
                      src={item.img || maidPhoto}
                      alt="Maid Photo"
                      className={`rounded-full group-hover:border-2 group-hover:border-yellow-500`}
                      width={117}
                      height={117}
                    />
                  </div>
                  {/* Name */}
                  <h1 className="md:text-base sm:text-sm text-xs font-semibold text-center first-letter:uppercase lowercase">
                    {item.name}
                  </h1>
                  {/* Job */}
                  {/* <h1 className="md:text-base sm:text-sm text-xs font-semibold">
                {item.job}
              </h1> */}
                  {/* Location */}
                  <h1 className="md:text-sm text-xs first-letter:uppercase lowercase">
                    {item.nationality}
                  </h1>
                  {/* Experience Years */}
                  <h1 className="md:text-sm text-xs first-letter:uppercase lowercase">
                    {item.experience}
                  </h1>
                  <button
                    onClick={() => {
                      router.push({
                        pathname: `/profile/[pid]`,
                        query: { pid: item.passport_number },
                      });
                    }}
                    className={`clickButton bg-[#E48100] md:px-3 px-2 py-0.5 md:text-base sm:text-xs text-[7px] text-white rounded-md`}
                  >
                    {t("maidViewProfile")}
                  </button>
                </div>
              );
            }
          }
        })}
      </div>
      {router.pathname === "/findMaids" && (
        <div
          className={`flex flex-row w-fit mx-auto mt-16 space-x-5 ${
            i18n.language === "ar" ? "" : "flex-row-reverse"
          }`}
        >
          {pageNumber < data.length && (
            <button
              onClick={nextPage}
              className="clickButton ml-5 bg-[#234F7E] md:w-60 sm:w-44 w-28 mx-auto sm:py-3 py-1 md:text-base text-xs rounded-full text-white"
            >
              {t("nextPage")}
            </button>
          )}
          {pageNumber > 15 && (
            <button
              onClick={previousPage}
              className="clickButton bg-[#234F7E] md:w-60 sm:w-44 w-28 mx-auto sm:py-3 py-1 md:text-base text-xs rounded-full text-white"
            >
              {t("previousPage")}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default withAuth(Maids);
