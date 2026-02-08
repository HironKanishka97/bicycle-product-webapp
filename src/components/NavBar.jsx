import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="bg-primary fixed top-0 left-0 right-1 w-full flex py-6 justify-between items-center navbar z-50 ">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6">
        <img src={logo} alt="cycling.png" className="h-[48px] w-[112px]" />
        
        {/* Desktop Menu */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer  hover:text-secondary
              text-[16px] text-white 
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[42px] w-[42px] object-contain"
            onClick={() => settoggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 
              min-w-[150px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer  hover:text-secondary
              text-[16px] text-white 
              ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
