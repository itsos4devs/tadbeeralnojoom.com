import Image from "next/image";
import React from "react";
import maidPhoto from "../public/maidPhoto.png";

const MaidsSections = () => {
  const data = {
    img: maidPhoto,
    name: "Mousumi Zaman",
    job: "Cook",
    location: "Sri Lanka",
    experienceYear: "5",
  };
  const arr = Array.apply(null, Array(15)).map(function (x, i) {
    return i;
  });
  return (
    <div className="max-w-6xl mx-auto space-y-20">
      <div className="text-center mt-36 space-y-5">
        <h1 className="text-[#E48100] font-lato font-bold text-5xl">
          Our Maids
        </h1>
        <p className="w-[500px] mx-auto">
          Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
          nostrud oratio aperiri legimus eu.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-x-10 gap-y-28">
        {arr.map((item) => (
          <div
            key={item}
            className="flex flex-col items-center space-y-1 group"
          >
            {/* Image */}
            <Image
              src={data.img}
              alt="Maid Photo"
              className="rounded-full group-hover:border-2 group-hover:border-yellow-500"
              width={117}
              height={117}
            />
            {/* Name */}
            <h1 className="text-lg font-semibold">{data.name}</h1>
            {/* Job */}
            <h1 className="text-base font-semibold">{data.job}</h1>
            {/* Location */}
            <h1 className="text-sm">{data.location}</h1>
            {/* Experience Years */}
            <h1 className="text-sm">{data.experienceYear} Years</h1>
            <button className="clickButton bg-[#E48100] px-3 py-0.5 text-white rounded-xl">
              View Profile
            </button>
          </div>
        ))}
      </div>

      <div className="w-fit mx-auto">
        <button className="clickButton bg-[#234F7E] w-60 mx-auto py-3 rounded-full text-white">
          View All
        </button>
      </div>
    </div>
  );
};

export default MaidsSections;
