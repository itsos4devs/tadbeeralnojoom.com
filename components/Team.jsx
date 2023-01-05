import Image from "next/image";
import React from "react";
import developer from "../public/clientPhoto.png";
const Team = () => {
  return (
    <div className="h-full md:mb-44 lg:max-w-6xl md:max-w-4xl max-w-sm mx-auto space-y-20">
      <div className="text-center xl:mt-32 md:mt-20 mt-10 space-y-5">
        <h1 className="text-[#E48100] font-lato font-bold md:text-4xl md:w-[600px] mx-auto text-2xl">
          Our team has wide range of Skillful & Professional personalities
        </h1>
        <p className="md:w-[400px] sm:w-[300px] w-[250px] md:text-sm sm:text-xs text-[10px] mx-auto">
          Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
          nostrud oratio aperiri legimus eu.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-16 text-center ">
        <div className="w-[300px] bg-[#DBE9F8] h-[450px] space-y-2 rounded-lg">
          <div className="w-full mx-auto mt-3">
            <Image
              src={developer}
              alt="Developer photo"
              width={269}
              height={269}
              className="rounded-full mx-auto border-2 border-[#234F7E]"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-lato text-[#234F7E] font-bold">
              Sanna
            </h2>
            <h3 className="text-lg font-lato font-bold">Indonesia Secertary</h3>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h2 className="text-[#E48100]">002 68654 995</h2>
          </div>
        </div>
        <div className="w-[300px] bg-[#DBE9F8] h-[450px] space-y-2 rounded-lg">
          <div className="w-full mx-auto mt-3">
            <Image
              src={developer}
              alt="Developer photo"
              width={269}
              height={269}
              className="rounded-full mx-auto border-2 border-[#234F7E]"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-lato text-[#234F7E] font-bold">
              Sanna
            </h2>
            <h3 className="text-lg font-lato font-bold">Indonesia Secertary</h3>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h2 className="text-[#E48100]">002 68654 995</h2>
          </div>
        </div>
        <div className="w-[300px] bg-[#DBE9F8] h-[450px] space-y-2 rounded-lg">
          <div className="w-full mx-auto mt-3">
            <Image
              src={developer}
              alt="Developer photo"
              width={269}
              height={269}
              className="rounded-full mx-auto border-2 border-[#234F7E]"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-lato text-[#234F7E] font-bold">
              Sanna
            </h2>
            <h3 className="text-lg font-lato font-bold">Indonesia Secertary</h3>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h2 className="text-[#E48100]">002 68654 995</h2>
          </div>
        </div>
        <div className="w-[300px] bg-[#DBE9F8] h-[450px] space-y-2 rounded-lg">
          <div className="w-full mx-auto mt-3">
            <Image
              src={developer}
              alt="Developer photo"
              width={269}
              height={269}
              className="rounded-full mx-auto border-2 border-[#234F7E]"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-lato text-[#234F7E] font-bold">
              Sanna
            </h2>
            <h3 className="text-lg font-lato font-bold">Indonesia Secertary</h3>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h2 className="text-[#E48100]">002 68654 995</h2>
          </div>
        </div>
        <div className="w-[300px] bg-[#DBE9F8] h-[450px] space-y-2 rounded-lg">
          <div className="w-full mx-auto mt-3">
            <Image
              src={developer}
              alt="Developer photo"
              width={269}
              height={269}
              className="rounded-full mx-auto border-2 border-[#234F7E]"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-lato text-[#234F7E] font-bold">
              Sanna
            </h2>
            <h3 className="text-lg font-lato font-bold">Indonesia Secertary</h3>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h2 className="text-[#E48100]">002 68654 995</h2>
          </div>
        </div>
        <div className="w-[300px] bg-[#DBE9F8] h-[450px] space-y-2 rounded-lg">
          <div className="w-full mx-auto mt-3">
            <Image
              src={developer}
              alt="Developer photo"
              width={269}
              height={269}
              className="rounded-full mx-auto border-2 border-[#234F7E]"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-lato text-[#234F7E] font-bold">
              Sanna
            </h2>
            <h3 className="text-lg font-lato font-bold">Indonesia Secertary</h3>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h4 className="text-sm font-lato font-semibold">Some text</h4>
            <h2 className="text-[#E48100]">002 68654 995</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
