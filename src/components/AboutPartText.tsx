import React from "react";

import { Zilla_Slab } from "next/font/google";

const zilla_bold = Zilla_Slab({ subsets: ["latin"], weight: "700" });

const zilla_semi = Zilla_Slab({ subsets: ["latin"], weight: "600" });

export default function AboutPartText({ children }: { children: any }) {
  return (
    <p
      className={`${zilla_semi.className} text-lg md:text-xl xl:text-2xl text-sectxtcolor`}
    >
      {children}
    </p>
  );
}
