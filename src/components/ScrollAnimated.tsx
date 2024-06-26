import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
  let mm = gsap.matchMedia();
  const ref = useRef(null);
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  useEffect(() => {
    mm.add("(min-width: 800px)", () => {
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

      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
      };
    });
  }, []);

  return (
    <div style={style} className={className} ref={ref}>
      {children}
    </div>
  );
}
