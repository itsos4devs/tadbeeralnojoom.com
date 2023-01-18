/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Banner from "../components/Banner";
import ourService from "../public/ourServices.jpeg";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import Head from "next/head";
import withAuth from "../auth/withAuth";

const ourServices = () => {
  return (
    <div>
      <Head>
        <title>Services / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Banner
        imageSrc={ourService}
        imageUlt="Our Services banner"
        text1={"Our Services"}
        textPosition={
          "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default withAuth(ourServices);
