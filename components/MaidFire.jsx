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
import { db } from "../config";
import { getMaid } from "../fetching/getMaid";
import maidPhoto from "../public/maidPhoto.png";

const MaidFire = ({ id }) => {
  const { user, logout } = useUser();
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [value] = useDocumentDataOnce(
    doc(
      db,
      "users",
      user?.email || "karimkhaledelmawe.gmail.com",
      "upcomingInterviews",
      id
    )
  );

  const { data } = useQuery(["getMaid", value?.maidId], getMaid, {
    staleTime: Infinity,
  });
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
          <button
            onClick={() => {
              router.push({
                pathname: `profile/${item.number.toLowerCase()}`,
              });
            }}
            className={`clickButton bg-[#E48100] md:px-3 px-2 py-0.5 md:text-base sm:text-xs text-[7px] text-white rounded-md`}
          >
            {t("maidViewProfile")}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MaidFire;
