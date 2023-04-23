import React from "react";

import "./../../../styles/about.css";

const zilla_bold = Zilla_Slab({ subsets: ["latin"], weight: "700" });

const zilla_semi = Zilla_Slab({ subsets: ["latin"], weight: "600" });

import { Zilla_Slab } from "next/font/google";
import SmallCloud from "@/components/SmallCloud";
import CloudFadeIn from "@/components/CloudFadeIn";

export default function AboutSection() {
  return (
    <section className="relative xl:min-h-screen min-h-fit w-screen bg-[url('../../public/assets/new_bg_design_about.png')] bg-center bg-repeat-y bg-cover ">
      <div className="w-screen overflow-x-hidden h-12 overflow-y-clip absolute top ">
        <svg
          className=""
          width="3000"
          height="300"
          viewBox="0 0 2000 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m0 18 12.8-1c12.9-1 38.5-3 64.2-1 25.7 2 51.3 8 77 7.3 25.7-.6 51.3-8 77-8.6 25.7-.7 51.3 5.3 77 5.8 25.7.5 51.3-4.5 77-6 25.7-1.5 51.3.5 76.8 1.3 25.5.9 50.9.5 76.4-.5 25.5-1 51.1-2.6 76.8-3 25.7-.3 51.3.7 77 .9 25.7.1 51.3-.5 77 2.6C794.7 19 820.3 26 846 29c25.7 3 51.3 2 77 1.2 25.7-.9 51.3-1.5 77-4.2 25.7-2.7 51.3-7.3 77-10.7 25.7-3.3 51.3-5.3 77-6.5 25.7-1.1 51.3-1.5 77 .7 25.7 2.2 51.3 6.8 77 11.8 25.7 5 51.3 10.4 77 7.9 25.7-2.5 51.3-12.9 76.8-13.5 25.5-.7 50.9 8.3 76.4 8.6 25.5.4 51.1-8 76.8-12.3 25.7-4.3 51.3-4.7 77 0 25.7 4.7 51.3 14.3 77 17.3 25.7 3 51.3-.6 77-5.3 25.7-4.7 51.3-10.3 77-9.5 25.7.8 51.3 8.2 64.2 11.8L2000 30V0H0Z"
            fill="#0e0e0e"
          />
        </svg>
      </div>
      <div className="text-white z-10 flex flex-col lg:flex-row h-fit   justify-between pt-8 xl:pt-28 pb-32 ">
        <div className="lg:w-1/2 pt-10 md:pt-0 lg:p-0 px-6 w-full flex flex-row justify-center items-center">
          <div className="bg-primary rounded-3xl border-2 border-black h-fit w-[40rem] xl:w-[45rem] p-6 flex flex-col gap-3 md:gap-5">
            <h6
              className={`${zilla_bold.className} text-2xl md:text-3xl xl:text-4xl `}
            >
              Who Am I...
            </h6>
            <p
              className={`${zilla_semi.className} text-lg md:text-xl xl:text-2xl text-sectxtcolor`}
            >
              I am Niklas, right now 17 years old, a fullstack developer with a
              love for typescript and python. My first contact with software
              development was when i was around 10 years old. Back then I
              created plugins with java but I left that behind quickly.
            </p>

            <p
              className={`${zilla_semi.className} text-lg md:text-xl xl:text-2xl text-sectxtcolor`}
            >
              After I distanced myself from programming for a while, I picked it
              back up at 13. This time it got me! The first language I learned
              back then was python. I developed small programs like calculators,
              basic games and managment systems. After I got confident with my
              tools, I heard about machine learning and got right into it and
              yes it was hard.
            </p>
            <p
              className={`${zilla_semi.className} text-lg md:text-xl xl:text-2xl text-sectxtcolor`}
            >
              My first big project I picked up was self driving car with a
              raspberry pi, self build car, opencv, self build car, and a self
              trained neural network. I created that project for a school
              presentation about autonomous driving.
            </p>
            <p
              className={`${zilla_semi.className} text-lg md:text-xl xl:text-2xl text-sectxtcolor`}
            >
              This all brought me to todays point. Now I am creating fullstack
              application and keep learning more! Python sticked to me as a
              backend language, but I added new tools to my backpack like
              typescipt, react, nextjs, django, tailwind, flutter, dart and
              more.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full md:pr-24 pr-12 py-8 flex flex-col gap-28 md:gap-16 md:bg-none bg-[url('../../public/assets/new_bg_design_about.png')] bg-center bg-repeat-y bg-cover">
          <div className="flex flex-row justify-start pl-10">
            <CloudFadeIn>
              <div className="relative floating cloud-fade-in-animation">
                <SmallCloud className=" scale-[1.2] md:scale-[1.4]" />
                <div className="absolute top-0 h-full w-full  flex flex-row justify-center items-center">
                  <h3 className={`${zilla_bold.className} z-10 text-3xl `}>
                    Teamplayer
                  </h3>
                </div>
              </div>
            </CloudFadeIn>
          </div>

          <div className="flex flex-row justify-center  ">
            <CloudFadeIn>
              <div className="relative floating-slower transition-all cloud-fade-in-animation">
                <SmallCloud className="scale-[1.55] md:scale-[1.9]" />
                <div className="absolute top-0 h-full w-full flex flex-row justify-center items-center">
                  <h3 className={`${zilla_bold.className} z-10 text-3xl `}>
                    Active Learner
                  </h3>
                </div>
              </div>
            </CloudFadeIn>
          </div>
          <div className="flex md:flex-row flex-col-reverse justify-center md:justify-between items-center gap-12 md:gap-0 pt-4">
            <CloudFadeIn>
              <div className="relative floating-slowest cloud-fade-in-animation">
                <SmallCloud className="scale-[1] md:scale-[1.2]" />
                <div className="absolute top-0 h-full w-full  flex flex-row justify-center items-center">
                  <h3 className={`${zilla_bold.className} z-10 text-3xl `}>
                    ...
                  </h3>
                </div>
              </div>
            </CloudFadeIn>
            <CloudFadeIn>
              <div className="relative floating-slow cloud-fade-in-animation md:mr-28">
                <SmallCloud className="scale-[1.4] md:scale-[1.6]" />
                <div className="absolute top-0 h-full w-full  flex flex-row justify-center items-center">
                  <h3 className={`${zilla_bold.className} z-10 text-3xl `}>
                    Creative
                  </h3>
                </div>
              </div>
            </CloudFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
