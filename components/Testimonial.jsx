import Image from "next/image";
import React from "react";
import clientPhoto from "../public/clientPhoto.png";
import { useTranslation } from "react-i18next";
// TODO: update the testimonials with the real one
const Testimonial = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      img: "https://lh3.googleusercontent.com/a-/ACB-R5RHjxC3yMRbjEH4Z5LzaDqw0PaaksfETHnfUjNX=w36-h36-p-c0x00000000-rp-mo-br100",
      name: "Ali Al Abdouli",
      rate: 5,
      contentHeader: "“Awesome Service”",
      description:
        "I’m thankful for the excellent service. I had good experience started by reception explaining and supporting me to select the maid, then office staff helping with the interview, gave me time to check and after four days they made all the needful for the visa. All of this ably from one visit to the office. I was not asked to come again. After the selection event thing was done for me.",
    },
    {
      img: "https://lh3.googleusercontent.com/a/AGNmyxbdtFgeBiRGjBCrM_gGbCrfHNIdFXXnxarlkJ3D=w36-h36-p-c0x00000000-rp-mo-br100",
      name: "Bo Zayed",
      rate: 5,
      contentHeader: "“Best place”",
      description: "Best place to bring workers with an easy process.",
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ACB-R5QZufL2OnuNdRkWjHH-FTgBQWGBhoFM3eOu8uQu_A=w36-h36-p-c0x00000000-rp-mo-ba3-br100",
      name: "Khalfan Alnaqbi",
      rate: 5,
      contentHeader: "“معاملة راقية”",
      description: "تعامل سريع وراقي",
    },
  ];
  const rate = Array.apply(null, Array(5)).map(function (x, i) {
    return i;
  });
  return (
    <div
      className={`mb-20 md:mb-0 lg:max-w-6xl md:max-w-4xl max-w-sm mx-auto ${
        i18n.language === "ar" ? "font-cairo" : "font-lato"
      }`}
    >
      <div className="text-center mt-20 space-y-5">
        <h1 className="text-[#E48100] font-lato font-bold md:text-4xl sm:text-3xl text-xl">
          {t("testimonials")}
        </h1>
      </div>
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 md:mt-10 mt-5">
        {data.map((item) => (
          <div
            key={item}
            className="bg-[#234F7E] flex flex-col space-y-3 p-5 lg:w-80 md:w-56 w-44 mx-auto"
          >
            <div className="flex items-center space-x-5 lg:w-20 md:w-14 w-12">
              <Image
                src={item.img}
                alt="Client Photo"
                className="rounded-full"
                width={100}
                height={30}
              />
              <div className="flex flex-col space-y-2 md:col-span-2">
                {/* Name */}
                <h1 className="text-white lg:text-2xl md:text-lg text-sm">
                  {item.name}
                </h1>
                {/* Rate */}
                <div className="flex items-center" title={item.rate}>
                  {/* Catching the rate from data and loop on them */}
                  {rate.map((rating) => {
                    if (rating < item.rate) {
                      return (
                        // Star
                        <svg
                          key={rating}
                          aria-hidden="true"
                          className="md:w-5 md:h-5 w-2 h-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      );
                    } else {
                      return (
                        // Not star
                        <svg
                          key={rating}
                          aria-hidden="true"
                          className="md:w-5 md:h-5 w-2 h-2 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            {/* Content header */}
            <h1 className="text-white lg:text-2xl md:text-lg text-xs text-left">
              {item.contentHeader}
            </h1>
            {/* Description */}
            <p className="text-white lg:text-base md:text-sm text-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
