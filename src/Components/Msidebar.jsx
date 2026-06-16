import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Msidebar = ({ open, setOpen }) => {
  const sidebar = useRef();

  useEffect(() => {
    if (open) {
      gsap.to(sidebar.current, {
        x: 0,
        duration: 1,
        ease: "power3.out",
        display: "block",
        opacity: 1,
      });
    } else {
      gsap.to(sidebar.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
        opacity: 0,
      });
    }
  }, [open]);

  const SideBarLinks = [
    {
      page: "Shop",
      to: "/shop",
    },
    {
      page: "On Sale",
      to: "/topselling",
    },
    {
      page: "New Arrivals",
      to: "/new-arrivals",
    },
    {
      page: "Brands",
      to: "/browse",
    },
  ];

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <aside
      ref={sidebar}
      className="fixed top-0 left-0 w-full h-screen  bg-zinc-800  z-50 lg:hidden"
      style={{ transform: "translateX(-100%)" }}
    >
      <div className="child flex flex-col gap-15 text-zinc-50 mt-5 h-full justify-center items-center ">
        {SideBarLinks.map((l, i) => {
          return (
            <Link
              className="text-xl font-[myfont] font-semibold hover:text-zinc-400 transition duration-300 active:text-red-500 active:scale-95 hover:scale-105 "
              key={i}
              to={l.to}
            >
              {l.page}
            </Link>
          );
        })}
        <ImCross
          className="absolute right-10 top-10 hover:text-red-600 transition duration-200 cursor-pointer  active:scale-95  "
          onClick={handleClick}
        />
      </div>
    </aside>
  );
};

export default Msidebar;
