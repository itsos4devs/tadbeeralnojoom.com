/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "./Header";
import banner from "../public/banner.jpeg";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative">
      {/* a blue color on top of the image */}
      <div className="bg-[#005AAA4D]/30 absolute w-full h-full filter contrast-150 brightness-110" />
      {/* Using header with banner to combine the 2 components while loading */}
      <Header />
      <div>
        <Image
          src={banner}
          alt="Banner Photo"
          style={{
            objectFit: "fill",
          }}
          className="w-full"
          priority
        />
      </div>
      <div className="absolute top-1/3 right-60 space-y-3 text-center">
        <h1 className="text-white text-7xl font-lato font-black">
          Life’s busy.
        </h1>
        <h1 className="text-white text-7xl font-lato font-black">
          We can help.
        </h1>
        <p className="text-3xl w-[500px] text-white">
          Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
          nostrud oratio aperiri legimus eu.
        </p>
      </div>
    </div>
  );
};

export default Banner;
