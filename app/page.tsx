"use client";

import AnimatedTitle from "@/components/animatedTitle";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const dotGridRef = useRef<HTMLDivElement>(null);
  // const animationRef = useRef<number | null>(null);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   console.log("E");
  //   setMousePosition({ x: e.clientX / 10, y: e.clientY / 10 });
  // };

  // const animateMouseMove = () => {
  //   animationRef.current = requestAnimationFrame(animateMouseMove);
  // };

  // useEffect(() => {
  //   animationRef.current = requestAnimationFrame(animateMouseMove);

  //   return () => {
  //     if (animationRef.current) {
  //       cancelAnimationFrame(animationRef.current);
  //     }
  //   };
  // }, []);

  return (
    <ParallaxProvider>
      <div
        className="site-core text-whiteColor bg-secondary"
        //onMouseMove={handleMouseMove}
      >
        <div className="site-homepage relative">
          <section className="w-full h-screen flex pb-[200px] ">
            <div className=" max-w-7xl w-full m-auto">
              <div className="text-5xl mb-10">
                <AnimatedTitle
                  title={<div className="font-extralight">Tom Franklin</div>}
                />
              </div>
              <div className=" text-7xl">
                <AnimatedTitle
                  title={
                    <div className=" font-extralight">
                      <span className=" text-accent2 font-normal">
                        Creative
                      </span>
                      <span className=" text-accent3">
                        {" "}
                        full-stack development{" "}
                      </span>
                      <br />
                      <span className=" text-accent3">
                        <span className=" text-accent3">for the</span>
                        <span className="font-normal"> games</span>
                        <span className=" text-accent3"> industry.</span>
                      </span>
                    </div>
                  }
                />
              </div>
            </div>
          </section>
          <section className="relative z-10 w-full h-screen flex justify-center items-center bg-accent">
            portfolio
          </section>
          <section className="relative z-10 w-full h-screen flex justify-center items-center">
            footer
          </section>
        </div>
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          <div
            className="site-grid "
            //ref={dotGridRef}
            // style={{
            //   transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            // }}
          />
          <div className="w-full h-full">
            <Parallax
              className=" squares fill-accent3 opacity-[0.1] absolute w-[70px] transition-all top-[26vh] left-[31vw]"
              speed={15}
            >
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m21,21v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125z" />
              </svg>
            </Parallax>
            <Parallax
              className="squares fill-accent2 opacity-[0.1] triangle absolute top-[74vh] left-[61.5vw] w-[80px]"
              speed={15}
            >
              {" "}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m21,21v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125z" />
              </svg>
            </Parallax>

            <svg
              className="triangle shape-animated stroke-accent opacity-[0.6] absolute top-[17vh] left-[32vw] w-[70px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" strokeWidth="1" d="M12 2L2 22h20L12 2z" />
            </svg>

            <svg
              className="triangle shape-animated stroke-accent3 opacity-[0.6] absolute top-[70vh] left-[90vw] w-[70px] rotate-[30deg]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" strokeWidth="1" d="M12 2L2 22h20L12 2z" />
            </svg>
            <svg
              className="square shape-animated stroke-accent3 opacity-[0.2] absolute top-[32vh] left-[51vw] w-[70px]  rotate-[-13deg]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" strokeWidth="1" d="M2 2h20v20H2z" />
            </svg>
            <svg
              className="square shape-animated stroke-accent2 opacity-[0.4] absolute top-[12vh] left-[81vw] w-[50px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" strokeWidth="1" d="M2 2h20v20H2z" />
            </svg>
            <svg
              className="square shape-animated stroke-accent opacity-[0.6] absolute top-[80vh] left-[61vw] w-[40px]  rotate-[-53deg]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" strokeWidth="1" d="M2 2h20v20H2z" />
            </svg>
            <svg
              className="circle shape-animated stroke-accent2 opacity-[0.6] absolute top-[71vh] left-[12vw] w-[70px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="none" strokeWidth="1" />
            </svg>
            <svg
              className="squiggle stroke-accent opacity-[0.2] absolute top-[12vh] left-[81.5vw] w-[200px] rotate-[-60deg]"
              viewBox="0 -2 490 500"
              strokeWidth={2}
              fill="none"
            >
              <g>
                <g>
                  <path
                    d="M234.971,398.156l45.9-35.6c15.2-10.7,35.8-51.2,1-78.6l-48-37.7c-4.2-2.5-4.9-8.6,1-12.6l44.9-32.5
			c22.5-16.5,32.5-53.7,0-79.7l-44.8-33.6c-5-3.7-4.6-8.9,1-12.6l52.2-38.8c9.4-6.3,10.4-18.9,4.2-28.3s-18.8-10.5-28.1-4.2
			l-52.2,38.8c-30.5,24.7-29.8,56.3,0,79.7l44.9,33.5c5.8,3.8,4.1,10.2,0,12.6l-45.9,33.5c-28.7,21.6-29.8,58-1,78.6l48,37.7
			c4.9,3.1,3.7,9.5-1,12.6l-47.1,34.7c-29.8,23.2-25.3,58.9-1,78.6l54.2,41.9c4.2,3.1,18.8,8.7,28.2-5.2c7.3-8.4,6.3-21-3.1-28.3
			l-54.3-41.9C229.571,407.356,229.771,401.856,234.971,398.156z"
                  />
                </g>
              </g>
            </svg>
            <div className="border-curved-dashed squiggle stroke-accent translate-x-[-400px] opacity-[0.2] absolute top-[65vh] left-[12vw] h-[20px] w-[700px] rotate-[-30deg]" />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
