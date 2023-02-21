/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import MaidProfile from "../../components/MaidProfile";
import profileDetails from "../../public/profileDetails.jpeg";
const pid = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <Head>
        <title>Profile / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Banner
        imageSrc={profileDetails}
        imageUlt={"Profile Banner"}
        text1={t("profileDetails")}
        textPosition={
          "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      />
      <MaidProfile />
    </div>
  );
};

export default pid;
