import Image from "next/image";
import React from "react";
import maidPhoto from "../public/maidPhoto.png";
import { useTranslation } from "react-i18next";

const MaidsSections = () => {
  const { t, i18n } = useTranslation();
  const data = {
    img: maidPhoto,
    name: "Mousumi Zaman",
    job: t("maidJob"),
    location: "Sri Lanka",
    experienceYear: "5",
  };
  const arr = Array.apply(null, Array(15)).map(function (x, i) {
    return i;
  });

  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-auto md:space-y-20 sm:space-y-8 space-y-5">
      <div className="text-center xl:mt-36 md:mt-20  mt-10 space-y-5">
        <h1 className="text-[#E48100] font-lato font-bold md:text-5xl text-2xl">
          {t("maid")}
        </h1>
        <p className="md:w-[500px] sm:w-[300px] w-[250px] sm:text-xs text-[10px] mx-auto">
          Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
          nostrud oratio aperiri legimus eu.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-3 xl:gap-x-10 lg:gap-x-2 md:gap-y-28 gap-y-10">
        {arr.map((item) => (
          <div
            key={item}
            className="flex flex-col items-center space-y-1 group"
          >
            {/* Image */}
            <div className="md:h-28 md:w-28 sm:h-16 sm:w-16 h-10 w-10">
              <Image
                src={data.img}
                alt="Maid Photo"
                className="rounded-full group-hover:border-2 group-hover:border-yellow-500"
                width={117}
                height={117}
              />
            </div>
            {/* Name */}
            <h1 className="md:text-lg sm:text-sm text-xs font-semibold">
              {data.name}
            </h1>
            {/* Job */}
            <h1 className="md:text-base sm:text-sm text-xs font-semibold">
              {data.job}
            </h1>
            {/* Location */}
            <h1 className="md:text-sm text-xs">{data.location}</h1>
            {/* Experience Years */}
            <h1 className="md:text-sm text-xs">{data.experienceYear} Years</h1>
            <button
              className={
                i18n.language === "ar"
                  ? "clickButton bg-[#E48100] md:px-3 px-2 py-0.5 md:text-base sm:text-xs text-[7px] text-white rounded-xl"
                  : "clickButton bg-[#E48100] md:px-3 px-2 py-0.5 md:text-base sm:text-xs text-[10px] text-white rounded-xl"
              }
            >
              {t("maidViewProfile")}
            </button>
          </div>
        ))}
      </div>

      <div className="w-fit mx-auto">
        <button className="clickButton bg-[#234F7E] md:w-60 sm:w-44 w-28 mx-auto sm:py-3 py-1 md:text-base text-xs rounded-full text-white">
          {t("maidViewAll")}
        </button>
      </div>
    </div>
  );
};

export default MaidsSections;
