/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// TODO: implement Leave meating
// TODO: test the video chat
// FIXME: reconnect after losing connection
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
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
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
  let localVideoRef = useRef();
  let remoteVideoRef = useRef();
  let localStream = null;
  let remoteStream = null;

  const [video, setVideo] = useState(false);
  const [mic, setMic] = useState(false);
  const [chat, setChat] = useState(false);
  const [callId, setCallId] = useState();

  useEffect(() => {
    pc = new RTCPeerConnection(servers);
    const stream = async () => {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      remoteStream = new MediaStream();
      if (video || mic) {
        localStream.getTracks().forEach((track) => {
          pc.addTrack(track, localStream);
        });
        // Pull tracks from remote stream, add to video stream
        pc.ontrack = (event) => {
          event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
          });
        };
        localVideoRef.current.srcObject = localStream;
        remoteVideoRef.current.srcObject = remoteStream;
      }
      if (!video) {
        const tracks = localStream.getTracks();
        tracks[1].stop();
        localVideoRef.current.srcObject = localStream;
      }
      if (!mic) {
        const tracks = localStream.getTracks();
        tracks[0].stop();
        localVideoRef.current.srcObject = localStream;
      }
    };
    stream();
  }, [video, mic]);

  const create = async () => {
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

    // Reference Firestore collections for signaling
    const callDoc = firestore.collection("calls").doc();
    const offerCandidates = callDoc.collection("offerCandidates");
    const answerCandidates = callDoc.collection("answerCandidates");

    router.push({
      pathname: `/interview/${callDoc.id}`,
    });

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

    await callDoc.set({ offer });

    // Listen for remote answer
    callDoc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
      }
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
  };
  const answer = async () => {
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

    const callDoc = firestore.collection("calls").doc(router.query.pid);
    const offerCandidates = callDoc.collection("offerCandidates");
    const answerCandidates = callDoc.collection("answerCandidates");

    pc.onicecandidate = (event) => {
      event.candidate && answerCandidates.add(event.candidate.toJSON());
    };

    // Fetch data, then set the offer & answer

    const callData = (await callDoc.get()).data();

    const offerDescription = callData.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await callDoc.update({ answer });

    // Listen to offer candidates

    offerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        console.log(change);
        if (change.type === "added") {
          let data = change.doc.data();
          pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  };
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
        <div className="flex flex-col w-screen">
          <div className="flex-grow space-x-10 bg-black flex justify-center items-center p-10">
            <div>
              <video
                ref={localVideoRef}
                autoPlay
                playsInline
                className={
                  video
                    ? "w-full h-auto text-center max-w-full border border-gray-200 rounded-lg"
                    : "hidden"
                }
                muted
              />
            </div>
            <div>
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className={
                  video
                    ? "w-full h-auto text-center max-w-full border border-gray-200 rounded-lg"
                    : "hidden"
                }
                muted
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
                <span className="font-semibold">{mic ? "Mute" : "Unmute"}</span>
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
      <button onClick={create} className="clickButton button">
        Create
      </button>
      <button onClick={answer} className="clickButton button">
        Answer
      </button>
      <Footer />
    </div>
  );
};

export default pid;
