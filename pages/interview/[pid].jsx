/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useEffectOnce } from "usehooks-ts";
import withAuth from "../../auth/withAuth";
import { useUser } from "../../auth/useUser";
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
  const { user, logout } = useUser();
  const router = useRouter();
  const { pid } = router.query;
  useEffectOnce(() => {
    const stream = async () => {
      pc = new RTCPeerConnection(servers);
      const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });
      return localStream;
    };
    stream();
  });
  return (
    <div>
      <Head>
        <title>Our Team / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className="relative">
        <Header />
      </div>
      {/* Room */}
      <iframe
        allow="camera; microphone; fullscreen; display-capture; clipboard-read; clipboard-write; autoplay;"
        src={`https://c2c.mirotalk.com?room=${pid}`}
        className="h-screen w-full md:pt-[71px] pt-[20px]"
      ></iframe>
      <Footer />
    </div>
  );
};

export default withAuth(pid);
