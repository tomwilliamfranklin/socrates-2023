"use client";

import AnimatedTitle from "@/components/animatedTitle";
import Portfolio from "@/components/Portfolio";
import PortfolioItem from "@/components/PortfolioItem";
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
      // Squares
      case 8:
        return (
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m21,21v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125z" />
          </svg>
        );
      default:
        return (
          <svg
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 5.3378906 2 L 0.671875 10 L 5.3378906 18 L 14.662109 18 L 19.328125 10 L 14.662109 2 L 5.3378906 2 z M 5.9121094 3 L 14.087891 3 L 18.171875 10 L 14.087891 17 L 5.9121094 17 L 1.828125 10 L 5.9121094 3 z " />
          </svg>
        );
    }
  };

  useEffect(() => {
    const preShapes = [];

    for (let i = 0; i < 40; i++) {
      const randomType = Math.floor(Math.random() * 9);

      preShapes.push(
        <ScrollAnimated
          offsetAmount={randomWithRange(0, 20)}
          movementSpeed={randomWithRange(0, 10) / 10}
          className={`squares shape-animated stroke-accent${randomWithRange(
            2,
            3
          )} fill-accent${randomWithRange(1, 3)} absolute top-[19vh]`}
          style={{
            // TODO, this is a hack of 40% onwards. We should make a different container for the random shapes. (different component?)
            top: randomWithRange(0, 100) + "%",
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
        <section className="w-full h-screen flex pb-[200px] ml-5">
          <div className="max-w-7xl w-full m-auto">
            <h2 className="mb-10">
              <AnimatedTitle
                title={<div className="md:font-extralight">Tom Franklin</div>}
              />
            </h2>
            <h1 className=" ">
              <AnimatedTitle
                title={
                  <div className="font-extralight">
                    <span className="text-accent3">Creative</span>
                    <span className="text-accent2 font-normal">
                      {" "}
                      front-end{" "}
                    </span>{" "}
                    <br className="md:hidden" />
                    <span className="text-accent2 font-normal">developer </span>
                    <br />
                    <span className="text-accent3">
                      <span className="text-accent3">for the</span>
                      <span className="font-normal"> UI/UX</span>{" "}
                      <br className="md:hidden" />
                      <span className="text-accent3"> industry.</span>
                    </span>
                  </div>
                }
              />
            </h1>
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
        <section className="section-portfolio relative p-20 w-full flex justify-center items-center bg-accent">
          <Portfolio />
        </section>
        <section className="relative w-full flex justify-center items-center flex-col p-5 pt-40 mb-[50px]">
          <div className="flex-1 max-w-[1000px] h-full flex flex-col">
            <h2>
              <AnimatedTitle
                title={
                  <div className="font-extralight text-center">
                    <span className="text-accent3 whitespace-nowrap">
                      Have a{" "}
                    </span>{" "}
                    <span className="text-accent2 font-normal whitespace-nowrap">
                      {" "}
                      Role
                    </span>
                    <span className="text-accent3"> you </span>
                    <br className="md:hidden" />
                    <span className="text-accent3"> would</span>{" "}
                    <br className="hidden md:block" />
                    <span className="text-accent3"> like to discuss?</span>{" "}
                    <br className="md:hidden" />
                    <span className="font-normal"> Reach out, </span>
                    <span className="text-accent3"> let's talk! </span>
                  </div>
                }
              />
            </h2>
          </div>
          <div className="max-w-[800px] w-full flex-[3] mt-[50px]">
            <form
              id="contactForm"
              className="section-contact-form"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              // onSubmit={this.onContactSubmit}
            >
              <div className="form-row">
                <div className="form-column">
                  <label>
                    name<span>*</span>
                  </label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="form-column">
                  <label>
                    email<span>*</span>
                  </label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="form-column hidden">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <label>
                    company<span>*</span>
                  </label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="form-column">
                  <label>
                    country<span>*</span>
                  </label>
                  <input type="text" name="name" id="name" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <label>
                    current website <span>(optional)</span>
                  </label>
                  <input type="text" name="name" id="name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <label>
                    message<span>*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    id="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-row justify-end">
                <button
                  className="send-button flex justify-center w-fit mt-5"
                  //onClick={onSelectItem}
                  type="submit"
                >
                  send
                </button>
              </div>
            </form>
          </div>
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
        <div className="absolute w-full h-full">
          {shapes.map((s) => {
            return s;
          })}
        </div>
      </div>
    </div>
  );
}
