import React from "react";

export type Props = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
};

export default function PortfolioItem(props: Props) {
  const onSelectItem = () => {
    window.location.href = props.link;
  };
  //md:[&>*]:odd:flex-row-reverse
  return (
    <div
      className="portfolio-item relative p-2 flex border-none md:border-solid md:p-2 z-30 rounded-lg 
    flex-col w-screen text-primary max-w-[1200px] md:h-[500px] md:[&>*]:odd:flex-row-reverse"
    >
      <div className="h-full w-full flex rounded-lg overflow-hidden custom-shadow flex-col md:flex-row">
        <div className="flex-[3] bg-whiteColorTran p-5 md:p-10">
          <div className="relative w-full h-full flex justify-center items-cente overflow-hidden rounded-lg custom-shadow">
            <div className="relative w-full min-h-[300px] hover:scale-[1.05] transition-transform duration-[0.8s] ">
              <img
                onClick={onSelectItem}
                className="
                absolute 
                top-0  
                hover:translate-y-[calc(-100%+440px)] t
                ransition-all ease-in duration-[5s] 
                cursor-pointer min-h-full 
                object-cover"
                src={props.image}
              />
            </div>
          </div>
        </div>
        <div className="flex-[1.5] bg-whiteColorTran flex flex-col align-center justify-start p-5 pt-0 md:p-10">
          <div className="h-full flex flex-col flex-1 items-center">
            <h3 className="text-center font-bold">{props.name}</h3>
            <p className="text-center mt-5 text-greyColor">
              {props.description}
            </p>
            <div className="flex justify-center mt-5 flex-wrap gap-5 max-w-[200px] mb-auto">
              {props.tech.map((t, index) => {
                return (
                  <div
                    key={index}
                    className="text-md  p-2 rounded-md h-fit whitespace-nowrap border-2 border-accent3"
                  >
                    {t}
                  </div>
                );
              })}
            </div>
            <button
              className="button flex justify-center w-fit mt-5"
              onClick={onSelectItem}
            >
              visit the website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
