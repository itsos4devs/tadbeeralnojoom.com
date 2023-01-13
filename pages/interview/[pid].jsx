/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// TODO: implement Leave meating
// TODO: if local stream is off send to the remote
// TODO: if remote stream is off send to the local
// TODO: if user left the meeting send to other user
import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { firestore } from "../../utils";
import {
  ChatBubbleBottomCenterIcon,
  MicrophoneIcon,
  ShieldCheckIcon,
  UsersIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useEffectOnce } from "usehooks-ts";
const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

let pc;
const pid = () => {
  const router = useRouter();
  let localRef = useRef();
  let remoteRef = useRef();
  let localStream = null;
  let remoteStream = null;

  const [video, setVideo] = useState(true);
  const [mic, setMic] = useState(true);
  const [chat, setChat] = useState(false);
  const [meeting, setMeeting] = useState(false);
  useEffectOnce(() => {
    pc = new RTCPeerConnection(servers);
  });

  useEffect(() => {
    const stream = async () => {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });
      localRef.current.srcObject = localStream;

      // Pull tracks from remote stream, add to video stream
      remoteStream = new MediaStream();
      pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track);
        });
      };
      meeting ? (remoteRef.current.srcObject = remoteStream) : null;
    };
    stream();
  }, [meeting]);

  useEffect(() => {
    const remoteUser = async () => {
      if (meeting) {
        const callDoc = firestore.collection("calls").doc(router.query.pid);
        const offerCandidates = callDoc.collection("offerCandidates");
        const answerCandidates = callDoc.collection("answerCandidates");

        pc.onicecandidate = (event) => {
          event.candidate && answerCandidates.add(event.candidate.toJSON());
        };

        // Fetch data, then set the offer & answer

        const callData = (await callDoc.get()).data();

        await pc.setRemoteDescription(
          new RTCSessionDescription(callData.offer)
        );

        const answerDescription = await pc.createAnswer();
        console.log(answerDescription);
        await pc.setLocalDescription(answerDescription);

        const answer = {
          type: answerDescription.type,
          sdp: answerDescription.sdp,
        };

        callData.answer
          ? await callDoc.update({ answer })
          : await callDoc.set({ answer });

        // Listen to offer candidates
        offerCandidates.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              let data = change.doc.data();
              pc.addIceCandidate(new RTCIceCandidate(data));
            }
          });
        });
        // Listen for remote ICE candidates
        answerCandidates.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const candidate = new RTCIceCandidate(change.doc.data());
              pc.addIceCandidate(candidate);
            }
          });
        });
      }
    };
    remoteUser();
  }, [meeting]);

  const localUser = async () => {
    setMeeting(true);
    const targetDoc = await firestore
      .doc("calls/" + `${router.query.pid}`)
      .get();
    const callDoc = firestore.doc("calls/" + `${router.query.pid}`);
    const offerCandidates = callDoc.collection("offerCandidates");
    const answerCandidates = callDoc.collection("answerCandidates");
    // Get candidates for caller, save to db
    pc.onicecandidate = (event) => {
      event.candidate && offerCandidates.add(event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };
    const callData = (await callDoc.get()).data();
    const answer = {
      type: "",
      sdp: "",
    };
    callData.answer ? await callDoc.update({ answer }) : null;
    callData.offer
      ? await callDoc.update({ offer })
      : await callDoc.set({ offer });

    // Listen for remote answer
    callDoc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
      }
    });
  };

  // useEffect(() => {
  //   if (!video) {
  //     const tracks = localStream.getVideoTracks();
  //     tracks[0].stop();
  //     localStream = null;
  //   }
  //   if (!mic) {
  //     const tracks = localStream.getAudioTracks();
  //     tracks[0].stop();
  //     localStream = null;
  //   }
  // }, [!video, !mic]);

  return (
    <div>
      <Head>
        <title>Our Team / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Banner />

      <div className="pt-[70px] h-screen flex">
        {/* <div className="flex flex-col w-screen "> */}
        {meeting && (
          <div className="flex flex-col w-full">
            <div className="flex-grow space-x-10 bg-black flex justify-center items-center p-10">
              <div className="relative w-[750px] bg-black h-[416px] rounded-xl">
                <video
                  ref={localRef}
                  autoPlay
                  playsInline
                  className={
                    video
                      ? "absolute w-full h-full object-cover scale-100  rounded-xl"
                      : "hidden"
                  }
                />
              </div>
              <div className="relative w-[750px] bg-black h-[416px] rounded-xl">
                <video
                  ref={remoteRef}
                  autoPlay
                  playsInline
                  className="absolute w-full h-full object-cover scale-100  rounded-xl"
                />
              </div>
            </div>
            <div className="bg-[#1C1E20] text-[#D2D2D2] flex justify-between p-[5px] select-none">
              <div className="flex">
                <div
                  onClick={() => setMic(!mic)}
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
                  <span className="font-semibold">
                    {mic ? "Mute" : "Unmute"}
                  </span>
                </div>
                <div
                  onClick={() => setVideo(!video)}
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
        )}
        {!meeting && (
          <div className="flex h-[540px] justify-between items-center w-screen mt-20 ">
            <div className="ml-20 relative">
              <div className="relative w-[750px] bg-black h-[416px] rounded-xl">
                <video
                  ref={localRef}
                  autoPlay
                  playsInline
                  className={
                    video
                      ? "absolute w-full h-full object-cover scale-100  rounded-xl"
                      : "hidden"
                  }
                />
              </div>
              <div className="text-[#D2D2D2] flex justify-between p-[5px] select-none absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex space-x-5">
                  <div
                    onClick={() => setMic(!mic)}
                    className="clickButton border border-white flex h-[3.5rem] w-[3.5rem] rounded-full flex-col justify-center relative items-center cursor-pointer hover:bg-[#ffff]/40"
                  >
                    {mic ? (
                      <MicrophoneIcon className="h-6 w-6 text-white" />
                    ) : (
                      <div className="relative">
                        <MicrophoneIcon className="h-6 w-6 text-red-500" />
                        <div className="bg-red-500 h-[0.5px] w-5 z-20 rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    )}
                  </div>
                  <div
                    onClick={() => setVideo(!video)}
                    className="clickButton border border-white flex h-[3.5rem] w-[3.5rem] rounded-full flex-col justify-center relative items-center cursor-pointer hover:bg-[#ffff]/40"
                  >
                    {video ? (
                      <VideoCameraIcon className="h-6 w-6 text-white" />
                    ) : (
                      <VideoCameraSlashIcon className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-5 max-w-xl mx-auto">
              <h1 className="text-ellipsis whitespace-nowrap text-3xl font-lato font-bold">
                Ready to join?
              </h1>
              <h4>User is in this call</h4>
              <button
                onClick={localUser}
                className="button clickButton bg-[#1a72e5] text-lg font-roboto font-bold w-44"
              >
                Join now
              </button>
            </div>
          </div>
        )}
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
      <Footer />
    </div>
  );
};

export default pid;
