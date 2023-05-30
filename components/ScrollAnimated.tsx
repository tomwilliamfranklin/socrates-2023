import React, { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function ScrollAnimated({
  children,
  className,
  style,
  speed = 10,
}: {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
  style?: any;
  speed?: number;
}) {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  const [isVisible, setState] = useState(false);

  useLayoutEffect(() => {
    // we are using an intesectionobserver to check if they're in view onload. If they are, we don't trigger them
    // otherwise they'll immediately fly upwards. (im not sure if this the best way to do this?)
    const observer = new IntersectionObserver(([entry]) => {
      gsap.to(ref.current, {
        scrollTrigger: {
          scrub: true,
          trigger: entry.isIntersecting ? null : ref.current,
        },
        translateY: `-${100 * speed}px`,
        ease: "ease-out",
      });
    });
    observer.observe(ref.current!);

    return () => {
      // cleanup code (optional)
    };
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  return (
    <div style={style} className={className} ref={ref}>
      {children}
    </div>
  );
}
