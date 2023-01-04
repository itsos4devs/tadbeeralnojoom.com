/* eslint-disable react-hooks/rules-of-hooks */
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from "usehooks-ts";
import Banner from "../../components/Banner";
import MaidProfile from "../../components/MaidProfile";
import profileDetails from "../../public/profileDetails.jpeg";
import moment from "moment";
import TimePicker from "rc-time-picker";
import DatePicker from "react-datepicker";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
const pid = () => {
  const [dropDownInterview, setDropDownInterview] = useState(false);
  const dropDownRefInterview = useRef(null);
  useOnClickOutside(dropDownRefInterview, () => setDropDownInterview(false));
  const { t } = useTranslation();
  const format = "h:mm a";
  const now = moment().hour(0).minute(0);
  function onChange(value) {
    console.log(value && value.format(format));
  }
  const [startDate, setStartDate] = useState(new Date());

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
      <div className="xl:max-w-5xl md:max-w-3xl max-w-[300px] mx-auto flex flex-row items-center justify-center md:mt-20 mt-10">
        <div ref={dropDownRefInterview} className="relative">
          <button
            onClick={() => setDropDownInterview(!dropDownInterview)}
            className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]"
          >
            {t("requestInterview")}
          </button>
          <div
            className={
              dropDownInterview
                ? "z-10 absolute top-14 md:w-[350px] h-fit w-28 bg-[#ADCBEA] rounded-xl divide-y divide-gray-100 shadow pb-4"
                : "hidden"
            }
          >
            <div className="md:py-1 py-0 space-y-5 px-4">
              <div>
                <h1 className="block text-[#234F7E] font-bold md:py-2 py-1">
                  Preferred time for call
                </h1>
                <div className="space-y-1">
                  <div className="flex justify-center space-x-2 w-full">
                    <div className="relative">
                      <div className="absolute z-20 inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                        <CalendarDaysIcon className="h-5 w-5 text-[#234F7E]" />
                      </div>
                      <DatePicker
                        className="h-12 w-full text-lg text-[#234F7E] font-semibold rounded-lg cursor-pointer pl-2"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute z-20 inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                        <ClockIcon className="h-5 w-5 text-[#234F7E]" />
                      </div>
                      <TimePicker
                        showSecond={false}
                        defaultValue={now}
                        onChange={onChange}
                        format={format}
                        use12Hours
                        inputReadOnly
                        clearIcon={""}
                      />
                    </div>
                  </div>
                  <p className="text-xs font-semibold">
                    We’ll try and match your chosen time, but will be in touch
                    if we need to reschedule.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="clickButton bg-[#234F7E] p-3 px-5 text-white rounded-xl font-semibold">
                  Submit
                </button>
                <button className="clickButton border border-[#234F7E] p-3 text-[#234F7E] text-base font-bold rounded-xl">
                  View results
                </button>
              </div>
            </div>
          </div>
        </div>
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
