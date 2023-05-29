import React, { useLayoutEffect, useRef } from "react";

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

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        scrub: true,
      },
      top: `${speed * -20}px`,
      ease: "ease-out",
    });

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
