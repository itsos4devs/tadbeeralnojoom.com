import Image from "next/image";
import React from "react";
import servicePhoto from "../public/servicePhoto.png";
const ServiceSection = () => {
  const data = {
    img: servicePhoto,
    serviceName: "Service will go here just a single line",
    description1:
      "Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum nostrud graecis ex. Nec oratio aperiri legimus eu. Ne integre menandri voluptatum nam, no quo ridens ancillae, no vituperata delicatissimi nam",
    description2:
      "At simul malorum has, tibique moderatius scribentur duo eu. Enim libris pri ad, tantas ridens perpetua ne vim.",
    description3:
      "Has error oratio iudicabit an. Nam persius detraxit eu, has in case nonumy dicunt, ea vix paulo recteque vulputate. Ad duo apeirian mnesarchum dissentias, at vim quis nisl dolorem.",
  };
  const arr = Array.apply(null, Array(4)).map(function (x, i) {
    return i;
  });
  return (
    <div className="my-32">
      {arr.map((item) => {
        if (item % 2) {
          return (
            // Right Photo
            <div key={item} className="grid grid-cols-2">
              <div className="w-[600px] mx-auto mt-10 space-y-5 text-right">
                <h1 className="text-5xl font-lato font-bold text-[#F48830]">
                  {data.serviceName}
                </h1>
                <div className="space-y-12">
                  <p className="text-xl text-gray-500 ">{data.description1}</p>
                  <p className="text-xl text-gray-500 ">{data.description2}</p>
                  <p className="text-xl text-gray-500 ">{data.description3}</p>
                </div>
                <h1 className="text-[#234F7E] font-bold text-lg underline cursor-pointer">
                  Know more
                </h1>
              </div>

              <div className="relative">
                <div>
                  <Image src={data.img} alt="Service Photo" height={616} />
                </div>
                {/* a blue color on top of the image */}
                <div className="bg-[#234F7E80]/50 top-0 absolute w-full h-full" />
              </div>
            </div>
          );
        } else {
          return (
            // Left Photo
            <div key={item} className="grid grid-cols-2">
              <div className="relative">
                <div>
                  <Image src={data.img} alt="Service Photo" height={616} />
                </div>
                <div className="bg-[#234F7E80]/50 top-0 absolute w-full h-full" />
              </div>
              <div className="w-[600px] mx-auto mt-10 space-y-5">
                <h1 className="text-5xl font-lato font-bold text-[#F48830]">
                  {data.serviceName}
                </h1>
                <div className="space-y-12">
                  <p className="text-xl text-gray-500 ">{data.description1}</p>
                  <p className="text-xl text-gray-500 ">{data.description2}</p>
                  <p className="text-xl text-gray-500 ">{data.description3}</p>
                </div>
                <h1 className="text-[#234F7E] font-bold text-lg underline cursor-pointer">
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
