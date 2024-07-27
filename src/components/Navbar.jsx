import React from "react";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#e0d9b5] bg-cover w-full overflow-y-hidden bgimage bg-center min-h-screen">
      <div className="w-full mx-auto  ">
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-between mt-5">
            <div className="flex gap-5 ml-5">
              <div className="flex gap-2 text-white">
                <IoCall size={30} />
                <a className="font-semibold text-xl" href="tel:+91 8433700215">
                  +91 8433700215
                </a>
              </div>

              <div className="flex gap-2 text-white">
                <TfiEmail size={30} />
                <a
                  className="font-semibold text-xl"
                  href="mail to:tanul@unarrow.com"
                >
                  tanul@unarrow.com
                </a>
              </div>
            </div>

            <div className="flex gap-5 text-4xl mr-10 text-white ">
              <a
                className="hover:scale-110 transition-all duration-300 hover:text-blue-500 "
                href=""
              >
                <FaFacebookF />
              </a>
              <a
                className="hover:scale-110 transition-all duration-300 hover:text-orange-600 "
                href=""
              >
                <FaInstagram />
              </a>
              <a
                className="hover:scale-110 transition-all duration-300 hover:text-green-500"
                href=""
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div className="py-4 navbar flex justify-between bg-transparent border-[3px] rounded-[2.1rem] border-blue-400">
            <h1 className="h1 ml-5 hover:scale-105 duration-500 transition-all ">
              INDIA TOUR & TRAVELS
            </h1>

            <label className="flex mr-9 gap-2 py-3 px-8 border-[3px] border-white rounded-3xl ">
              <FaSearch className="text-white text-2xl mr-2 " />
              <input
                type="text"
                className="inputePlaceholder bg-transparent outline-none text-white "
                placeholder="Search for Destination"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="flex justify-center mt-40 font-bold text-[4rem] text-white leading-normal">
            Explore The{" "}
            <span className="text-[#FF7F09] ml-2 mr-2"> Timeless </span>Beauty
            of
          </p>
          <h2
            className="text-[#FF7F09] text-[6rem] -mt-8 font-extrabold hover:scale-110 duration-500 transition-all"
            style={{ fontfamily: "Inter" }}
          >
            Rajasthan
          </h2>

          <div className="flex bg-white justify-center w-1/2 mb-4">
            <hr />
          </div>
          <p className="font-normal text-white text-4xl">
            Uncovers Rajasthan’s wonders
          </p>
          <button className="py-4 px-10 bg-[#ff8818] mt-4 rounded-2xl border border-black text-white text-2xl font-semibold hover:scale-110 transition-all duration-300">
            BOOK A CALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
