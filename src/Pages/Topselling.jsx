import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";
import { unstable_setDevServerHooks } from "react-router-dom";

const Topselling = ({ products }) => {
  const topSellings = useRef();
  const ViewMoreBox = useRef();

  const [viewbtn, setviewbtn] = useState(false);

  function TopSellingsAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: topSellings.current,
            start: "top 50%",
            end: "top 20%",
            scrub: 1,
          },
        });

        tl.from(".topSplit", {
          stagger: 0.3,
          duration: 0.4,
          opacity: 0,
          ease: "power2.inOut",
          yPercent: 20,
        });

        tl.from("#topSellingsBoxes", {
          y: 80,
          opacity: 0,
          stagger: 0.4,
          duration: 0.8,
        });
        tl.from(ViewMoreBox.current, {
          y: 80,
          opacity: 0,
          stagger: 0.4,
          duration: 0.8,
        });

        tl.from("#topSellingBtn", {
          x: 100,
          opacity: 0,
          stagger: 0.3,
          duration: 0.5,
        });
      },
      { scope: topSellings },
    );
  }

  const handleClick = () => {
    setviewbtn((prev) => !prev);
  };

  TopSellingsAnimate();

  return (
    <section className="p-5  border-t-2 border-zinc-300">
      <div
        ref={topSellings}
        className="flex flex-col md:flex-col lg:justify-center lg:flex-col lg:items-center "
      >
        <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold uppercase text-center font-[myfont] ">
          {["T", "O", "P", "", "", "S", "E", "L", "L", "I", "N", "G"].map(
            (l, i) => {
              return (
                <span key={i} className="topSplit pr-0.5">
                  {l}
                </span>
              );
            },
          )}
        </h1>

        <div
          id="topSellingsBoxes"
          className="grid grid-cols-2 mt-5 lg:grid-cols-4 gap-4 "
        >
          {products.slice(5, 9).map((item, ind) => {
            return (
              <div
                key={ind}
                id="topBoxes"
                className="bg-zinc-100  shadow-md rounded-xl hover:scale-105 transition duration-300 p-3.5"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-50  lg:object-fill object-cover rounded-xl"
                />
                <h2 className="font-bold mt-2"> {item.title} </h2>
                <p className="text-zinc-500 font-semibold text-sm">
                  ${item.price}
                </p>
              </div>
            );
          })}
        </div>

        {viewbtn && (
          <div
            ref={ViewMoreBox}
            className="grid grid-cols-2 mt-5 lg:grid-cols-4 gap-4 "
          >
            {products.slice(5).map((item, ind) => {
              return (
                <div
                  key={ind}
                  id="topBoxes"
                  className="bg-zinc-100  shadow-md rounded-xl hover:scale-105 transition duration-300 p-3.5"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-50  lg:object-fill object-cover rounded-xl"
                  />
                  <h2 className="font-bold mt-2"> {item.title} </h2>
                  <p className="text-zinc-500 font-semibold text-sm">
                    ${item.price}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div
          id="topSellingBtn"
          className="flex  w-full lg:w-1/4 lg:justify-center lg:items-center mt-3"
        >
          <button
            onClick={handleClick}
            className={`border-none w-full mt-2 px-10 py-1.5 md:px-10 md:py-1.5 transition duration-300 lg:px-10 lg:py-1.5 ${viewbtn ? "bg-red-500 text-white " : "bg-zinc-200"} rounded-2xl font-semibold hover:bg-zinc-500 outline-none hover:scale-105 hover:text-white `}
          >
            {viewbtn ? "Hide" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topselling;
