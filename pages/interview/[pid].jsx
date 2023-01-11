/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Room from "../../components/room";

const pid = () => {
  const [currentPage, setCurrentPage] = useState("create");
  const [joinCode, setJoinCode] = useState("");
  useEffect(() => {
    setJoinCode("lol");
  }, []);
  return (
    <div>
      <Head>
        <title>Our Team / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Banner />
      <Room mode={currentPage} callId={joinCode} setPage={setCurrentPage} />
      <Footer />
    </div>
  );
};

export default pid;
