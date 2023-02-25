import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import Maids from "../components/Maids";

const MaidsSection = ({ data }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`lg:max-w-6xl md:max-w-2xl mx-auto md:space-y-20 sm:space-y-8 space-y-5 md:mb-32 mb-10 ${
        i18n.language === "ar" ? "font-cairo" : "font-lato"
      }`}
    >
      <div className="text-center xl:mt-36 md:mt-20  mt-10 space-y-5">
        <h1 className="text-[#E48100] font-bold md:text-5xl text-2xl">
          {t("maid")}
        </h1>
      </div>
      <Maids data={data} />
      <div className="w-fit mx-auto">
        <button
          onClick={() =>
            router.push({
              pathname: "/findMaids",
            })
          }
          className="clickButton bg-[#234F7E] md:w-60 sm:w-44 w-28 mx-auto sm:py-3 py-1 md:text-base text-xs rounded-full text-white"
        >
          {t("maidViewAll")}
        </button>
      </div>
    </div>
  );
};

export default MaidsSection;
