import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import servicePhoto from "../public/servicePhoto.png";
const ServiceSection = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  return (
    <div className="md:mb-32 mb-10">
      <div className="text-center xl:mt-44 md:mt-20 mt-10 xl:mb-28 md:mb-16 mb-10">
        <h1 className="text-[#E48100] mx-auto font-lato font-bold md:w-full xs:w-96 md:text-3xl xs:text-base">
          {t("serviceTitle")}
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="relative">
          <div className="bg-[#005AAA4D]/40 absolute w-full h-full filter contrast-150 brightness-110" />
          <div className="w-full h-full">
            <Image
              src={servicePhoto}
              alt="Service Photo"
              width={790}
              height={460}
            />
          </div>
        </div>
        <div className="xl:w-[650px] xl:mt-8 md:mt-2 mt-0 lg:w-[500px] md:w-[300px] sm:w-[200px] w-fit xl:mx-auto mx-2 lg:space-y-5">
          <h1
            className="xl:text-5xl lg:text-3xl md:text-xl cursor-pointer  sm:text-sm text-[10px]  font-lato font-bold text-[#F48830]"
            onClick={() =>
              router.push({
                pathname: `/requestService/Domestic workers Service Line`,
              })
            }
          >
            Domestic workers Service Line
          </h1>
          <div className="xl:space-y-12 lg:space-y-6 md:space-y-1">
            <p className="xl:text-xl lg:text-base md:text-sm sm:text-[10px] text-[7px] text-gray-500 ">
              Ministry of Human Resources and Emiratization has developed
              domestic workers services into several packages to serve the
              community with all different domestic workers’ needs as well as to
              facilitate the contracting process between domestic workers and
              employers.
            </p>
            <p className="xl:text-xl lg:text-base md:text-sm text-[10px] text-gray-500 lg:block hidden"></p>
            <p className="xl:text-xl lg:text-base md:text-sm text-[10px] text-gray-500 lg:block hidden"></p>
          </div>
          <h1
            onClick={() =>
              router.push({
                pathname: `/requestService/Domestic workers Service Line`,
              })
            }
            className="text-[#234F7E] w-fit font-bold lg:text-lg md:text-base sm:text-[10px] text-[8px] underline cursor-pointer"
          >
            Know more
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="xl:w-[650px] xl:mt-8 md:mt-2 mt-1 lg:w-[500px] md:w-[300px] sm:w-[200px] w-fit mx-2 md:mx-auto lg:space-y-5 text-right">
          <h1
            onClick={() =>
              router.push({
                pathname: `/requestService/Clearance and Typing services`,
              })
            }
            className="xl:text-5xl lg:text-3xl md:text-xl sm:text-sm cursor-pointer text-[10px] font-lato font-bold text-[#F48830] "
          >
            Clearance and Typing services
          </h1>
          <div className="xl:space-y-12 lg:space-y-6 md:space-y-1">
            <p className="xl:text-xl lg:text-base md:text-sm sm:text-[10px] text-[8px] text-gray-500 ">
              All government typing services pertaining to the employment and
              entry visas of domestic and household workers
            </p>
            <p className="xl:text-xl lg:text-base md:text-sm text-[10px] text-gray-500 lg:block hidden"></p>
            <p className="xl:text-xl lg:text-base md:text-sm text-[10px] text-gray-500 lg:block hidden"></p>
          </div>
          <h1
            onClick={() =>
              router.push({
                pathname: `/requestService/Clearance and Typing services`,
              })
            }
            className="text-[#234F7E] w-fit font-bold lg:text-lg md:text-base sm:text-[10px] text-[8px] underline cursor-pointer"
          >
            Know more
          </h1>
        </div>
        <div className="relative">
          <div className="bg-[#005AAA4D]/40 absolute w-full h-full filter contrast-150 brightness-110" />
          <div className="w-full h-full">
            <Image
              src={servicePhoto}
              alt="Service Photo"
              width={790}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
