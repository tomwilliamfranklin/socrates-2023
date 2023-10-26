import ScrollAnimated from "./ScrollAnimated";

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
      <ScrollAnimated movementSpeed={15} start={0} goal={-50}>
        <div
          className="portfolio-item relative mt-[-300px] p-2 flex border-none md:border-solid md:p-2 rounded-lg 
    flex-col w-screen text-primary max-w-[1200px] "
        >
          <div className="p-10 xl:p-20 h-full gap-10 xxs:gap-20 bg-whiteColorTran w-full flex flex-col rounded-lg overflow-hidden custom-shadow ">
            <div className=" flex gap-2 xxs:gap-20 flex-col xxs:flex-row flex-wrap sm:pl-10 sm:pr-10">
              <div className=" flex-[1] min-h-[300px] xxxs:min-w-[300px] flex flex-col justify-center items-center">
                <img
                  className=" h-[250px] w-[250px]  md:h-[300px] md:w-[300px] bg-accent rounded-full overflow-hidden object-cover"
                  alt=" a picture of me, tom franklin"
                  src={"/me.jpg"}
                  width={1000}
                  height={1000}
                />
              </div>
              <p className="flex-[2] text-left mt-5 text-greyColor md:min-w-[400px]">
                I am a{" "}
                <span className=" font-bold"> passionate UI/UX Developer</span>{" "}
                with a robust background in design and development, with a keen
                eye for creating intuitive, visually striking interfaces, driven
                by a deep passion for the video game industry.
                <br /> <br />
                With a rich background in Frontend and UI/UX development, I
                bring a versatile skillset that combines technical knowledge
                with creative capabilities. I have a proven track record of
                guiding applications from their initial stages, laying down the
                essential groundwork for projects, and meticulously developing
                intricate Frontend components.
                <br /> <br />
                My experience spans a wide array of applications, including
                <span className=" font-bold"> video game UI</span>,{" "}
                <span className=" font-bold"> websites</span>,{" "}
                <span className=" font-bold"> mobile apps</span>, and{" "}
                <span className=" font-bold"> software applications</span>.
              </p>
            </div>
            <p>
              <ul className=" text-left xxs:flex xxs:gap-2 xxs:justify-center xxs:text-center flex-wrap">
                <li>
                  <span className=" text-accent4"> • </span>
                  Component Development
                </li>
                <li>
                  <span className=" text-accent2"> • </span>
                  UI / UX Development
                </li>
                <li>
                  <span className=" text-accent3"> • </span>
                  UI Prototyping
                </li>

                <li>
                  <span className=" text-accent4"> • </span>
                  Mentor
                </li>
                <li>
                  <span className=" text-accent3"> • </span>
                  UI Designer
                </li>
                <li>
                  <span className=" text-accent2"> • </span>
                  UI Testing and Debugging
                </li>
              </ul>
            </p>
          </div>
        </div>
      </ScrollAnimated>
      <div className="relative z-10 pt-28 pb-28 flex flex-col justify-center items-center gap-10">
        <div className="flex-1 max-w-[1000px] h-full flex flex-col">
          <h3 className=" font-light text-blackColor">
            Where <span className=" font-medium text-accent3">you</span> can{" "}
            <span className=" font-medium text-accent2 font-medium">
              find me...
            </span>
          </h3>
        </div>
        <div className=" flex gap-10">
          {" "}
          {linkTrees.map((l) => {
            return (
              <div
                key={l.name}
                className=" h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full bg-whiteColor shadow-xl brightness-95 border-accent3 border-4 overflow-hidden z-10 transition-all ease-in hover:scale-105 hover:brightness-100"
              >
                <a style={{ fill: l.color }} href={l.url}>
                  <div className=" p-5 md:p-10 w-full h-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8S8.2 4 8.2 5s-.7 1.7-1.7 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z" />
                    </svg>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" w-full h-full absolute repeating-svg">
        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="a"
              patternUnits="userSpaceOnUse"
              width="58"
              height="100.23"
              patternTransform="scale(2) rotate(0)"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="hsla(0, 0%, 100%, 0)"
              />
              <path
                d="M12.127 73.813l.013 5.643 4.893-2.81zm-6.01-3.47l16.928 9.773-16.93 9.777zm-6.02-3.476l28.967 16.725L.13 100.262zm16.97 23.616l-.015 5.643-4.893-2.81zm6.01-3.472L6.148 96.786l16.93 9.776zM.128 100.261l28.935 16.669m16.874-23.67l-.013-5.644-4.894 2.81zm6.01 3.47L35.02 86.956l16.931-9.775zM29 83.482l28.936-16.669.032 33.393m-28.904 2.834l4.881-2.834-4.88-2.832zm0 6.94V90.433l16.932 9.773zm0 6.952V83.482l28.904 16.724zM58 13.915l-4.882 2.833L58 19.582zm0-6.94v19.548l-16.932-9.774zm0-6.951v33.448L29.096 16.748m0-13.89l4.88-2.833-4.88-2.833zm0 6.94V-9.749L46.026.025zm0 6.95v-33.449L58 .024zM16.94 23.696l-4.894-2.81-.014 5.643zm6.01-3.47L6.02 29.998V10.448zM0 33.472L.033.08 28.97 16.75m-5.99-29.92L6.053-3.393l16.93 9.776zM28.97 16.75L29-16.644.033.08m40.966 23.615l.013 5.643 4.893-2.81zm-6.01-3.47l16.928 9.774-16.93 9.775zm22.947 13.248L29 50.143l-.031-33.394M16.97 43.197l-.013-5.643-4.894 2.81zm6.01 3.47L6.053 36.894l16.93-9.776zM29 50.143L.032 33.419l28.936-16.67m16.937 57.008l-4.893-2.81-.014 5.644zm6.01-3.47L34.988 80.06v-19.55zM29 64.035l-4.88 2.832L29 69.7zm0-6.942v19.549L12.07 66.867zM.097 66.867L29 50.143v33.449m16.938-43.228l-.013 5.644-4.894-2.811zm6.01-3.47L35.02 46.667l16.931 9.777zM29 50.143l28.936 16.67.032-33.394M.097 52.975l4.88-2.832-4.88-2.833zm0 6.942V40.368l16.931 9.775zm0 6.95V33.42"
                stroke-linecap="square"
                stroke-width="1"
                stroke="hsla(0, 0%, 100%, 0.2)"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#a)"
          />
        </svg>
      </div>
    </div>
  );
}
