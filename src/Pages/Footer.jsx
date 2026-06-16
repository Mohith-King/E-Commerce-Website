import React from "react";

const Footer = () => {
  const images = [
    "visa.png",
    "mastercard.png",
    "paypal.png",
    "applepay.png",
    "googlepay.png",
  ];
  return (
    <footer className="p-10 border-t border-zinc-400">
      <div className="flex flex-col gap-3 justify-center border-t-2X border-zinc-400 items-center md:flex-row lg:flex-row md:justify-between lg:justify-between ">
        <h1 className="font-semibold text-md md:text-xl lg:text-xl text-center ">
          Shop.co 2000-2023.All Rights Reserved
        </h1>
        <div className="flex justify-around mt-3 gap-2 md:gap-3 lg:gap-4 ">
          {images.map((i, ind) => {
            return (
              <div className="bg-zinc-100 p-2 rounded-xl h-10 w-12 hover:scale-105 transtion duration-300 ">
                <img key={ind} src={i} className=" h-full w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
