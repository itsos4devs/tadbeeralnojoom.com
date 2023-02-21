/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { toast, Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { db } from "../config";
import { getMaid } from "../fetching/getMaid";
import maidPhoto from "../public/maidPhoto.png";

const MaidUpcoming = ({ id }) => {
  const { data: session } = useSession();

  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [value] = useDocumentDataOnce(
    doc(
      db,
      "users",
      session.user?.email ? session.user?.email : "karimkhaledelmawe@gmail.com",
      "upcomingInterviews",
      id
    )
  );
  const { data } = useQuery(["getMaid", value?.maidId], getMaid, {
    staleTime: Infinity,
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60) + 1;
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div>
      <Toaster position="top-right" />
      {data?.map((item) => (
        <div
          key={item.nummber}
          className="flex flex-col items-center space-y-1 group"
        >
          {/* Image */}
          <div className="md:h-28 md:w-28 sm:h-16 sm:w-16 h-10 w-10">
            <Image
              src={item.photo || maidPhoto}
              alt="Maid Photo"
              className={`rounded-full group-hover:border-2 group-hover:border-yellow-500`}
              width={117}
              height={117}
            />
          </div>
          {/* Name */}
          <h1 className="md:text-base sm:text-sm text-xs font-semibold text-center first-letter:uppercase lowercase">
            {item.name}
          </h1>
          {/* Location */}
          <h1 className="md:text-sm text-xs first-letter:uppercase lowercase">
            {item.nationality}
          </h1>
          <h1 className="md:text-sm text-xs first-letter:uppercase lowercase">
            {new Date(value?.date).toLocaleString(["en-NZ"], {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </h1>
          <button
            onClick={() => {
              value?.order < new Date().setMinutes(new Date().getMinutes() - 31)
                ? toast.error("Sorry This interview is outdated", {
                    style: {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                    },
                  })
                : value?.order > new Date()
                ? toast.error(
                    `The Interview will start after ${
                      getTimeRemaining(value?.date).days != 0
                        ? getTimeRemaining(value?.date).days + " days and"
                        : ""
                    } ${
                      getTimeRemaining(value?.date).hours != 0
                        ? getTimeRemaining(value?.date).hours + " hours and"
                        : ""
                    }  ${
                      getTimeRemaining(value?.date).minutes != 0
                        ? getTimeRemaining(value?.date).minutes + " minutes"
                        : "Refresh The page"
                    } `,
                    {
                      style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                      },
                    }
                  )
                : router.push({
                    pathname: `/interview/${value?.interviewId}`,
                  });
            }}
            className={`clickButton ${
              value?.order < new Date().setMinutes(new Date().getMinutes() - 31)
                ? "bg-[#EE2424]"
                : value?.order > new Date()
                ? "bg-[#F9B730]"
                : "bg-[#68B34A]"
            } md:px-3 px-2 py-0.5 md:text-base sm:text-xs text-[7px] text-white rounded-md`}
          >
            {value?.order < new Date().setMinutes(new Date().getMinutes() - 31)
              ? "History"
              : value?.order > new Date()
              ? "Upcoming"
              : "Live"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MaidUpcoming;
