import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../assets/Ellipse 10.png";
import img2 from "../assets/Ellipse 11.png";
import img3 from "../assets/Ellipse 12.png";

const Feedback = () => {
  return (
    <div className="bg-[#e0d9b5] relative w-full h-[100vh] py-10">
      <div className="w-11/12 max-auto">
        <div className="flex gap-2 ml-32 mb-10">
          <div className=" w-[10px] h-[10px] lg:h-[14px] lg:w-[14px] mt-6 bg-[#9321ec]"></div>
          <div className="flex flex-col">
            <h2 className="text-black font-bold leading-normal text-[2.5rem]">
              Hear From Our Happy Travelers
            </h2>
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-32 gap-5 mx-auto">
          <div className="border-2 w-[25rem] h-[20rem] border-black rounded-xl">
            <div className="flex text-white text-xl gap-2 ml-5 mt-5">
              <FaStar />
              <p className="text-xl font-semibold -mt-1">4.9</p>
            </div>
            <p className="ml-5 mr-2 font-semibold leading-[1.3rem] text-[1rem] mt-5 mb-5">
              Thank you India Tour for all arrangements and making our trip
              memorable!! It was not just a sightseeing tour, we learned a lot
              about our history, culture and heritage. Transportation was
              excellent.
            </p>
            <div className="bg-gray-400 ml-5 mr-5">
              <hr className="h-[2px]" />
            </div>
            <div className="flex gap-3 mt-5 ml-5">
              <img src={img1} width={65} height={65} alt="" />
              <p className="mt-5 text-lg font-semibold">Eva Jackson</p>
            </div>
          </div>

          <div className="border-2 w-[25rem] h-[20rem] border-black rounded-xl">
            <div className="flex text-white text-xl gap-2 ml-5 mt-5">
              <FaStar />
              <p className="text-xl font-semibold -mt-1">4.9</p>
            </div>
            <p className="ml-5 mr-2 font-semibold leading-[1.3rem] text-[1rem] mt-5 mb-5">
              Thank you India Tour for all arrangements and making our trip
              memorable!! It was not just a sightseeing tour, we learned a lot
              about our history, culture and heritage. Transportation was
              excellent.
            </p>
            <div className="bg-gray-400 ml-5 mr-5">
              <hr className="h-[2px]" />
            </div>
            <div className="flex gap-3 mt-5 ml-5">
              <img src={img2} width={65} height={65} alt="" />
              <p className="mt-5 text-lg font-semibold">Rachel</p>
            </div>
          </div>

          <div className="border-2 w-[25rem] h-[20rem] border-black rounded-xl">
            <div className="flex text-white text-xl gap-2 ml-5 mt-5">
              <FaStar />
              <p className="text-xl font-semibold -mt-1">4.9</p>
            </div>
            <p className="ml-5 mr-2 font-semibold leading-[1.3rem] text-[1rem] mt-5 mb-5">
              Thank you India Tour for all arrangements and making our trip
              memorable!! It was not just a sightseeing tour, we learned a lot
              about our history, culture and heritage. Transportation was
              excellent.
            </p>
            <div className="bg-gray-400 ml-5 mr-5">
              <hr className="h-[2px]" />
            </div>
            <div className="flex gap-3 mt-5 ml-5">
              <img src={img3} width={65} height={65} alt="" />
              <p className="mt-5 text-lg font-semibold">Sia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
