"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Zilla_Slab } from "@next/font/google";

const zilla = Zilla_Slab({ subsets: ["latin"], weight: "700" });
export default function TypingDisplay() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        "I am a fronted developer.",
        "I am a backend developer.",
        "I am a fullstack developer.",
        "I am a webdeveloper.",
      ],

      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h1 className="flex items-center justify-center box-border sm:block sm:items-start sm:justify-start">
      <span
        ref={el}
        style={{}}
        className={`${zilla.className} font-dev  typed-cursor text-[2rem] sm:text-[3.4rem] md:text-[3.5rem] lg:text-[4.8rem] xl:text-[7rem]  second-text`}
      ></span>
    </h1>
  );
}
