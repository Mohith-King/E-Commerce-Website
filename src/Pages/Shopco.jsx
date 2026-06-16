import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from "./Footer";

const Shopco = () => {
  return (
    <section className="p-5">
      <div className="flex flex-col gap-5 mb-5 md:flex-row lg:flex-row lg:py-3 lg:justify-around ">
        <div className="1 flex flex-col gap-3">
          <h1 className="text-4xl font-bold font-[myfont]  ">SHOP.CO</h1>
          <p className="text-md font-semibold text-zinc-600">
            We have clothes that suits your style and which you're proud to
            wear. From Women to men.
          </p>
        </div>
        <div className="2 flex gap-5 text-2xl  md:text-3xl lg:text-4xl  md:items-center lg:items-center ">
          <FaFacebook className="cursor-pointer hover:scale-105 transition duration-300 hover:text-blue-500" />
          <FaInstagram className="cursor-pointer hover:scale-105 transition duration-300 hover:text-purple-500 " />
          <FaGithub className="cursor-pointer hover:scale-105 transition duration-300 hover:text-green-500 " />
          <FaYoutube className="cursor-pointer hover:scale-105 transition duration-300 hover:text-red-500 " />
        </div>
        <div className="flex flex-col gap-3 md:flex-row lg:flex-row lg:justify-between">
          <div className="3 flex gap-2 items-center justify-around ">
            <div className="company flex flex-col gap-3">
              <h2 className="text-xl font-semibold uppercase text-black ">
                Company
              </h2>
              {["About", "Features", "Works", "Career"].map((text, ind) => {
                return (
                  <h4
                    key={ind}
                    className="text-md hover:text-blue-500 hover:underline underline-offset-4  transition duration-300 text-zinc-600"
                  >
                    {text}
                  </h4>
                );
              })}
            </div>
            <div className="help flex flex-col gap-3">
              <h2 className="text-xl font-semibold uppercase text-black ">
                Help
              </h2>
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((text, ind) => {
                return (
                  <h4
                    key={ind}
                    className="text-md hover:text-blue-500 hover:underline underline-offset-4  transition duration-300 text-zinc-600"
                  >
                    {text}
                  </h4>
                );
              })}
            </div>
          </div>
          <div className="4 flex gap-2 items-center justify-around ">
            <div className="faq flex flex-col gap-3">
              <h2 className="text-xl font-semibold uppercase text-black ">
                Faq
              </h2>
              {["Account", "Manage Deliveries", "Orders", "Payment"].map(
                (text, ind) => {
                  return (
                    <h4
                      key={ind}
                      className="text-md hover:text-blue-500 hover:underline underline-offset-4  transition duration-300 text-zinc-600"
                    >
                      {text}
                    </h4>
                  );
                },
              )}
            </div>
            <div className="resources flex flex-col gap-3">
              <h2 className="text-xl font-semibold uppercase text-black ">
                resources
              </h2>
              {[
                "Free eBook",
                "Development Tutorial",
                "How to - Blog",
                "Youtube Playlist",
              ].map((text, ind) => {
                return (
                  <h4
                    key={ind}
                    className="text-md hover:text-blue-500 hover:underline underline-offset-4  transition duration-300 text-zinc-600"
                  >
                    {text}
                  </h4>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <Footer />
      </div>
    </section>
  );
};

export default Shopco;
