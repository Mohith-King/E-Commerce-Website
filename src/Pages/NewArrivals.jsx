import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

const NewArrivals = ({ products }) => {
  const arrivals = useRef();

  const [view, setview] = useState(false);

  const handleClick = () => {
    setview((prev) => !prev);
  };

  function newArrivals() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: arrivals.current,
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
          },
        });

        tl.from(".headtext .splittext", {
          y: -30,
          duration: 0.2,
          opacity: 0,
          stagger: 0.3,
          delay: 1,
        });

        tl.from(".imagegrid", {
          x: 100,
          duration: 0.8,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.inOut",
        });

        tl.from(".arrivialsBtn", {
          y: 50,
          opacity: 0,
          duration: 0.3,
        });
      },
      { scope: arrivals },
    );
  }
  newArrivals();

  return (
    <section className="p-10">
      <div
        ref={arrivals}
        className="flex flex-col   lg:justify-center lg:flex-col lg:items-center "
      >
        <h1 className="headtext uppercase text-4xl text-center font-[myfont]  font-bold md:text-5xl lg:text-5xl">
          {["N", "E", "w", "", "", "a", "r", "r", "i", "v", "a", "l", "s"].map(
            (i, ind) => {
              return (
                <span key={ind} className="splittext pr-0.5 ">
                  {i}
                </span>
              );
            },
          )}
        </h1>
        <div className="imagegrid grid grid-cols-2  mt-5  lg:grid-cols-4 gap-5">
          {products.slice(0, 4).map((item, ind) => {
            return (
              <div
                key={ind}
                className="bg-zinc-100 images hover:scale-105  transition duration-300 shadow-md rounded-xl  p-4"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-52 lg:object-fill object-cover rounded-xl"
                />
                <h2 className="font-bold mt-3"> {item.title} </h2>
                <p className="text-zinc-500 font-semibold text-sm">
                  ${item.price}
                </p>
              </div>
            );
          })}
        </div>
        {view && (
          <div className="imagegrid grid grid-cols-2  mt-5  lg:grid-cols-4 gap-5">
            {products.slice(4).map((item, ind) => {
              return (
                <div
                  key={ind}
                  className="bg-zinc-100 images hover:scale-105  transition duration-300 shadow-md rounded-xl  p-4"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-52 lg:object-fill object-cover rounded-xl"
                  />
                  <h2 className="font-bold mt-3"> {item.title} </h2>
                  <p className="text-zinc-500 font-semibold text-sm">
                    ${item.price}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <div className=" arrivial flex w-full lg:w-1/4 lg:justify-center lg:items-center mt-3 ">
          <button
            onClick={handleClick}
            className={` arrivialsBtn border-none w-full  mt-2 px-10 py-1.5 md:px-10 md:py-1.5 transition duration-300 lg:px-10 lg:py-1.5  rounded-2xl   font-semibold hover:bg-zinc-500 outline-none hover:scale-105 hover:text-white 
              ${view ? "bg-red-500 text-white " : "bg-zinc-100"} `}
          >
            {view ? "Hide" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
