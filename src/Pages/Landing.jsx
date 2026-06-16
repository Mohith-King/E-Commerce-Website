import { useEffect, useRef } from "react";
import Marquee from "../Components/Marquee";
import Msidebar from "../Components/Msidebar";
import NewArrivals from "./NewArrivals";
import Topselling from "./Topselling";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BrowseCategory from "./BrowseCategory";
import Customers from "./Customers";
import Update from "./Update";
import Shopco from "./Shopco";

const Landing = ({ products }) => {
  const brandRef = useRef();
  const productRef = useRef();
  const customerRef = useRef();

  const animateCounters = () => {
    const counters = [
      { ref: brandRef, end: 200 },
      { ref: productRef, end: 2000 },
      { ref: customerRef, end: 30000 },
    ];

    counters.forEach((counter) => {
      const obj = { value: 0 };

      gsap.to(obj, {
        value: counter.end,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          counter.ref.current.textContent =
            Math.floor(obj.value).toLocaleString() + "+";
        },
      });
    });
  };

  function animateLand() {
    useGSAP(() => {
      const tl = gsap.timeline();

      tl.from(".hero-heading", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })

        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.6",
        )

        .from(
          ".hero-btn",
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )

        .from(".hero-stat", {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.5,
        })
        .call(() => {
          animateCounters();
        })

        .from(
          ".hero-image",
          {
            x: 200,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=1",
        );

      gsap.to(".hero-image", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      const counters = [
        { ref: brandRef, end: 200 },
        { ref: productRef, end: 2000 },
        { ref: customerRef, end: 30000 },
      ];

      counters.forEach((counter) => {
        const obj = { value: 0 };

        gsap.to(obj, {
          value: counter.end,
          duration: 2,
          ease: "power2.out",
          delay: 1.2, // starts after hero animation
          onUpdate: () => {
            counter.ref.current.textContent =
              Math.floor(obj.value).toLocaleString() + "+";
          },
        });
      });
    }, []);
  }
  animateLand();

  return (
    <>
      {/* <Msidebar /> */}
      <section className="w-full bg-[#F2F0F1] overflow-hidden">
        {/* MAIN CONTAINER */}
        <div className="max-w-350 mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16  py-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 overflow-hidden">
            {/* HEADING */}
            <h1 className="hero-heading text-4xl md:text-6xl lg:text-7xl leading-none font-[MyFont] font-bold">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>

            {/* DESCRIPTION */}
            <p className=" hero-desc text-gray-600 text-sm md:text-base lg:text-lg max-w-xl">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            {/* BUTTON */}
            <button className="hero-btn bg-black text-white px-8 py-4 rounded-full w-fit font-semibold hover:bg-zinc-800 ">
              Shop Now
            </button>

            {/* STATS */}
            <div className="hero-stat flex flex-wrap gap-8 mt-4">
              <div>
                <h2 ref={brandRef} className="text-3xl md:text-4xl font-bold">
                  0+
                </h2>
                <p className="text-gray-500">International Brands</p>
              </div>

              <div>
                <h2 ref={productRef} className="text-3xl md:text-4xl font-bold">
                  0+
                </h2>
                <p className="text-gray-500">High-Quality Products</p>
              </div>

              <div>
                <h2
                  ref={customerRef}
                  className="text-3xl md:text-4xl font-bold"
                >
                  0+
                </h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="/landingimage.png"
              alt="Fashion"
              className=" hero-image w-full max-w-150 object-contain"
            />
          </div>
        </div>
      </section>
      <Marquee />
      <NewArrivals products={products} />
      <Topselling products={products} />
      <BrowseCategory />
      <Customers />
      <Update />
      <Shopco />
    </>
  );
};

export default Landing;
