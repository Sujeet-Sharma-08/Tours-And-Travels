import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#e0d9b5] relative flex justify-center">
        <div className="w-11/12 absolute -mt-[18rem] bg-gray-200 flex justify-evenly gap-10 mx-auto p-8 rounded-xl">
          <div>
            <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
              ABOUT US
            </h2>
            <div className="flex flex-col gap-3 text-lg font-semibold">
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                ABOUT US
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                REVIEW
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                TERMS AND CONDITIONS
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                PRIVACY AND POLICY
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                COPYRIGHTS POLICIES
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                SUPPORT
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                APPS
              </a>
            </div>
          </div>

          <div>
            <div className="mb-2 flex flex-col gap-1">
              <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
                FOR SUPPLIERS
              </h2>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                LIST YOUR ACTIVITIES
              </p>
            </div>

            <div className="mb-2 flex flex-col gap-1">
              <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
                FOR BRANDS
              </h2>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                LIST YOUR ACTIVITIES
              </p>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                DESTINATION MARKETING
              </p>
            </div>

            <div className="mb-2 flex flex-col gap-1">
              <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
                FOR TRAVEL AGENTS
              </h2>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                SIGN UP AS A AGENT
              </p>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                AGENT LOGIN
              </p>
            </div>
          </div>

          <div className="mb-2 flex flex-col gap-1">
            <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
              FOR TRAVEL AGENTS
            </h2>
            <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
              SIGN UP AS A AGENT
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal">
              TRAVEL DESTINATIONS
            </h2>
            <div></div>
          </div>
        </div>

    <div className="bg-[#2f343c] -mt-32  w-full h-full py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-center p-40">
          <hr className="" />
          <h2
            className="text-xl text-white font-semibold"
            style={{ fontfamily: "Kaushan Script" }}
          >
            INDIA TOUR & TRAVELS
          </h2>
          <hr className="" />
        </div>
        <div className="flex justify-center -mt-32 gap-10 mb-10">
          <div className="flex justify-center hover:scale-105 transition-all duration-300 items-center h-10 w-10 rounded-full bg-gray-200">
            <a  href="">
              <FaFacebookF size={25} />
            </a>
          </div>

          <div className="flex justify-center hover:scale-105 transition-all duration-300 items-center h-10 w-10 rounded-full bg-gray-300">
            <a href="">
              <FaInstagram size={25} />
            </a>
          </div>

          <div className="flex justify-center items-center hover:scale-105 transition-all duration-300 h-10 w-10 rounded-full bg-gray-300">
            <a href="">
              <FaTwitter size={25} />
            </a>
          </div>

          <div className="flex justify-center items-center hover:scale-105 transition-all duration-300 h-10 w-10 rounded-full bg-gray-300">
            <a href="">
              <FaLinkedin size={25} />
            </a>
          </div>

          <div className="flex justify-center items-center hover:scale-105 transition-all duration-300 h-10 w-10 rounded-full bg-gray-300">
            <a href="">
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-gray-300 text-center text-[1.5rem] font-bold  mt-5">
            © 2024 India Tour& Travels.com All rights reserved.
          </h3>
          <p className="text-gray-300 text-center text-[1rem] font-semibold py-5">
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
