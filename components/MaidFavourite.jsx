/* eslint-disable react-hooks/rules-of-hooks */
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { deleteDoc, doc } from "firebase/firestore";
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

const MaidFavourite = ({ id }) => {
  const { data: session } = useSession();

  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [value] = useDocumentDataOnce(
    doc(
      db,
      "users",
      session.user?.email ? session.user?.email : "karimkhaledelmawe@gmail.com",
      "favourite",
      id
    )
  );
  const { data } = useQuery(["getMaid", value?.maidId], getMaid, {
    staleTime: Infinity,
  });

  const deleteFavourite = async () => {
    await deleteDoc(
      doc(
        db,
        "users",
        session.user?.email
          ? session.user?.email
          : "karimkhaledelmawe@gmail.com",
        "favourite",
        id
      )
    );
    return toast.success(
      i18n.language === "ar" ? "حذفت بنجاح" : "Deleted Successfully",
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    );
  };

  return (
    <div className="relative">
      <Toaster position={i18n.language === "ar" ? "top-left" : "top-right"} />
      <XMarkIcon
        className="h-6 w-6 text-red-500 cursor-pointer absolute right-0"
        onClick={deleteFavourite}
      />
      {data?.map((item) => (
        <div
          key={item.nummber}
          className="flex flex-col items-center space-y-1"
        >
          {/* Image */}
          <div className="md:h-28 md:w-28 sm:h-16 sm:w-16 h-10 w-10">
            <Image
              src={item.photo || maidPhoto}
              alt="Maid Photo"
              className={`rounded-full`}
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

export default MaidFavourite;
