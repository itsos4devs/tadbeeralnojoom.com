/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { doc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  useDocumentData,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
import { useTranslation } from "react-i18next";
import { useUser } from "../auth/useUser";
import withAuth from "../auth/withAuth";
import { db } from "../config";
import { getMaid } from "../fetching/getMaid";
import maidPhoto from "../public/maidPhoto.png";

const MaidUpcoming = ({ id }) => {
  const { user, logout } = useUser();
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [value] = useDocumentDataOnce(
    doc(
      db,
      "users",
      user?.email ? user?.email : "karimkhaledelmawe@gmail.com",
      "upcomingInterviews",
      id
    )
  );
  const { data } = useQuery(["getMaid", value?.maidId], getMaid, {
    staleTime: Infinity,
  });

  function setDateAsUTC(d) {
    let date = new Date(d);
    return new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes()
      )
    );
  }

  return (
    <div>
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
            {setDateAsUTC(
              value?.date
                .replaceAll("/", "-")
                .replace("2023", value?.date.slice(0, 2))
                .replace(value?.date.slice(0, 2), "2023") +
                " " +
                value?.time
            )
              .toLocaleString("en-IN")
              .replaceAll(":00", "")}
          </h1>
          <button
            onClick={() => {
              router.push({
                pathname: `interview/${value?.interviewId}`,
              });
            }}
            className={`clickButton ${
              new Date().getTime() <= value?.order
                ? "bg-[#F9B730]"
                : "bg-[#EE2424]"
            } md:px-3 px-2 py-0.5 md:text-base sm:text-xs text-[7px] text-white rounded-md`}
          >
            {new Date().getTime() <= value?.order ? "Upcoming" : "History"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default withAuth(MaidUpcoming);
