"use client";
import React, { useRef, useEffect, useState } from "react";

export default function CloudFadeIn({ children }: { children: any }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current!);

    let cleanup = domRef.current!;
    return () => observer.unobserve(cleanup);
  }, [isVisible]);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
