import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import classNames from "classnames";

export default function ScrollAnimated({
  children,
  className,
  style,
  movementSpeed = 1, // 0.1 - 1.
}: {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
  style?: any;
  offsetAmount?: number;
  movementSpeed?: number;
}) {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  
  useEffect(() => {
    const portfolio = document.getElementById("portfolio");

    gsap.fromTo(
      ref.current,
      {
        y: () => `0vh`,
      },
      {
        y: () => `-${150 * (movementSpeed / 10)}vh`,
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
      className={classNames(className, " hover:translate-y-50 z-20")}
      ref={ref}
    >
      {children}
    </div>
  );
}

