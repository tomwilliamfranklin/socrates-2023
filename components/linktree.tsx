import React from "react";
import ScrollAnimated from "./ScrollAnimated";
import ScrollInAnimation from "./ScrollInAnimation";

export type LinkTree = {
  name: string;
  color: string;
  url: string;
};

export const linkTrees: LinkTree[] = [
  {
    name: "Linkedin",
    color: "#0077B5",
    url: "https://www.linkedin.com/in/tomwilliamfranklin/",
  },
];

export default function LinkTree() {
  return (
    <div
      id="linkedtree"
      className="w-full flex flex-col justify-center items-center gap-10 "
    >
      <div className=" w-full h-full absolute repeating-svg"></div>

      <ScrollAnimated movementSpeed={15} start={0} goal={-50}>
        <div
          className="portfolio-item relative mt-[-300px] p-2 flex border-none md:border-solid md:p-2 rounded-lg 
    flex-col w-screen text-primary max-w-[1200px] lg:[&>*]:odd:flex-row-reverse"
        >
          <div className="p-10 xl:p-20 h-full bg-whiteColorTran w-full flex rounded-lg overflow-hidden custom-shadow flex-col md:flex-row">
            <p className="text-left mt-5 text-greyColor">
              I am a{" "}
              <span className=" font-bold">
                skilled UI/UX developer and designer
              </span>{" "}
              deeply passionate about gaming and creating intuitive, distinctive
              interfaces.
              <br /> <br />
              My expertise lies in developing visually appealing frontend
              designs, where meticulous attention to detail is a priority. My
              track record showcases a consistent ability to create beautiful
              interfaces that captivate users. Being involved in every stage of
              the creation process.
              <br /> <br />
              I am currently seeking my next role in the industry, eager to work
              on inspiring and exciting projects.
              <br /> <br />
              <span className=" text-accent2">• </span>Open to relocation
            </p>
          </div>
        </div>
      </ScrollAnimated>
      <div className=" mt-28 flex flex-col justify-center items-center gap-10">
        <ScrollInAnimation
          triggerID="linkedtree"
          movementSpeed={5}
          start={-20}
          goal={0}
        >
          <h3 className=" font-light">
            Where you can{" "}
            <span className=" text-accent3 font-medium">find me</span>
            ...
          </h3>
        </ScrollInAnimation>

        <div className=" flex gap-10">
          {" "}
          {linkTrees.map((l) => {
            return (
              <ScrollInAnimation
                key={l.name}
                className={`h-[150px] w-[150px] rounded-full bg-whiteColor border-accent3 border-4 overflow-hidden z-10`}
                triggerID="linkedtree"
                movementSpeed={-100}
                start={10}
                goal={0}
              >
                <a style={{ fill: l.color }} href={l.url}>
                  <div className=" p-10 w-full h-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8S8.2 4 8.2 5s-.7 1.7-1.7 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z" />
                    </svg>
                  </div>
                </a>
              </ScrollInAnimation>
            );
          })}
        </div>
      </div>
    </div>
  );
}
