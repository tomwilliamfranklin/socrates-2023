import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import classNames from "classnames";

export default function ScrollInAnimation({
  children,
  className,
  style,
  triggerID, // like #contact etc. html ID
  goal = 10,
  start = 0,
  movementSpeed = 1, // 0.1 - 1.
}: {
  children: React.ReactElement[] | React.ReactElement;
  triggerID: string;
  className?: string;
  style?: any;
  start?: number;
  goal?: number;
  movementSpeed?: number;
}) {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  let mm = gsap.matchMedia();

  useEffect(() => {
    mm.add("(min-width: 768px)", () => {
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
            trigger: `#${triggerID}`,
            start: "top center",
            end: "center center",
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        }
      );
    });
  }, []);
  return (
    <div
      style={style}
      className={classNames(className, "opacity-1 md:opacity-0")}
      ref={ref}
    >
      {children}
    </div>
  );
}
