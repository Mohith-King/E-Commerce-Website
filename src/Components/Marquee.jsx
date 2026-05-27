const Marquee = () => {
  return (
    <div
      className="bg-black
grid
grid-cols-3
md:grid-cols-3
lg:grid-cols-5
gap-6
items-center
justify-items-center
px-4
py-8

text-white"
    >
      <img
        src="01.png"
        alt="ver"
        className="h-5 w-20 lg:h-15 lg:w-40 md:w-25 md:h-15 "
      />
      <img
        src="group-logo.png"
        alt="parada"
        className="h-5 w-20 lg:h-15 lg:w-40 md:w-25 md:h-15 "
      />
      <img
        src="gucci-logo.png"
        alt="gucci"
        className="h-5 w-20 lg:h-15 lg:w-40 md:w-25 md:h-15"
      />
      <img
        src="vector-logo.png"
        alt="vector"
        className="h-5 w-20 lg:h-15 lg:w-40 md:w-25 md:h-15"
      />
      <img
        src="zara-logo.png"
        alt="zara"
        className="h-5 w-20 lg:h-15 lg:w-40 md:w-25 md:h-15"
      />
    </div>
  );
};

export default Marquee;
