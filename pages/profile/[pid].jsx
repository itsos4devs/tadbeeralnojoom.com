/* eslint-disable react-hooks/rules-of-hooks */
import {
  CalendarDaysIcon,
  ClockIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import MaidProfile from "../../components/MaidProfile";
import profileDetails from "../../public/profileDetails.jpeg";
import moment from "moment";
import TimePicker from "rc-time-picker";
import DatePicker from "react-datepicker";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
import { firestore } from "../../utils";
import { useRouter } from "next/router";

const pid = () => {
  const router = useRouter();
  const [dropDownInterview, setDropDownInterview] = useState(false);
  const { t } = useTranslation();

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("12:00");

  const createRoom = async () => {
    const servers = {
      iceServers: [
        {
          urls: [
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
          ],
        },
      ],
      iceCandidatePoolSize: 10,
    };
    const pc = new RTCPeerConnection(servers);
    // Reference Firestore collections for signaling
    const callDoc = firestore.collection("calls").doc();

    const dateTime = {
      date: startDate.toLocaleDateString("es-AR"),
      time: startTime,
    };

    const callFor = {
      // Client Name/ID
      name: "Karim",
      // User Name/ID
    };

    await callDoc.set({ dateTime, callFor });
    setDropDownInterview(!dropDownInterview);
    router.push({
      pathname: `/interview/${callDoc.id}`,
      query: { pid: callDoc.id },
    });
  };

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
      <div className="xl:max-w-5xl md:max-w-3xl max-w-[300px] mx-auto flex flex-row lg:space-x-20 md:space-x-5 xs:space-x-8 xxs:space-x-5 space-x-3 justify-center md:mt-20 mt-10">
        <div className="relative">
          <button
            onClick={() => setDropDownInterview(!dropDownInterview)}
            className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]"
          >
            {t("requestInterview")}
          </button>
          <div
            className={
              dropDownInterview
                ? "z-10 absolute md:top-14 md:w-[350px] top-8 h-fit w-32 bg-[#ADCBEA] md:rounded-xl rounded-sm divide-y divide-gray-100 shadow md:pb-4 pb-1"
                : "hidden"
            }
          >
            <div className="md:py-1 p-1 md:space-y-5 space-y-1 md:px-4 px-1">
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="block text-[#234F7E] md:text-base text-[7px] font-bold md:py-2 py-1">
                    Preferred time for call
                  </h1>
                  <XMarkIcon
                    className="md:h-5 h-2 md:w-5 w-2 text-[#234F7E] cursor-pointer"
                    onClick={() => setDropDownInterview(!dropDownInterview)}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-center md:space-x-2 space-x-1 w-full">
                    <div className="relative">
                      <div className="absolute z-20 md:inset-y-0 md:right-4 top-1 bottom-0 right-0.5 flex items-center md:pl-3 pl-1 pointer-events-none">
                        <CalendarDaysIcon className="md:h-5 md:w-5 h-2 w-2 text-[#234F7E]" />
                      </div>
                      <DatePicker
                        className="md:h-12 h-5 w-full md:text-lg text-[7px] text-[#234F7E] font-semibold rounded-lg cursor-pointer md:pl-2 pl-1"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute z-20 md:inset-y-0 md:right-4 top-1 bottom-0 right-2 flex items-center md:pl-3 pl-1 pointer-events-none">
                        <ClockIcon className="md:h-5 md:w-5 h-2 w-2 text-[#234F7E]" />
                      </div>
                      <TimePicker
                        showSecond={false}
                        defaultValue={moment().hour(0).minute(0)}
                        onChange={(value) =>
                          setStartTime(value && value.format("HH:mm"))
                        }
                        format={"h:mm a"}
                        use12Hours
                        inputReadOnly
                        clearIcon={""}
                      />
                    </div>
                  </div>
                  <p className="md:text-xs text-[5px] font-semibold">
                    We’ll try and match your chosen time, but will be in touch
                    if we need to reschedule.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={createRoom}
                  className="clickButton bg-[#234F7E] md:p-3 md:px-5 md:text-base text-[7px] p-1 text-white rounded-xl md:font-semibold"
                >
                  Submit
                </button>
                <button className="clickButton border border-[#234F7E] md:p-3 p-1 text-[#234F7E] md:text-base text-[7px] font-bold rounded-xl">
                  View results
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]">
            {t("saveLater")}
          </button>
        </div>
        <div>
          <button className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]">
            {t("call")}
          </button>
        </div>
        <div>
          <button className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]">
            Whatsapp
          </button>
        </div>
      </div>
      <MaidProfile />
    </div>
  );
};

export default pid;