// ACHIEVEMENTS PAGE (URL: /#/achievements): gallery of award photos.
// TO ADD A PHOTO: put the image in src/assets, add an import line like the ones below,
// then copy one <img ... /> line in the grid and use your new variable name.
import React from 'react'
import { useLang } from "../i18n/LanguageContext";
// One import per photo. Lines starting with // are photos that are currently hidden.
import award1 from "../assets/awards1.jpeg";
import award2 from "../assets/awards2.jpeg";
import award3 from "../assets/awards3.jpeg";
import award4 from "../assets/awards4.jpeg";
import award5 from "../assets/awards5.jpeg";
import award6 from "../assets/awards6.jpeg";
import award7 from "../assets/awards7.jpeg";
import award8 from "../assets/awards8.jpeg";
import award9 from "../assets/awards9.jpeg";
import awards10 from "../assets/awards10.jpeg";
import award11 from "../assets/award11.jpeg";
import award12 from "../assets/award12.jpeg";
// import award13 from "../assets/award13.jpeg";
import bgo1 from "../assets/bgo1.jpeg";
import bg02 from "../assets/bg02.jpeg";
import bgo3 from "../assets/bgo3.jpeg";
import news from "../assets/new.jpg";
import { useEffect } from 'react';

// Page component.
export default function Achievements() {
  // LANGUAGE: t("key") returns text in the chosen language (src/i18n/translations.js).
  const { t } = useLang();
   // Scrolls to the top when the page opens.
   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);

// Page layout (JSX) starts here.
return (
<>
 <div className=" mx-auto min-w-full items-center text-xl bg-gray-50 rounded shadow-lg">
        <div className=" flex flex-col items-center justify-center p-4 m-4">
      {/*
        EDIT HERE: page heading and the intro paragraph below it.
      */}
      <p
  className="
    text-4xl
    font-extrabold
    text-blue-900
    tracking-tight
    hover:animate-zoomIn underline
  "
>{t("home.achievements")}</p>
          <p className="text-xl text-gray-600 p-4 ">
            {t("ach.intro")}
          </p>
        </div>
        {/*
          PHOTO GRID: 1 column on phones, 4 on desktop (md:grid-cols-4).
        */}
        <div className=" overflow-hidden rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {/* <img src={award1} alt="Award 1" className="m-2 " />
          <img src={award3} alt="Award 3" className="m-2" />
          <img src={award2} alt="Award 2" className="m-2" /> */}
         
          {/*
            EACH <img> = ONE PHOTO. alt = description for screen readers.
            REORDER by moving lines; REMOVE by deleting a line; HIDE by turning the line into a JSX comment (put it between the comment markers).
          */}
          <img src={award5} alt="Award 5" className="m-2 col-span-1" />
          <img src={award6} alt="Award 6" className="m-2 col-span-1" />
          <img src={award7} alt="Award 7" className="m-2 col-span-1" />
          <img src={award8} alt="Award 8" className="m-2 col-span-1" />
          <img src={award9} alt="Award 9" className="m-2 col-span-1" />

          
           
           {/* <img src={award13} alt="Award 13" className="m-2" /> */}
          < img src={bgo1} alt="Award 14" className="m-2 col-span-1" />
           <img src={bg02} alt="Award 15" className="m-2 col-span-1" />
           <img src={bgo3} alt="Award 16" className="m-2 col-span-1" />
           <img src={award11} alt="Award 11" className="m-2 col-span-1" />
           <img src={award12} alt="Award 12" className="m-2 col-span-1" />
           <img src={news} alt="New Award" className="m-2 col-span-1" />
           <img src={award4} alt="Award 4" className="m-2 col-span-1" />
           <img src={awards10} alt="Award 10" className="m-2 col-span-1" />
        </div>
      </div>
</>
  )
}
