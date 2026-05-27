import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Noti = () => {
  const [hidebar, sethidebar] = useState(false);

  const handleClick = () => {
    sethidebar((prev) => !prev);
  };

  return (
    <div
      className={`${hidebar === true && "hidden"} w-full  flex   items-center  relative  bg-black p-3 text-white text-center `}
    >
      <div className="flex justify-center flex-1 items-center  ">
        <p>Sign up and get 20% off to your first order.</p>
        <a>Sign Up Now</a>
      </div>
      <div className="flex items-center absolute right-20 ">
        <RxCross2 size={25} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Noti;
