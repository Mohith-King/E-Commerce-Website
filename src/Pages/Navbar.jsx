import { BiCart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import Noti from "../Components/Noti";

const Navbar = () => {
    return (
        <main>
            <Noti />

            <nav className="w-full bg-gray-300 px-4 py-4 flex items-center justify-between select-none">

                {/* LEFT */}
                <div className="flex items-center gap-3">

                    {/* Mobile Menu */}
                    <BiMenu className="text-3xl cursor-pointer lg:hidden" />

                    {/* Logo */}
                    <h1 className="font-[MyFont] text-2xl md:text-3xl lg:text-4xl">
                        SHOP.CO
                    </h1>
                </div>

                {/* CENTER LINKS */}
                <div className="hidden lg:flex gap-6 font-medium cursor-pointer">
                    {["Shops", "On Sale", "New Arrivals", "Brands"].map(
                        (item, ind) => {
                            return (
                                <a
                                    key={ind}
                                    className="hover:text-gray-800 transition duration-300"
                                >
                                    {item}
                                </a>
                            );
                        }
                    )}
                </div>

                {/* SEARCH */}
                <div className="hidden md:flex items-center bg-zinc-200 rounded-2xl px-3 py-2 w-62.5 lg:w-100">
                    <BiSearch size={20} className="cursor-pointer" />

                    <input
                        type="text"
                        className="bg-transparent outline-none px-3 w-full"
                        placeholder="Search for Product..."
                    />
                </div>

                {/* RIGHT ICONS */}
                <div className="flex items-center gap-3 md:gap-5">

                    {/* Mobile Search */}
                    <BiSearch className="text-2xl cursor-pointer md:hidden" />

                    <BiCart className="text-3xl cursor-pointer" />

                    <BiUser className="text-3xl cursor-pointer" />
                </div>
            </nav>
        </main>
    );
};

export default Navbar;