import React, { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import classNames from "classnames";

export default function ScrollAnimated({
  children,
  className,
  style,
  offsetAmount = 10,
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

  useLayoutEffect(() => {
    // we are using an intesectionobserver to check if they're in view onload. If they are, we don't trigger them
    // otherwise they'll immediately fly upwards. (im not sure if this the best way to do this?)
    const observer = new IntersectionObserver(([entry]) => {
      gsap.to(ref.current, {
        scrollTrigger: {
          scrub: true,
          trigger: entry.isIntersecting ? null : ref.current,
        },
        translateY: `-${150 + offsetAmount * movementSpeed}px`,
        ease: "ease-out",
      });
    });
    observer.observe(ref.current!);

    return () => {
      // cleanup code (optional)
    };
  }, [movementSpeed, offsetAmount]);

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
