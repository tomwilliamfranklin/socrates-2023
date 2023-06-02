import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import classNames from "classnames";

export default function ScrollInAnimation({
  children,
  className,
  style,
  goal = 10,
  start = 0,
  movementSpeed = 1, // 0.1 - 1.
}: {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
  style?: any;
  start?: number;
  goal?: number;
  movementSpeed?: number;

}) {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

  useEffect(() => {
    const portfolio = document.getElementById("portfolio");

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: () => `${start}vh`,
      },
      {
        opacity: 1,
        y: () => `${goal * (movementSpeed / 10)}vh`,
        ease: "none",
        scrollTrigger: {
          trigger: "#contact",
          start: "top center",
          end: "center center",
          scrub: true,
          invalidateOnRefresh: true, // to make it responsive
        },
      }
    );
  }, []);
  return (
    <div
      style={style}
      className={classNames(className, " hover:translate-y-50 z-20")}
      ref={ref}
    >
      {children}
    </div>
  );
}

