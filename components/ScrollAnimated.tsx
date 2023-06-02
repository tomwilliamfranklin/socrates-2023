import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import classNames from "classnames";

export default function ScrollAnimated({
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
  
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        y: () => `${start}vh`,
      },
      {
        y: () => `${goal * (movementSpeed / 10)}vh`,
        ease: "none",
        scrollTrigger: {
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true, // to make it responsive
        },
      }
    );
  }, []);

  return (
    <div
      style={style}
      className={className}
      ref={ref}
    >
      {children}
    </div>
  );
}

