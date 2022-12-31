import Image from "next/image";
import React from "react";
import servicePhoto from "../public/servicePhoto.png";
const ServiceSection = () => {
  const data = {
    img: servicePhoto,
    serviceName: "Service will go here just a single line",
    description1:
      "Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum nostrud graecis ex. Nec oratio aperiri legimus eu. Ne integre menandri voluptatum nam, no quo ridens ancillae, no vituperata delicatissimi nam",
    description3:
      "Has error oratio iudicabit an. Nam persius detraxit eu, has in case nonumy dicunt, ea vix paulo recteque vulputate. Ad duo apeirian mnesarchum dissentias, at vim quis nisl dolorem.",
  };
  const arr = Array.apply(null, Array(4)).map(function (x, i) {
    return i;
  });
  return (
    <div className="md:my-32 mt-10">
      {arr.map((item) => {
        if (item % 2) {
          return (
            // Right Photo
            <div key={item} className="grid grid-cols-2">
              <div className="xl:w-[600px] xl:mt-10 md:mt-2 mt-0 lg:w-[500px] md:w-[300px] sm:w-[200px] w-fit mx-2 md:mx-auto lg:space-y-5 text-right">
                <h1 className="xl:text-5xl lg:text-3xl md:text-xl sm:text-sm text-xs font-lato font-bold text-[#F48830] ">
                  {data.serviceName}
                </h1>
                <div className="xl:space-y-12 lg:space-y-6 md:space-y-1">
                  <p className="xl:text-xl lg:text-base md:text-sm sm:text-[10px] text-[8px] text-gray-500 ">
                    {data.description1}
                  </p>
                  <p className="xl:text-xl lg:text-base md:text-sm text-[10px] text-gray-500 hidden">
                    {data.description3}
                  </p>
                </div>
                <h1 className="text-[#234F7E] font-bold lg:text-lg md:text-base sm:text-[10px] text-[8px] underline cursor-pointer">
                  Know more
                </h1>
              </div>
              <Image src={data.img} alt="Service Photo" height={616} />
            </div>
          );
        } else {
          return (
            // Left Photo
            <div key={item} className="grid grid-cols-2">
              <Image src={data.img} alt="Service Photo" height={616} />
              <div className="xl:w-[600px] xl:mt-10 md:mt-2 mt-0 lg:w-[500px] md:w-[300px] sm:w-[200px] w-fit mx-2 md:mx-auto lg:space-y-5">
                <h1 className="xl:text-5xl lg:text-3xl md:text-xl sm:text-sm text-xs font-lato font-bold text-[#F48830]">
                  {data.serviceName}
                </h1>
                <div className="xl:space-y-12 lg:space-y-6 md:space-y-1">
                  <p className="xl:text-xl lg:text-base md:text-sm sm:text-[10px] text-[8px] text-gray-500 ">
                    {data.description1}
                  </p>
                  <p className="xl:text-xl lg:text-base md:text-sm text-[10px] text-gray-500 hidden">
                    {data.description3}
                  </p>
                </div>
                <h1 className="text-[#234F7E] font-bold lg:text-lg md:text-base sm:text-[10px] text-[8px] underline cursor-pointer">
                  Know more
                </h1>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ServiceSection;
