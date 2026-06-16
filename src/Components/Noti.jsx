import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Noti = () => {
  const [hidebar, sethidebar] = useState(false);

  const handleClick = () => {
    sethidebar((prev) => !prev);
  };

  return (
    <div
      className={`${hidebar === true ? "hidden" : "flex"} items-center    bg-black px-8 py-4 md:p-5 text-white text-center  `}
    >
      <div className="flex justify-center flex-1 items-center  ">
        <p className="text-md md:text-xl lg:text-2xl mr-2  ">
          Sign up and get 20% off to your first order.
        </p>
        <a href="/signup" className="underline underline-offset-4 text-md md:text-xl lg:text-2xl hover:text-zinc-200  hover:no-underline cursor-pointer hover:-translate-y-1 transition duration-300 ">
          Sign Up Now 
        </a>
      </div>
      <div className="flex items-center  ">
        <RxCross2 size={25} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Noti;
