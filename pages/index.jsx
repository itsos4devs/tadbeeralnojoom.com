import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MaidsSection from "../components/MaidsSection";
import ServiceSection from "../components/ServiceSection";
import Testimonial from "../components/Testimonial";
import banner from "../public/banner.jpeg";
import { useTranslation } from "react-i18next";
import PopupVideo from "../components/PopupVideo";
import axios from "axios";
// TODO: implement next page
// FIXME: wait maid/id api
// FIXME: wait photo | job | id from maid api
// TODO: remove stripe and implement a popup window onclick book now showing terms and when clicked email
// TODO: find maids search implement
// TODO: find maids experience arabic change align
export default function Home({ data }) {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>Home / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
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
          text3={t("bannerDesc")}
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

export async function getStaticProps(context) {
  const options = {
    method: "GET",
    url: "https://alnujoomerp.net/api/v1/Maids",
    params: { "api-key": "8o0884ws88kkoc484k4s8kg0o04okockk0k0gwso" },
  };

  const res = await axios.request(options);
  return {
    props: {
      data: res.data.response,
    },
  };
}
