"use client";

import AnimatedTitle from "@/components/animatedTitle";
import ScrollAnimated from "@/components/ScrollAnimated";
import { useEffect, useState } from "react";

export default function Home() {
  const [shapes, setShapes] = useState<React.JSX.Element[]>([]);

  const randomWithRange = (min: number, max: number) => {
    const range = max - min + 1;
    return Math.floor(Math.random() * range + min);
  };

  const getShapeType = (type: number) => {
    switch (type) {
      // Square
      case 3:
      case 4:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" strokeWidth="1" d="M2 2h20v20H2z" />
          </svg>
        );
      // Circle
      case 5:
      case 6:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" strokeWidth="1" />
          </svg>
        );
      // Squares
      case 7:
        return (
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m21,21v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125z" />
          </svg>
        );
      case 8:
        return (
          <svg viewBox="0 -2 490 500" strokeWidth={2} fill="none">
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
        );
      // Triangle
      case 1:
      case 2:
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" strokeWidth="1" d="M12 2L2 22h20L12 2z" />
          </svg>
        );
    }
  };

  useEffect(() => {
    const preShapes = [];

    for (let i = 0; i < 20; i++) {
      const randomType = Math.floor(Math.random() * 9);

      preShapes.push(
        <ScrollAnimated
          offsetAmount={randomWithRange(0, 20)}
          movementSpeed={randomWithRange(0, 10) / 10}
          className={`squares shape-animated stroke-accent${randomWithRange(
            2,
            3
          )} fill-accent${randomWithRange(2, 3)} absolute top-[19vh]`}
          style={{
            // TODO, this is a hack of 40% onwards. We should make a different container for the random shapes. (different component?)
            top: randomWithRange(40, 100) + "%",
            left: Math.floor(Math.random() * 100) + "vw",
            opacity: randomWithRange(1, 5) / 10,
            width: `${randomWithRange(20, 70)}px`,
          }}
        >
          <div style={{ transform: `rotate(${randomWithRange(-30, 30)}deg)` }}>
            {getShapeType(randomType)}
          </div>
        </ScrollAnimated>
      );
    }

    setShapes(preShapes);
  }, []);

  return (
    <div className="site-core text-whiteColor bg-secondary">
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
                    <span className=" text-accent2  font-normal">Creative</span>
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
        <svg preserveAspectRatio="none">
          <clipPath id="section-top" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00145 0.00655)"
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            ></path>
          </clipPath>

          <clipPath id="section-bottom" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.0009 0.00555)"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </clipPath>
        </svg>
        <section className="relative section-portfolio z-10 w-full h-screen flex justify-center items-center bg-accent">
          <div className="">portfolio</div>
        </section>
        <section className="relative z-10 w-full h-screen flex justify-center items-center">
          footer
        </section>
      </div>
      <div className="w-full h-full top-0 absolute left-0 pointer-events-none">
        <div
          className="site-grid fixed"
          //ref={dotGridRef}
          // style={{
          //   transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          // }}
        />
        <div className="absolute w-full h-full z-20">
          {shapes.map((s) => {
            return s;
          })}
          ;
          <ScrollAnimated className="squares shape-animated fill-accent3 opacity-[0.1] absolute top-[19vh] left-[31vw] w-[70px]">
            <div>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m21,21v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125z" />
              </svg>
            </div>
          </ScrollAnimated>
          <ScrollAnimated className="squares shape-animated fill-accent2 opacity-[0.1] triangle absolute top-[81vh] left-[62vw] w-[80px]">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m21,21v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125z" />
            </svg>
          </ScrollAnimated>
          <ScrollAnimated
            offsetAmount={30}
            className="triangle shape-animated stroke-accent1 fill-accent1 opacity-[0.6] absolute top-[17vh] left-[32vw] w-[70px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" strokeWidth="1" d="M12 2L2 22h20L12 2z" />
            </svg>
          </ScrollAnimated>
          <ScrollAnimated className="triangle shape-animated stroke-accent3 opacity-[0.6] absolute top-[70vh] left-[90vw] w-[70px] rotate-[30deg]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" strokeWidth="1" d="M12 2L2 22h20L12 2z" />
            </svg>
          </ScrollAnimated>
          <ScrollAnimated className="square shape-animated stroke-accent3 opacity-[0.2] absolute top-[32vh] left-[51vw] w-[70px]  rotate-[-13deg]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" strokeWidth="1" d="M2 2h20v20H2z" />
            </svg>
          </ScrollAnimated>
          <ScrollAnimated className="square shape-animated stroke-accent2 opacity-[0.4] absolute top-[12vh] left-[81vw] w-[50px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" strokeWidth="1" d="M2 2h20v20H2z" />
            </svg>
          </ScrollAnimated>
          <ScrollAnimated
            offsetAmount={20}
            className="square shape-animated stroke-accent1 opacity-[0.6] absolute top-[80vh] left-[61vw] w-[40px]  rotate-[-53deg]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" strokeWidth="1" d="M2 2h20v20H2z" />
            </svg>
          </ScrollAnimated>
          <ScrollAnimated
            offsetAmount={50}
            className="circle shape-animated stroke-accent2 opacity-[0.6] absolute top-[71vh] left-[12vw] w-[70px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="none" strokeWidth="1" />
            </svg>
          </ScrollAnimated>
          <ScrollAnimated
            offsetAmount={10}
            className="squiggle shape-animated stroke-accent opacity-[0.2] absolute top-[12vh] left-[81.5vw] w-[200px] rotate-[-60deg]"
          >
            <svg viewBox="0 -2 490 500" strokeWidth={2} fill="none">
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
          </ScrollAnimated>
          <ScrollAnimated className="border-curved-dashed shape-animated stroke-accent translate-x-[-400px] opacity-[0.2] absolute top-[65vh] left-[12vw] h-[20px] w-[700px] rotate-[-30deg]">
            <div />
          </ScrollAnimated>
        </div>
      </div>
    </div>
  );
}
