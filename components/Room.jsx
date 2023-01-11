/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import {
  ChatBubbleBottomCenterIcon,
  MicrophoneIcon,
  ShieldCheckIcon,
  UsersIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
} from "@heroicons/react/24/solid";

const Room = () => {
  let localVideoRef = useRef();
  const [video, setVideo] = useState(false);
  const [mic, setMic] = useState(false);
  const [chat, setChat] = useState(false);

  const videoHandler = () => {
    setVideo(!video);
    const stream = async () => {
      const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (!video) {
        localVideoRef.current.srcObject = localStream;
      }
      if (video) {
        const tracks = localStream.getTracks();
        tracks[0].stop();
        localVideoRef.current.srcObject = localStream;
      }
    };
    stream();
  };
  const micHandler = () => {
    setMic(!mic);
    const stream = async () => {
      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      if (mic) {
        const tracks = localStream.getTracks();
        tracks[0].stop();
      }
    };
    stream();
  };

  //   TODO: build the streaming using Firebase and WebRTC
  //   TODO: build the realtime chat
  return (
    <div className="pt-[70px] h-screen flex">
      <div className="flex flex-col w-screen">
        <div className="flex-grow bg-black flex justify-center items-center p-10">
          <div className="h-[500px] w-[500px]">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              className="local"
              muted
            />
          </div>
        </div>
        <div className="bg-[#1C1E20] text-[#D2D2D2] flex justify-between p-[5px] select-none">
          <div className="flex">
            <div
              onClick={micHandler}
              className="clickButton flex flex-col justify-center items-center px-3 py-2 min-w-[80px] cursor-pointer hover:bg-[#343434] rounded-md"
            >
              {mic ? (
                <MicrophoneIcon className="h-5 w-5 text-white" />
              ) : (
                <div className="relative">
                  <MicrophoneIcon className="h-5 w-5 text-red-500" />
                  <div className="bg-red-500 h-[0.5px] w-5 z-20 rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              )}
              <span className="font-semibold">{mic ? "Mute" : "Unmute"}</span>
            </div>
            <div
              onClick={videoHandler}
              className="clickButton flex flex-col justify-center items-center px-3 py-2 min-w-[80px] cursor-pointer hover:bg-[#343434] rounded-md"
            >
              {video ? (
                <VideoCameraIcon className="h-5 w-5 text-white" />
              ) : (
                <VideoCameraSlashIcon className="h-5 w-5 text-red-500" />
              )}
              <span className="font-semibold">
                {video ? "Stop Video" : "Play Video"}
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="clickButton flex flex-col justify-center items-center px-3 py-2 min-w-[80px] cursor-pointer hover:bg-[#343434] rounded-md">
              <ShieldCheckIcon className="h-5 w-5 text-white" />
              <span className="font-semibold">Security</span>
            </div>
            <div className="clickButton flex flex-col justify-center items-center px-3 py-2 min-w-[80px] cursor-pointer hover:bg-[#343434] rounded-md">
              <UsersIcon className="h-5 w-5 text-white" />
              <span className="font-semibold">Participants</span>
            </div>
            <div
              onClick={() => setChat(!chat)}
              className="clickButton flex flex-col justify-center items-center px-3 py-2 min-w-[80px] cursor-pointer hover:bg-[#343434] rounded-md"
            >
              <ChatBubbleBottomCenterIcon className="h-5 w-5 text-white" />
              <span className="font-semibold">Chat</span>
            </div>
          </div>
          <div className="flex">
            <div className="clickButton flex flex-col justify-center items-center px-3 py-2 min-w-[80px] cursor-pointer hover:bg-[#343434] rounded-md">
              <span className="text-[#EB534B] font-semibold">
                Leave Meeting
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          chat
            ? "flex flex-col bg-[#242324] border-l-1 border-[#3D3D42] w-[400px]"
            : "hidden"
        }
      >
        <div className="pt-[5px] text-[#F5F5F5] text-center mb-2">
          <h1 className="text-xl font-lato font-bold">Chat</h1>
        </div>
        <div className="flex-grow list-none">
          <ul className="space-y-2">
            <li className="text-white mx-2">
              <b>user1</b>
              <br />
              Hi
            </li>
            <li className="text-white mx-2">
              <b>user2</b>
              <br />
              Hello
            </li>
          </ul>
        </div>
        <div className="py-5 px-3 flex">
          <input
            id="chat_message"
            type="text"
            placeholder="Type message here..."
            className="flex-grow bg-transparent border-none text-[#F5F5F5] outline-none h-3 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Room;
