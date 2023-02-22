import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  useCollection,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
import { db } from "../config";
import { collection, doc } from "firebase/firestore";
const PopupVideo = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [activeDrags, setActiveDrags] = useState({
    activeDrags: 80,
    deltaPosition: {
      x: 80,
      y: 80,
    },
    controlledPosition: {
      x: -400,
      y: 500,
    },
  });
  const onStart = () => {
    setActiveDrags({ activeDrags: ++activeDrags.activeDrags });
  };

  const onStop = () => {
    setActiveDrags({ activeDrags: --activeDrags.activeDrags });
  };
  const dragHandlers = { onStart: onStart, onStop: onStop };
  useEffect(() => {
    const timePopup = setTimeout(() => {
      setOpenVideo(true);
    }, 3000);
    return () => {
      clearInterval(timePopup);
    };
  }, []);
  const [snapshot] = useCollection(collection(db, "popupVideo"));

  return (
    <div className="z-50 absolute right-0 lg:top-[800px] md:top-96 top-56 ">
      {openVideo && (
        <Draggable bounds={{ right: 0, bottom: "100%" }} {...dragHandlers}>
          <div className="lg:cursor-grab lg:active:cursor-grabbing">
            <video
              className="lg:w-[363px] md:w-[250px] w-[200px]"
              width="320"
              controls
              src={snapshot?.docs?.map((item) => {
                return item.data().src;
              })}
              autoPlay
              muted
            ></video>
            <div
              onClick={() => setOpenVideo(false)}
              className="absolute -top-7 right-0 cursor-pointer border rounded-full border-black bg-white"
            >
              <XMarkIcon className="text-black font-bold h-4 w-4" />
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default PopupVideo;
