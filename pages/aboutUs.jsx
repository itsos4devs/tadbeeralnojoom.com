/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Banner from "../components/Banner";
import about from "../public/about.jpeg";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Head from "next/head";

const aboutUs = () => {
  return (
    <div>
      <Head>
        <title>About Us / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Banner
        imageSrc={about}
        imageUlt="about us banner"
        text1={"About Us"}
        textPosition={
          "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      />
      <div className="h-full md:mb-44 lg:max-w-6xl md:max-w-4xl max-w-sm mx-auto space-y-20">
        <div className="text-center xl:mt-32 md:mt-20 mt-10 space-y-5">
          <h1 className="text-[#E48100] font-lato font-extrabold md:text-4xl md:w-[600px] mx-auto text-2xl">
            TItle of the Content
          </h1>
          <p className="md:w-[400px] sm:w-[300px] w-[250px] font-semibold text-[#234F7E] md:text-sm sm:text-xs text-[10px] mx-auto">
            Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
            nostrud oratio aperiri legimus eu.
          </p>
        </div>
        <div className="text-center space-y-5">
          <p>
            Lorem ipsum dolor sit amet. Aut internos temporibusAut quas vel
            eveniet repellendus 33 impedit sunt? Sit voluptatem reiciendisCum
            galisum in vitae saepe ut distinctio dolore. Ad aspernatur impedit
            in explicabo ducimusEa quis ut nihil magni aut repudiandae error rem
            rerum magnam qui dolor nostrum. Eos dicta dolores et veritatis
            praesentiumQui libero eos internos blanditiis et inventore quidem
            aut architecto autem. Et iure quisquam ea rerum aliasut dolorem ut
            excepturi facilis ad officiis galisum? Qui expedita teneturIn animi
            sit possimus galisum qui minima deleniti! Et iste voluptasAd
            blanditiis a voluptate omnis qui velit quibusdam et voluptas odio.
            Ut ipsum labore et repudiandae praesentiumHic dolorem vel aliquid
            amet ut neque debitis. Ea quod laborum ut vero omniset facilis nam
            alias dolorem. Sed quasi numquam Sed natus aut distinctio ratione?
            33 corporis sapienteSed optio ad repellat nihil 33 iusto dolorem.
            Sit error laboreEt magnam ut deserunt eligendi et voluptatum ratione
            cum totam itaque. Et ratione consectetur et enim consequaturEt
            corporis non earum quasi et expedita similique ut nobis nihil ut
            fugiat fuga! Est iure accusantiumAut iusto ut libero vero ex dolore
            dolorem. Eos officiis perspiciatisnon officiis est similique
            facilis? Aut voluptas quis ut voluptatibus quiaUt consequuntur rem
            tempore beatae et velit optio hic nihil voluptatibus et ratione
            aperiam. Aut dolores magniEt autem sit dolores quod et minima sequi
            est libero numquam et enim quia. Sed deleniti quiaEst aliquid ea
            omnis animi est dolorem inventore est sint omnis. Et voluptatem
            suntCum deleniti ea maiores cumque aut illo optio sit quis impedit.
            Est consequatur nulla vel nihil quibusdamIn galisum. A explicabo
            magnam In sint eos possimus nulla et dolor voluptas quo fugit
            laudantium sit internos minima? Ab deleniti consequaturEa ipsam est
            consectetur tempore qui Quis nostrum qui amet deserunt sit odit fuga
            et eveniet beatae. Qui illo impedit hic dolore distinctioAut
            nostrum. Rem distinctio consequuntur ut accusamus facilisvel fuga
            non accusantium temporibus 33 quibusdam ipsam? Aut sunt voluptates
            Sit quidem qui eaque tempora aut praesentium expedita? Vel optio
            eaqueEt corrupti rem nihil tempora ut quaerat dolore quo deserunt
            exercitationem aut laudantium saepe! Sed atque porroId voluptatem
            aut ipsum nihil qui facilis facilis ut ipsa expedita. Ea labore
            delectusQui deleniti a internos consectetur ea assumenda dolore. Aut
          </p>
          <p>
            autem voluptates aut itaque nobiseum dolores cum maxime voluptatum.
            Sit autem odio Ea reiciendis non facere eaque ut unde libero. Vel
            dolorum numquamEa atque et galisum enim sed enim repudiandae. Cum
            veritatis quidem qui quod quia Ut laboriosam aut perspiciatis enim
            est quas omnis quo dolores culpa. Ea molestiae similique eos
            expedita distinctioSed officiis ut officiis eius id facere dicta.
            Aut odit inciduntQuo dolore ex omnis dolorem. Et galisum earumRem
            harum aut adipisci quaerat non minima delectus qui adipisci
            accusamus 33 dolorum consequatur. Est impedit veniam33 quia non quos
            sunt sed voluptatum odio ex repellat ullam ut corporis distinctio.
            Ea expedita perferendis non omnis facilis et pariatur omnis. In odio
            voluptatum vel deleniti commodi aut architecto nostrum et quam odit.
            Est enim quia eum sint quam et officiis iure aut fuga facere. Aut
            saepe nobis qui facilis laboriosam ea odit odio a temporibus dolore.
          </p>
          <p>
            autem voluptates aut itaque nobiseum dolores cum maxime voluptatum.
            Sit autem odio Ea reiciendis non facere eaque ut unde libero. Vel
            dolorum numquamEa atque et galisum enim sed enim repudiandae. Cum
            veritatis quidem qui quod quia Ut laboriosam aut perspiciatis enim
            est quas omnis quo dolores culpa. Ea molestiae similique eos
            expedita distinctioSed officiis ut officiis eius id facere dicta.
            Aut odit inciduntQuo dolore ex omnis dolorem. Et galisum earumRem
            harum aut adipisci quaerat non minima delectus qui adipisci
            accusamus 33 dolorum consequatur. Est impedit veniam33 quia non quos
            sunt sed voluptatum odio ex repellat ullam ut corporis distinctio.
            Ea expedita perferendis non omnis facilis et pariatur omnis. In odio
            voluptatum vel deleniti commodi aut architecto nostrum et quam odit.
            Est enim quia eum sint quam et officiis iure aut fuga facere. Aut
            saepe nobis qui facilis laboriosam ea odit odio a temporibus dolore.
          </p>
          <p>
            autem voluptates aut itaque nobiseum dolores cum maxime voluptatum.
            Sit autem odio Ea reiciendis non facere eaque ut unde libero. Vel
            dolorum numquamEa atque et galisum enim sed enim repudiandae. Cum
            veritatis quidem qui quod quia Ut laboriosam aut perspiciatis enim
            est quas omnis quo dolores culpa. Ea molestiae similique eos
            expedita distinctioSed officiis ut officiis eius id facere dicta.
            Aut odit inciduntQuo dolore ex omnis dolorem. Et galisum earumRem
            harum aut adipisci quaerat non minima delectus qui adipisci
            accusamus 33 dolorum consequatur. Est impedit veniam33 quia non quos
            sunt sed voluptatum odio ex repellat ullam ut corporis distinctio.
            Ea expedita perferendis non omnis facilis et pariatur omnis. In odio
            voluptatum vel deleniti commodi aut architecto nostrum et quam odit.
            Est enim quia eum sint quam et officiis iure aut fuga facere. Aut
            saepe nobis qui facilis laboriosam ea odit odio a temporibus dolore.
          </p>
          <div className="space-y-1 text-left">
            <h1>
              {" "}
              Est enim quia eum sint quam et officiis iure aut fuga facere. Aut
              saepe nobis qui facilis laboriosam ea odit odio a temporibus
              dolore.
            </h1>
            <div className="ml-5 space-y-2">
              <h1>
                1- Est enim quia eum sint quam et officiis iure aut fuga facere.
                Aut saepe nobis qui facilis laboriosam ea odit odio a temporibus
                dolore.
              </h1>
              <h1>
                2- Est enim quia eum sint quam et officiis iure aut fuga facere.
                Aut saepe nobis qui facilis laboriosam ea odit odio a temporibus
                dolore.
              </h1>
              <h1>
                3- Est enim quia eum sint quam et officiis iure aut fuga facere.
                Aut saepe nobis qui facilis laboriosam ea odit odio a temporibus
                dolore.
              </h1>
              <h1>
                4- Est enim quia eum sint quam et officiis iure aut fuga facere.
                Aut saepe nobis qui facilis laboriosam ea odit odio a temporibus
                dolore.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutUs;
