import React from "react";
import "./../../../styles/home.css";
import { Zilla_Slab } from "@next/font/google";
import TypingDisplay from "./components/TypingDisplay";

const zilla = Zilla_Slab({ subsets: ["latin"], weight: "700" });

export default function HomeSection() {
  const WORDS = ["developer", "fronted", "backend"];

  return (
    <section className="relative min-h-screen w-screen bg-[url('../../public/assets/background-portfolio.png')] bg-center bg-no-repeat bg-cover ">
      <svg
        className="absolute bottom-0"
        width={2000}
        height={200}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m0 42 11.5 8C23 58 46 74 69 80s46 2 69 20 46 58 69 71 46-1 69-14.3c23-13.4 46-26 69-39s46-26.4 69-19c23 7.3 46 35.3 69 41.8s46-8.5 69-8.8c23-.4 46 14 69 8.5s46-30.9 69-44.2c23-13.3 46-14.7 69-15.7s46-1.6 69 3.2c23 4.8 46 15.2 69 9.8 23-5.3 46-26.3 68.8-27.6 22.9-1.4 45.5 17 68.4 17.6C1057 84 1080 67 1103 61.7c23-5.4 46 1 69 4.6 23 3.7 46 4.7 69 2.9 23-1.9 46-6.5 69-6.9 23-.3 46 3.7 69 15.9 23 12.1 46 32.5 69 29.8 23-2.7 46-28.3 69-20.8s46 48.1 69 54.8c23 6.7 46-20.7 69-42.2 23-21.5 46-37.1 69-21.1s46 63.6 69 64.8c23 1.2 46-44.2 69-56.5 23-12.3 46 8.3 69 6.8 23-1.5 46-25.1 57.5-37L2000 45v156H0Z"
          fill="#0e0e0e"
        />
      </svg>
      <div className="flex flex-row items-center pl-0 sm:pl-10 md:pl-28 lg:pl-28 xl:pl-72 text-white h-full w-full ">
        <div className="relative">
          <h3
            className={`${zilla.className} text-center sm:text-start text-[1.5rem] sm:text-[1.3rem] lg:text-[2rem] xl:text-[1.5rem]`}
          >
            Hello, It&apos;s me
          </h3>
          <div className="flex flex-col">
            <h1
              className={`${zilla.className} pt-2 sm:pt-0 text-center sm:text-start text-[3rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6.5rem] leading-[1rem] md:leading-10 lg:leading-[5rem]`}
            >
              Niklas-dev
            </h1>

            <TypingDisplay />
          </div>
          <p
            className={`${zilla.className} text-center sm:text-start text-sectxtcolor text-[1rem] sm:text-[1.2rem] md:text-[1.4rem]  lg:text-[1.5rem] pt-2 md:pt-6 sm:w-3/4 px-7 sm:px-0 sm:pr-10`}
          >
            I am a fullstack focused webdeveloper. I design, plan out and
            develop web apps from the ground up to solve the desired problem.
          </p>
        </div>
      </div>
    </section>
  );
}
