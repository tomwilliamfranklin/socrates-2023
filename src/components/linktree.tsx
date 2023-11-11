import ScrollAnimated from "./ScrollAnimated";

export type LinkTree = {
  name: string;
  color: string;
  url: string;
  icon: React.ReactNode;
};

export const linkTrees: LinkTree[] = [
  {
    name: "Linkedin",
    color: "#0077B5",
    url: "https://www.linkedin.com/in/tomwilliamfranklin/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8S8.2 4 8.2 5s-.7 1.7-1.7 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z" />
      </svg>
    ),
  },
  {
    name: "Github",
    color: "#000000",
    url: "https://github.com/tomwilliamfranklin",
    icon: (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 291.32 291.32"
        style={{ transform: "scale(1.2)" }}
      >
        <g>
          <path
            d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66
              s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235
              c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3
              c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0
              c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572
              c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425
              c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263
              c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184
              C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66
              C264.008,196.668,231.69,239.992,186.462,256.625z"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Behance",
    color: "#053EFF",
    url: "https://www.behance.net/tomfranklin3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        style={{ transform: "scale(1.4)" }}
      >
        <path d="M 16 8 C 11.582 8 8 11.582 8 16 L 8 48 C 8 52.418 11.582 56 16 56 L 48 56 C 52.418 56 56 52.418 56 48 L 56 16 C 56 11.582 52.418 8 48 8 L 16 8 z M 36 23 L 46 23 L 46 25.570312 L 36 25.570312 L 36 23 z M 17.146484 23.001953 L 25.759766 23.001953 C 26.694766 23.001953 31.751953 22.941797 31.751953 27.591797 C 31.751953 30.063797 30.065406 30.897672 29.316406 31.263672 C 30.439406 31.631672 32.498047 32.673469 32.498047 35.855469 C 32.499047 40.787469 26.882766 40.999 26.134766 41 L 17.146484 41 L 17.146484 23.001953 z M 20.986328 26.121094 L 20.986328 30.345703 L 25.107422 30.345703 C 25.668422 30.345703 27.539062 30.029578 27.539062 28.142578 C 27.539062 26.255578 25.105422 26.121094 24.732422 26.121094 L 20.986328 26.121094 z M 41.298828 27 C 46.257828 27 47.603734 30.869969 47.802734 31.792969 C 47.999734 32.715969 48 33.532672 48 34.638672 L 37.945312 34.638672 C 37.945312 35.744672 38.533141 38.240234 41.494141 38.240234 C 42.283141 38.240234 42.875797 38.053547 43.466797 37.685547 C 44.057797 37.315547 44.254172 36.947125 44.451172 36.578125 L 47.802734 36.578125 C 47.211734 38.052125 46.423281 39.159484 45.238281 39.896484 C 44.056281 40.633484 42.675609 41 41.099609 41 C 40.113609 41 39.125625 40.815313 38.140625 40.445312 C 37.351625 40.075313 36.564609 39.526656 35.974609 38.972656 C 35.382609 38.422656 34.98775 37.684672 34.59375 36.763672 C 34.19875 36.027672 34 34.92 34 34 C 34 33.081 34.368828 27 41.298828 27 z M 41.115234 29.462891 C 38.220234 29.462891 37.746094 32.2535 37.746094 32.4375 L 44.087891 32.4375 C 43.889891 31.5095 43.057234 29.462891 41.115234 29.462891 z M 20.945312 32.919922 L 20.945312 37.876953 L 25.253906 37.876953 C 25.627906 37.876953 28.248047 37.754234 28.248047 35.490234 C 28.249047 33.223234 26.189906 32.919922 25.253906 32.919922 L 20.945312 32.919922 z" />
      </svg>
    ),
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
                <span className=" font-bold"> passionate UI/UX Developer</span>
                , with a keen eye for creating intuitive, visually striking
                interfaces, driven by a deep passion for the video game
                industry.
                <br /> <br />
                With a rich background in Frontend and UI/UX development, I
                bring a versatile skillset that combines technical knowledge
                with creative capabilities. I have a proven track record of
                guiding applications from their initial stages, laying down the
                essential groundwork for projects, and meticulously developing
                intricate Frontend components.
                <br /> <br />
                My experience spans a wide array of applications, including
                <span className=" font-bold">AAA video game UI</span>,{" "}
                <span className=" font-bold"> websites</span>,{" "}
                <span className=" font-bold"> mobile apps</span>, and{" "}
                <span className=" font-bold"> software applications</span>.
              </p>
            </div>
            <p>
              <ul className=" text-left xxs:flex xxs:gap-2 xxs:justify-center xxs:text-center flex-wrap">
                <li>
                  <span className=" text-accent4"> • </span>
                  Component Construction
                </li>
                <li>
                  <span className=" text-accent3"> • </span>
                  Development
                </li>
                <li>
                  <span className=" text-accent2"> • </span>
                  Prototyping
                </li>
                <li>
                  <span className=" text-accent5"> • </span>
                  Interative Design
                </li>
                <li>
                  <span className=" text-accent4"> • </span>
                  Integration
                </li>
                <li>
                  <span className=" text-accent3"> • </span>
                  User Testing
                </li>
                <li>
                  <span className=" text-accent2"> • </span>
                  Optimization
                </li>
                <li>
                  <span className=" text-accent5"> • </span>
                  Mentor
                </li>
                <li>
                  <span className=" text-accent4"> • </span>
                  Agile Development
                </li>
                <li>
                  <span className=" text-accent2"> • </span>
                  User Testing
                </li>
                <li>
                  <span className=" text-accent3"> • </span>
                  UI Testing and Debugging
                </li>
                <li>
                  <span className=" text-accent5"> • </span>
                  Animation
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
            find <span className=" font-medium text-accent2">me</span>...
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
                  <div className=" p-5 md:p-10 w-full h-full ">{l.icon}</div>
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
