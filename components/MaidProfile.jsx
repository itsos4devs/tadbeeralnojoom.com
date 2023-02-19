import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import maidProfile from "../public/maidProfile.jpeg";
import thumbnail from "../public/video.png";
import play from "../public/playButton.png";
import Footer from "./Footer";
import { useUser } from "../auth/useUser";
import withAuth from "../auth/withAuth";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { getMaid } from "../fetching/getMaid";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import TimePicker from "rc-time-picker";
import DatePicker from "react-datepicker";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
import { useOnClickOutside } from "usehooks-ts";
import {
  CalendarDaysIcon,
  ClockIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PageNotFound from "./PageNotFound";
import { db } from "../config";
import { addDoc, collection, query, serverTimestamp } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { useCollection } from "react-firebase-hooks/firestore";
const stripePromise = loadStripe(
  "pk_live_51MZd1bGuhdYVsXxBupuvnlseWLwkXZWCumg839Dfb1XvxKYuTPLXo42V6vcGn3ocwAlhhiQHFoaDvCcFrtigSGH000dFLHPUGY"
);

const MaidProfile = () => {
  const { user, logout } = useUser();

  const { t, i18n } = useTranslation();

  const router = useRouter();
  const maidId = router.query.pid;

  const { data } = useQuery(["getMaid", maidId], getMaid, {
    staleTime: Infinity,
  });
  const [snapshot] = useCollection(
    query(
      collection(
        db,
        "users",
        user?.email ? user?.email : "karimkhaledelmawe@gmail.com",
        "favourite"
      )
    )
  );

  const requestInterviewHandler = () => {
    if (user) {
      setDropDownInterview(true);
    } else {
      router.push({
        pathname: "/signin",
      });
    }
  };

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    console.log(stripe);
    // call backend to create a checkout session...
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      maid: data,
      email: user.email,
    });
    console.log(checkoutSession);
    // redirect user to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  const [dropDownInterview, setDropDownInterview] = useState(false);

  // States
  const [startDate, setStartDate] = useState(() => {
    let date = new Date();
    let newDate = date.setDate(date.getDate() + 1);
    return new Date(newDate);
  });
  const [startTime, setStartTime] = useState("11:00");
  const [timeChanged, setTimeChanged] = useState(false);
  const [uniqueFav, setUniqueFav] = useState(false);
  // functions for interview
  function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
      o = Math.abs(offset);
    return (offset > 0 ? "+" : "-") + Math.floor(o / 60);
  }

  useEffect(() => {
    if (startTime) {
      let lol = parseInt(startTime.slice(0, 2)) + parseInt(getTimeZone());
      lol <= 9
        ? setStartTime(`0${lol}:${startTime.slice(3, startTime.length)}`)
        : setStartTime(`${lol}:${startTime.slice(3, startTime.length)}`);
    }
    snapshot?.docs?.map((item) => {
      if (item.data().maidId === maidId) setUniqueFav(true);
    });
  }, [timeChanged, snapshot]);

  const createRoom = async () => {
    const options = {
      method: "POST",
      url: "https://sfu.mirotalk.com/api/v1/meeting",
      headers: { authorization: "mirotalksfu_default_secret" },
    };

    const res = await axios.request(options);
    const id = res.data.meeting.substring(
      res.data.meeting.indexOf("join/") + 5,
      res.data.meeting.length
    );

    await addDoc(collection(db, "users", user?.email, "upcomingInterviews"), {
      userId: user.email,
      time: startTime,
      date: startDate.toLocaleDateString("en-GB"),
      interviewId: id,
      maidId: data[0].number,
      order: new Date(
        startDate.toLocaleDateString().replaceAll("/", " ")
      ).getTime(),
    });

    router.push({
      pathname: `/upcomingInterviews`,
    });
  };

  // Save for Later
  const saveForLaterHandler = async () => {
    if (user) {
      if (uniqueFav) {
        return toast.error("Maid already in your favourite list");
      } else {
        await addDoc(collection(db, "users", user?.email, "favourite"), {
          userId: user.email,
          maidId: data[0].number,
          createdAt: serverTimestamp(),
        }).then(() => {
          toast.success("Added");
        });
      }
    } else {
      router.push({
        pathname: "/signin",
      });
    }
  };
  return (
    <div>
      <Toaster position="top-right" />
      {data ? (
        <div>
          <div className="xl:max-w-5xl md:max-w-3xl max-w-[300px] mx-auto flex flex-row lg:space-x-20 md:space-x-5 xs:space-x-8 xxs:space-x-5 space-x-3 justify-center md:mt-20 mt-10">
            <div className="relative">
              <button
                onClick={requestInterviewHandler}
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
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date().setDate(
                              new Date().getDate() + 1
                            )}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                        <div className="relative">
                          <div className="absolute z-20 md:inset-y-0 md:right-4 top-1 bottom-0 right-2 flex items-center md:pl-3 pl-1 pointer-events-none">
                            <ClockIcon className="md:h-5 md:w-5 h-2 w-2 text-[#234F7E]" />
                          </div>
                          <TimePicker
                            showSecond={false}
                            defaultValue={moment().hour(9).minute(0)}
                            onChange={(value) => {
                              setStartTime(value && value.format("HH:mm"));
                              setTimeChanged(!timeChanged);
                            }}
                            format={"h:mm a"}
                            inputReadOnly
                            minuteStep={15}
                            clearIcon={""}
                            disabledHours={() => [
                              0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23,
                            ]}
                          />
                        </div>
                      </div>
                      <p className="md:text-xs text-[5px] font-semibold">
                        We’ll try and match your chosen time, but will be in
                        touch if we need to reschedule.
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
            <div className="relative">
              <button
                onClick={saveForLaterHandler}
                className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px]"
              >
                {t("saveLater")}
              </button>
            </div>
            <div>
              <a href={`tel:+${data[0].tel_mobile_no}`}>
                <button
                  disabled={user ? false : true}
                  className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px] disabled:bg-gray-500 disabled:opacity-50 disabled:active:scale-100"
                >
                  {t("call")}
                </button>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=${data[0].tel_mobile_no}`}
                rel="noreferrer"
              >
                <button
                  disabled={user ? false : true}
                  className="button clickButton w-16 md:w-44 xl:w-60 md:text-base text-[6px] disabled:bg-gray-500 disabled:opacity-50 disabled:active:scale-100"
                >
                  Whatsapp
                </button>
              </a>
            </div>
          </div>
          <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-[700px] xs:max-w-sm xxs:max-w-[340px] max-w-[300px] mx-auto md:mt-20 mt-10">
            <div className="grid grid-cols-3 space-x-5">
              {/* First div */}
              <div className="flex flex-col lg:justify-center justify-start items-start lg:space-y-12 md:space-y-8 xs:space-y-5 space-y-2">
                {/* photo */}
                <div className="w-12 xxs:w-16 xs:w-20 md:w-32 lg:w-44 xl:w-52">
                  <Image
                    src={data[0].photo}
                    alt="Profile Photo"
                    width={280}
                    height={417}
                    className="rounded-xl"
                    priority
                  />
                </div>
                <div className="lg:space-y-12 md:space-y-6 xs:space-y-3 space-y-1">
                  {/* Name */}
                  <h1 className="lg:text-3xl md:text-xl xs:text-xs text-[10px] font-lato font-bold first-letter:uppercase">
                    {data[0].name}
                  </h1>
                  {/* Data */}
                  <div className="flex md:space-x-5 xs:space-x-3 space-x-1">
                    <div className="md:space-y-2 space-y-1">
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        Application No:
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        Nationality:
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        Age:
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        Date of Birth:
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        Number of kids:
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        Martial Status:
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        Religion:
                      </h3>
                    </div>
                    <div className="md:space-y-2 space-y-1">
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        {data[0].ref_no}
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px] first-letter:uppercase">
                        {data[0].nationality}
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        {data[0].age} Years
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        {data[0].date_of_birth}
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                        {data[0].no_of_children}
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px] first-letter:uppercase">
                        {data[0].martial_status}
                      </h3>
                      <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px] first-letter:uppercase">
                        {data[0].religion}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={createCheckoutSession}
                    disabled={user ? false : true}
                    className="clickButton button disabled:bg-gray-500 disabled:opacity-50 disabled:active:scale-100 md:w-44 md:py-1.5 w-16 py-0 md:text-base text-[6px]"
                  >
                    {i18n.language === "ar" ? "احجز الان" : "Book Now"}
                  </button>
                </div>
              </div>
              {/* Seconed Div */}
              <div className="col-span-2 md:space-y-8 space-y-2">
                {/* Name */}
                <h1 className="md:text-5xl xs:text-2xl font-lato font-bold text-[#F48830] first-letter:uppercase">
                  {data[0].name}
                </h1>
                {/* Passport Details */}
                <div className="md:space-y-5 space-y-2">
                  <h1 className="md:text-2xl xs:text-base text-[10px] text-[#234F7E] font-lato font-bold">
                    Passport Details
                  </h1>
                  <div className="flex lg:space-x-52 md:space-x-20 space-x-10">
                    <div className="space-y-1">
                      <h3 className="md:text-base text-[7px]">
                        Passport Number:
                      </h3>
                      <h3 className="md:text-base text-[7px]">
                        Date of issue:
                      </h3>
                      <h3 className="md:text-base text-[7px]">Expiry Date:</h3>
                      <h3 className="md:text-base text-[7px]">
                        Place of issue:
                      </h3>
                    </div>
                    <div className="space-y-1">
                      <h3 className="md:text-base text-[7px]">
                        {data[0].number}
                      </h3>
                      <h3 className="md:text-base text-[7px]">
                        {data[0].date_of_issue}
                      </h3>
                      <h3 className="md:text-base text-[7px]">
                        {data[0].date_of_exp}
                      </h3>
                      <h3 className="md:text-base text-[7px] first-letter:uppercase">
                        {data[0].place_of_issue}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Candidate Details */}
                <div className="md:space-y-5 space-y-2">
                  <h1 className="md:text-2xl xs:text-base text-[10px] text-[#234F7E] font-lato font-bold">
                    Candidate Details
                  </h1>
                  <div className="flex lg:space-x-48 md:space-x-16 space-x-8">
                    <div className="space-y-1">
                      <h3 className="md:text-base text-[7px]">
                        Monthly salary (AED):
                      </h3>
                      <h3 className="md:text-base text-[7px]">Languages:</h3>
                      <h3 className="md:text-base text-[7px]">Profesion:</h3>
                      <h3 className="md:text-base text-[7px]">Visa Type:</h3>
                      <h3 className="md:text-base text-[7px]">Experience:</h3>
                    </div>
                    <div className="space-y-1">
                      <h3 className="md:text-base text-[7px]">
                        {data[0].monthly_salary}
                      </h3>
                      <h3 className="md:text-base text-[7px]">{`Arabic: ${data[0].arabic}  -  English: ${data[0].english}`}</h3>
                      <h3 className="md:text-base text-[7px] first-letter:uppercase">
                        Profession {data[0].post_applied}
                      </h3>
                      <h3 className="md:text-base text-[7px]">visa</h3>
                      <div>
                        <h3 className="md:text-base text-[7px]">
                          {data[0].saudi_arabia > 0
                            ? `${data[0].saudi_arabia} Years in Saudi arabia`
                            : ""}
                        </h3>
                        <h3 className="md:text-base text-[7px]">
                          {data[0].kuwait > 0
                            ? `${data[0].kuwait} Years in Kuwait`
                            : ""}
                        </h3>
                        <h3 className="md:text-base text-[7px]">
                          {data[0].jordan > 0
                            ? `${data[0].jordan} Years in Jordan`
                            : ""}
                        </h3>
                        <h3 className="md:text-base text-[7px]">
                          {data[0].qatar > 0
                            ? `${data[0].qatar} Years in Qatar`
                            : ""}
                        </h3>
                        <h3 className="md:text-base text-[7px]">
                          {data[0].uae > 0 ? `${data[0].uae} Years in UAE` : ""}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Can help with */}
                <div className="md:space-y-5 space-y-2">
                  <h1 className="md:text-2xl xs:text-base text-[10px] text-[#234F7E] font-lato font-bold">
                    Can help with
                  </h1>
                  <div className="flex md:space-x-5 space-x-2">
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="md:text-base text-[7px]">
                        {data[0].cleaning === "yes" ? "✔️" : "❌"}
                      </h1>
                      <h1 className="md:text-base text-[7px]">Cleaning</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="md:text-base text-[7px]">
                        {data[0].cooking === "yes" ? "✔️" : "❌"}
                      </h1>
                      <h1 className="md:text-base text-[7px]">Cooking</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="md:text-base text-[7px]">
                        {data[0].ironing === "yes" ? "✔️" : "❌"}
                      </h1>
                      <h1 className="md:text-base text-[7px]">Ironing</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="md:text-base text-[7px]">
                        {data[0].baby_sitting === "yes" ? "✔️" : "❌"}
                      </h1>
                      <h1 className="md:text-base text-[7px]">Baby Sitting</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="md:text-base text-[7px]">
                        {data[0].caring_for_the_elderly === "yes" ? "✔️" : "❌"}
                      </h1>
                      <h1 className="md:text-base text-[7px]">
                        Caring for the elderly
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Recommendations that candidate provide */}
                <div className="space-y-2">
                  <h1 className="md:text-2xl xs:text-xs text-[10px] text-[#234F7E] font-lato font-bold">
                    Recommendations that Candidate can provide
                  </h1>
                  <h3 className="md:text-base text-[7px]">
                    Not mentioned by the candidate
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
      <Footer />
    </div>
  );
};

export default withAuth(MaidProfile);
