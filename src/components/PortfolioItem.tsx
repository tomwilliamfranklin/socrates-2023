import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classNames from "classnames";
import { Genre, PortfolioData } from "./Portfolio";

export type Props = PortfolioData & {};

export default function PortfolioItem(props: Props) {
  const onSelectItem = () => {
    window.location.href = props.link;
  };
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  useEffect(() => {
    mm.add("(min-width: 800px)", () => {
      gsap.fromTo(
        ref.current,
        {
          y: () => `0px`,
        },
        {
          y: () => `-500px`,
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

  //md:[&>*]:odd:flex-row-reverse
  return (
    <div
      ref={ref}
      className="relative flex border-none md:border-solid md:p-2 
    flex-col w-screen text-primary max-w-[1200px] lg:h-[600px] lg:[&>.portfolio-item>*]:odd:flex-row-reverse"
    >
      <div className=" relative left-2 pb-2 flex flex-wrap gap-5">
        {props.genre === Genre.Gaming && (
          <div className=" bg-secondary text-whiteColor p-5 pt-2 pb-2 rounded-md border-l-8 border-l-accent4">
            Gaming
          </div>
        )}
        {props.genre === Genre.Website && (
          <div className=" bg-secondary text-whiteColor p-5 pt-2 pb-2 rounded-md border-l-8 border-l-accent1">
            Website
          </div>
        )}
        {props.didProgramming && (
          <div className=" bg-secondary text-whiteColor p-5 pt-2 pb-2 rounded-md border-l-8 border-l-accent3">
            Programming
          </div>
        )}
        {props.didDesign && (
          <div className=" bg-secondary text-whiteColor p-5 pt-2 pb-2 rounded-md border-l-8 border-l-accent2">
            Design
          </div>
        )}
      </div>
      <div className=" portfolio-item p-2 rounded-lg flex">
        <div
          id="content"
          className="xl:p-10 h-full bg-whiteColorTran w-full flex rounded-lg overflow-hidden custom-shadow flex-col md:flex-row"
        >
          <div className="flex-[1.5] bg-transparent p-5 md:p-10">
            <div className="relative w-full h-full flex justify-center items-cente overflow-hidden rounded-lg custom-shadow">
              <div className="relative w-full min-h-[300px] hover:scale-[1.05] transition-transform duration-[0.8s] ">
                <img
                  alt="portfolio image"
                  onClick={onSelectItem}
                  className={classNames(
                    `
                absolute 
                top-0  
                transition-all ease-in duration-[5s] 
                cursor-pointer min-h-full 
                object-cover`,
                    {
                      "hover:translate-y-[calc(-100%+440px)]":
                        !props.disableImageScroll,
                    }
                  )}
                  src={"/" + props.image}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className="flex-[1.5] flex flex-col align-center justify-start p-5 pt-0 md:p-10">
            <div className="h-full flex flex-col flex-1 items-start">
              <h3 className="text-left w-full font-bold">{props.name}</h3>
              <h4 className="text-left w-full font-regular opacity-30">
                {props.workplace}
              </h4>
              <p
                className="text-left mt-5 text-greyColor"
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></p>
              <div className="flex justify-start mt-5 flex-wrap gap-5 mb-auto">
                {props.tech.map((t, index) => {
                  return (
                    <div
                      key={index}
                      className="text-md  p-2 rounded-md h-fit whitespace-nowrap bg-accent3 text-whiteColor font-bold"
                    >
                      {t}
                    </div>
                  );
                })}
              </div>
              <button
                className="button flex self-start w-fit mt-5"
                onClick={onSelectItem}
              >
                visit the website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
