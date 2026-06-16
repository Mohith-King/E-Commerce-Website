import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef();

  useGSAP(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  const logos = [
    "01.png",
    "group-logo.png",
    "gucci-logo.png",
    "vector-logo.png",
    "zara-logo.png",
  ];

  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="overflow-hidden bg-black py-8">
      <div ref={marqueeRef} className="flex w-max items-center gap-16">
        {allLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            className="h-8 md:h-12 lg:h-14 w-auto shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default Marquee;
