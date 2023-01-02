/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MaidProfile from "../../components/MaidProfile";
import profileDetails from "../../public/profileDetails.jpeg";
const pid = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <Header />
      <Banner
        imageSrc={profileDetails}
        imageUlt={"Profile Banner"}
        text1={t("profileDetails")}
        textPosition={
          "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      />
      <div className="xl:max-w-5xl md:max-w-3xl max-w-[300px] mx-auto flex flex-row items-center justify-center md:mt-20 mt-10">
        <button className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]">
          {t("requestInterview")}
        </button>
        <button className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]">
          {t("saveLater")}
        </button>
        <button className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]">
          {t("call")}
        </button>
        <button className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]">
          Whatsapp
        </button>
      </div>
      <MaidProfile />
    </div>
  );
};

export default pid;
