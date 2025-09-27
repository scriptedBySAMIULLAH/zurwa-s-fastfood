import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import footer_img from "/assets/footer_img.avif";

function Footer() {
  return (
    <>
      <main
        className="flex w-full flex-col  justify-around bg-footerBg text-white py-4
      sm:flex-row px-4 sm:px-2
      "
      >
        <section className=" grid grid-cols-1  sm:grid-cols-2 gap-6">
          <div className="max-w-[20rem]">
            <img
              src={footer_img}
              alt="Zurwa's Fast food and chinese"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <ul className="h-full flex flex-col items-center    space-y-6 font-bold cursor-pointer justify-start pt-2">
              <li className="cursor-none   font-semibold text-lg mb-4 text-yellow">
                Quick Links
              </li>
              <li>
                <Link to="home" smooth={true} duration={500} spy={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="menu" smooth={true} duration={500} spy={true}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="specials" smooth={true} duration={500} spy={true}>
                  Specials
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-footerBg text-white py-10 px-6 rounded-t-2xl shadow-lg">
          <div className="container mx-auto flex flex-col sm:flex-row justify-center  sm:justify-between   gap-6 items-center sm:items-start ">
            <address className="not-italic space-y-3 text-sm sm:text-base">
              <p className="flex items-center  gap-2 ">
                <FaMapMarkerAlt className="text-yellow-500" />
                Khaqan Abbasi Road, PC Chowk Bhurban Murree
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-500" />
                <a
                  href="tel:+923280033444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  0328 0033444
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-500" />
                <a
                  href="mailto:zurwaas@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  zurwaas@gmail.com
                </a>
              </p>
            </address>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.facebook.com/61576773937051/videos/introducing-our-brand-new-fast-food-branchzurwas-were-serving-up-mouth-watering-/1282472530138472/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.tiktok.com/discover/zurwas-restaurant-murree"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Footer;
