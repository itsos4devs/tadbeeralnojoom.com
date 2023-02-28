import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MaidsSection from "../components/MaidsSection";
import ServiceSection from "../components/ServiceSection";
import Testimonial from "../components/Testimonial";
import banner from "../public/banner.jpeg";
import { useTranslation } from "react-i18next";
import PopupVideo from "../components/PopupVideo";
import { useQuery } from "@tanstack/react-query";
import { getMaids } from "../fetching/getMaids";

export default function Home() {
  const { t } = useTranslation();
  const { data } = useQuery(["getMaids"], getMaids, {
    staleTime: Infinity,
  });
  return (
    <div>
      <Head>
        <title>Home / Tadbeer</title>
        <meta
          name="description"
          content="tadbeeralnujoom.com is a website for company in Dubai that handles Tadbeer services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <PopupVideo />

      {/* Banner and Header */}
      <section>
        <Banner
          imageSrc={banner}
          imageUlt={"Home Banner"}
          text1={t("life")}
          text2={t("help")}
          textPosition={"top-1/3 xl:right-60 md:right-20 right-5"}
        />
      </section>
      {/* Maids section */}
      <section>
        <MaidsSection data={data} />
      </section>
      {/* Services section */}
      <section>
        <ServiceSection />
      </section>
      {/* Testimonials */}
      <section>
        <Testimonial />
      </section>
      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
