import React from "react";

export default function PortfolioItem() {
  const onSelectItem = () => {
    console.log("TODO");
  };

  return (
    <div className=" relative portfolio-item flex p-3 [&>*]:odd:flex-row-reverse z-30">
      <div className="h-full w-full flex">
        <div className="h-full flex-[1.5] bg-accent2 p-10 ">
          <div className="relative w-full h-full flex justify-center items-center bg-accent3 overflow-hidden ">
            <img
              onClick={onSelectItem}
              className="absolute top-0  hover:top-[-100vh] transition-all ease-in duration-[5s] cursor-pointer"
              src="https://stefantopalovicdev.vercel.app/static/media/car-rental-full.c58b37da333d73238fdd.webp"
            />
          </div>
        </div>
        <div className="h-full flex-[0.75] bg-secondary flex flex-col align-center justify-start p-10">
          <div className="h-full flex flex-col flex-1 items-center">
            <h3 className="text-5xl text-center">title</h3>
            <p className="text-3xl text-center mt-5">description</p>
            <div className="flex justify-center space-x-5 mt-5">
              <div className="text-2xl bg-accent3 p-1 rounded-md">React</div>
              <div className="text-2xl bg-accent3 p-1 rounded-md">SCSS</div>
            </div>
            <button
              className="button text-2xl flex justify-center mt-auto w-fit"
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
