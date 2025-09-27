import React from "react";
import { Link } from "react-scroll";
import logo from "/assets/ZurwasLogo.avif";
import { useState } from "react";
import CartIcon from "./Cart/CartIcon";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex items-center  font-OpenSansRegular fixed  w-full top-0 left-0  z-50 bg-white shadow-md">
        <div className="container max-w-7xl mx-auto flex justify-between items-center p-4 h-16 sm:h-20 ">
          <div className="logo flex items-center justify-center rounded-full  border-gray-200  bg-white overflow-hidden ">
            <img
              src={logo}
              alt="Company Logo"
              className="w-16 h-16 sm:w-18 sm:h-18  object-contain"
              loading="lazy"
            />
          </div>
          <div className="cart-nav  flex items-center space-x-16">
            <CartIcon/>
          <ul className="nav-links hidden sm:flex space-x-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="menu"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="specials"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Specials
              </Link>
            </li>
          </ul>
          </div>
          <div className="humberger-sign  sm:hidden w-fit">
            <button
              className=" text-2xl text-gray-70 focus:outline-none"
              onClick={toggleNavbar}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <span className="block text-4xl text-gray-70 cursor-pointer">&times;</span> : <span className=" text-2xl text-gray-70 cursor-pointer">&#9776;</span>}
            </button>
          </div>
        </div>

       
        {isOpen && (
          <ul  className="nav-links sm:hidden flex flex-col items-center space-y-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 text-black absolute top-20 left-4 right-4 z-40
    transition-all duration-300">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleNavbar}
                activeClass="active"
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleNavbar}
                activeClass="active"
                spy={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="menu"
                smooth={true}
                duration={500}
                onClick={toggleNavbar}
                activeClass="active"
                spy={true}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="specials"
                smooth={true}
                duration={500}
                onClick={toggleNavbar}
                activeClass="active"
                spy={true}
              >
                Specials
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
