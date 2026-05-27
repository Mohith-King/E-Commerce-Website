import Marquee from "../Components/Marquee";

const Landing = () => {
  return (
    <>
      <section className="w-full bg-[#F2F0F1] overflow-hidden">
        {/* MAIN CONTAINER */}
        <div className="max-w-350 mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 py-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {/* HEADING */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-none font-[MyFont] font-bold">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-xl">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            {/* BUTTON */}
            <button className="bg-black text-white px-8 py-4 rounded-full w-fit font-semibold hover:bg-zinc-800 transition">
              Shop Now
            </button>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 mt-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
                <p className="text-gray-500">International Brands</p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold">2,000+</h2>
                <p className="text-gray-500">High-Quality Products</p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold">30,000+</h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="/landingimage.png"
              alt="Fashion"
              className="w-full max-w-150 object-contain"
            />
          </div>
        </div>
      </section>
      <Marquee/>
    </>
  );
};

export default Landing;
