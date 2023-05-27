import React from "react";

import "./../../../styles/about.css";

const zilla_bold = Zilla_Slab({ subsets: ["latin"], weight: "700" });

const zilla_semi = Zilla_Slab({ subsets: ["latin"], weight: "600" });

import { Zilla_Slab } from "next/font/google";
import SmallCloud from "@/components/SmallCloud";
import CloudFadeIn from "@/components/CloudFadeIn";
import AboutPartText from "@/components/AboutPartText";
import Clock from "@/components/Clock";
const zilla = Zilla_Slab({ subsets: ["latin"], weight: "700" });
export default function AboutSection() {
  return (
    <section className="relative xl:min-h-screen min-h-screen w-screen bg-[url('../../public/assets/new_bg_design_about.png')] bg-center bg-repeat-y bg-cover ">
      <div className="w-screen overflow-x-hidden absolute ">
        <svg
          className=""
          width="3000"
          viewBox="0 0 2000 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0e0e0e"
            d="m0 55 21.5-.8C43 53.3 86 51.7 129 48.7s86-7.4 129-9c43-1.7 86-.7 129 2.1 43 2.9 86 7.5 129 8.5s86-1.6 129-2.5c43-.8 86 .2 129-.3s86-2.5 129-1.2c43 1.4 86 6 129 7.2 43 1.2 86-1.2 129-1 43 .2 86 2.8 129 .7 43-2.2 86-9.2 129-9.2s86 7 129 6.3c43-.6 86-9 129-9.6 43-.7 86 6.3 129 8.5 43 2.1 86-.5 129.2.3 43.1.8 86.5 5.2 129.6 5.7 43.2.5 86.2-2.9 129.2-6.5 43-3.7 86-7.7 129-9.5 43-1.9 86-1.5 129 1.5s86 8.6 129 5.8 86-14.2 129-19c43-4.8 86-3.2 129-.8 43 2.3 86 5.3 129 9.1 43 3.9 86 8.5 129 8.9 43 .3 86-3.7 129-8.7 43-5 86-11 129-10s86 9 129 10.5 86-3.5 129-5.7c43-2.1 86-1.5 129 3.7s86 14.8 129 16.8 86-3.6 107.5-6.5L4000 42V0H0Z"
          />
        </svg>
      </div>
      <div className="h-full w-full bg-black bg-opacity-70 text-white flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-6">
          <h3 className={`${zilla.className} text-3xl`}>
            But now the time has come...
          </h3>
          <Clock />
          <h3 className={`${zilla.className} text-3xl`}>
            to get to know me and my skills.
          </h3>
        </div>
      </div>
    </section>
  );
}

/* 
            <AboutPartText>
              I am Niklas, right now 17 years old, a fullstack developer with a
              love for typescript and python. My first contact with software
              development was when i was around 10 years old. Back then I
              created plugins with java but I left that behind quickly.
            </AboutPartText>

            <AboutPartText>
              After I distanced myself from programming for a while, I picked it
              back up at 13. This time it got me! The first language I learned
              back then was python. I developed small programs like calculators,
              basic games and managment systems. After I got confident with my
              tools, I heard about machine learning and got right into it and
              yes it was hard.
            </AboutPartText>

            <AboutPartText>
              My first big project I picked up was self driving car with a
              raspberry pi, self build car, opencv, self build car, and a self
              trained neural network. I created that project for a school
              presentation about autonomous driving.
            </AboutPartText>

            <AboutPartText>
              This all brought me to todays point. Now I am creating fullstack
              application and keep learning more! Python sticked to me as a
              backend language, but I added new tools to my backpack like
              typescipt, react, nextjs, django, tailwind, flutter, dart and
              more.
            </AboutPartText>
*/
