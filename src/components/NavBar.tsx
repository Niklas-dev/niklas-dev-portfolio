"use client";
import React, { useRef, useEffect, useState } from "react";
import "@/styles/navbar.css";
import { Zilla_Slab } from "next/font/google";

const zilla = Zilla_Slab({ weight: "700", subsets: ["latin"] });

export default function NavBar() {
  const navNarRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);

  const onScrollStop = (callback: any) => {
    let isScrolling: any;
    window.addEventListener(
      "scroll",
      (e) => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          callback();
        }, 150);
      },
      false
    );
  };
  const onScroll = (callback: any) => {
    let isScrolling: any;
    window.addEventListener(
      "scroll",
      (e) => {
        callback();
      },
      false
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 6000);
    navNarRef.current?.classList.add("shownavbar");
    onScroll(() => {
      console.log("The user has started scrolling");
      navNarRef.current?.classList.remove("shownavbar");
      navNarRef.current?.classList.add("hidenavbar");
    });
    onScrollStop(() => {
      console.log("The user has stopped scrolling");
      navNarRef.current?.classList.remove("hidenavbar");
      navNarRef.current?.classList.add("shownavbar");
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute w-screen h-screen  flex justify-center items-end ">
      <nav
        ref={navNarRef}
        className={`${
          show ? "shownavbar" : "hidden"
        } bg-primary  z-10 fixed rounded-md shadow-xl border-2 border-black`}
      >
        <ul className="flex  flex-row gap-4 md:gap-8 text-base md:text-xl py-4 px-4 md:px-6 text-txtcolor">
          <button
            className={`${zilla.className} scale-100 hover:scale-95 hover:cursor-pointer  transition-transform hover:duration-200`}
          >
            Home
          </button>
          <button
            className={`${zilla.className} scale-100 hover:scale-95 hover:cursor-pointer  transition-transform hover:duration-200`}
          >
            About
          </button>
          <button
            className={`${zilla.className} scale-100 hover:scale-95 hover:cursor-pointer transition-transform hover:duration-200`}
          >
            Skills
          </button>
          <button
            className={`${zilla.className} scale-100 hover:scale-95 hover:cursor-pointer transition-transform hover:duration-200`}
          >
            Projects
          </button>
          <button
            className={`${zilla.className} scale-100 hover:scale-95 hover:cursor-pointer transition-transform hover:duration-200`}
          >
            Contact
          </button>
        </ul>
      </nav>
    </div>
  );
}

/*
  useEffect(() => {
    let lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      "scroll",
      () => {
        // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          navNarRef.current?.classList.add("hidden");
        } else if (st < lastScrollTop) {
          navNarRef.current?.classList.remove("hidden");
          console.log("test");
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );

    return () => {};
  }, []);
*/
