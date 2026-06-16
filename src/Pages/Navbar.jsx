import { BiCart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import Noti from "../Components/Noti";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Msidebar from "../Components/Msidebar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [click, setclick] = useState(false);

  const [showComponent, setshowComponent] = useState(false);

  const notification = useRef();

  const handleClick = () => {
    setclick((prev) => !prev);
  };

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      setshowComponent(true);
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  const mainContainer = useRef();

  const navlinks = [
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

  function animateNav() {
    useGSAP(() => {
      const tl = gsap.timeline();

      tl.from(".mainHead", {
        x: -40,
        opacity: 0,
        duration: 0.3,
      });

      tl.from(".mainLinks a", {
        opacity: 0,
        y: -40,
        duration: 0.3,
        stagger: 0.3,
      });

      tl.from(".search", {
        x: -100,
        opacity: 0,
        duration: 0.4,
      });

      tl.from(".cartItem,.user", {
        x: 100,
        duration: 0.4,
        stagger: 0.3,
        opacity: 0.3,
      });
    });
  }

  animateNav();

  return (
    <main>
      {showComponent && <Noti />}
      <nav
        ref={mainContainer}
        className="w-full bg-gray-300 px-4 py-4 flex items-center justify-between select-none"
      >
        {/* LEFT */}
        <div className="logo flex items-center  lg:px-3 gap-3">
          {/* Mobile Menu */}
          <BiMenu
            onClick={handleClick}
            className="text-3xl cursor-pointer lg:hidden"
          />

          {/* Logo */}
          <NavLink
            to={"/"}
            className="font-[MyFont] mainHead cursor-pointer text-2xl md:text-3xl lg:text-4xl"
          >
            SHOP.CO
          </NavLink>
        </div>

        {/* CENTER LINKS */}
        <div className="hidden  lg:flex gap-6 mainLinks  font-medium cursor-pointer">
          {navlinks.map((item, ind) => {
            return (
              <Link key={ind} to={item.to} className="hover:text-gray-800">
                {item.page}
              </Link>
            );
          })}
        </div>

        {/* SEARCH */}
        <div className="search hidden md:flex items-center bg-zinc-200 rounded-2xl px-3 py-2 w-62.5 lg:w-100">
          <BiSearch size={20} className="cursor-pointer" />

          <input
            type="text"
            className="bg-transparent outline-none px-3 w-full"
            placeholder="Search for Product..."
          />
        </div>

        {/* RIGHT ICONS */}
        <div className=" cart flex items-center gap-3 md:gap-5">
          {/* Mobile Search */}
          <BiSearch className="text-2xl cursor-pointer md:hidden" />

          <Link to="/cart">
            <BiCart className="text-3xl cartItem cursor-pointer" />
          </Link>

          <BiUser className="text-3xl user cursor-pointer" />
        </div>
      </nav>
      <Msidebar open={click} setOpen={setclick} />
    </main>
  );
};

export default Navbar;
