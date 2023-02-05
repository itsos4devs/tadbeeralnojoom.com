import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import withAuth from "../auth/withAuth";
import maidPhoto from "../public/maidPhoto.png";

const Maids = ({ data }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const arr = Array.apply(null, Array(15)).map(function (x, i) {
    return i;
  });
  console.log(router.pathname);
  return (
    <div className="grid lg:grid-cols-5 grid-cols-3 xl:gap-x-10 lg:gap-x-2 md:gap-y-28 gap-y-10">
      {data.map((item, index) => {
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
                  View Profile
                </button>
              </div>
            );
          }
        } else {
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
                View Profile
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default withAuth(Maids);
