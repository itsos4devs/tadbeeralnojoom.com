/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Maids from "../components/Maids";
import favourit from "../public/favourit.jpeg";
import maidPhoto from "../public/maidPhoto.png";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

const favourites = () => {
  const { t } = useTranslation();

  const data = {
    id: 1,
    img: maidPhoto,
    name: "Mousumi Zaman",
    job: t("maidJob"),
    location: "Sri Lanka",
    experienceYear: "5",
  };
  return (
    <div>
      <Header />
      <Banner
        imageSrc={favourit}
        imageUlt="favourit banner"
        text1={"Wishlist/Favourites"}
        textPosition={
          "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      />
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto md:space-y-20 sm:space-y-8 space-y-5 md:mb-44 mb-16">
        <div className="text-center xl:mt-36 md:mt-20 mt-10 space-y-2">
          <h1 className="text-[#E48100] font-lato font-bold md:text-5xl text-2xl">
            Your Saved Wishlist
          </h1>
          <p className="md:w-[500px] sm:w-[300px] w-[250px] sm:text-xs text-[10px] mx-auto">
            Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
            nostrud oratio aperiri legimus eu.
          </p>
        </div>
        <Maids data={data} />
        <div className="w-fit mx-auto">
          <button className="clickButton bg-[#234F7E] md:w-60 sm:w-44 w-28 mx-auto sm:py-3 py-1 md:text-base text-xs rounded-full text-white">
            Next Page
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default favourites;
