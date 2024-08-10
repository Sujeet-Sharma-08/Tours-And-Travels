import React from "react";
import wonders from "../assets/wonders.png";
import jaisalmer from "../assets/jaisalmer.png";
import heritage from "../assets/heritage.png";
import { CiStar } from "react-icons/ci";
const IconicDestination = () => {
  return (
    <div className="bg-[#e0d9b5] relative h-full py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-2 ml-10">
          <div className=" w-[10px] h-[10px] lg:h-[14px] lg:w-[14px] mt-6 bg-[#9321ec]"></div>
          <div>
            <h2 className="text-black font-bold leading-normal text-[2.5rem]  ">
              Our Iconic Destination
            </h2>
            <p className="text-black  text-[1.65rem] font-normal leading-normal mb-5 ">Discover the Essence Of Rajasthan</p>
          </div>
        </div>

        <div className="flex justify-center gap-20 bg-[#e3d1a4] rounded-xl mt-5">
          <div className="w-[30rem] h-[26rem] flex-shrink mt-5 mb-5 hover:scale-105 transition-all duration-500">
            <img className="w-full h-full " src={wonders} alt="" />
          </div>

          <div className="border w-[50%] bg-[#e0d9b5] border-black rounded-xl mt-5 mb-5">
            <h2 className=" text-center mt-7 text-black  text-[1.875rem] font-semibold">
              RAJASTHAN WONDERS
            </h2>
            <p className="text-black max-w-sm flex justify-center text-[1.2rem]  mt-2 text-center ml-40">
              Lorem ipsum dolor sit amet consectetur. Proin neque vitae netus
              vitae volutpat duis.
            </p>
            <div className="flex justify-center text-[1.2rem] items-center w-[24rem] sm:ml-40 mt-5 h-10 gap-4 border border-t-2 border-black rounded-3xl">
              <p className="border-r-2 border-black">
                <strong>2D</strong>Udaipur
              </p>
              <p className="border-r-2 border-black">
                <strong>2D</strong>Udaipur
              </p>
              <p>
                <strong>2D</strong>Udaipur
              </p>
            </div>

            <div className="flex gap-32 -ml-10">
              <p className="text-black ml-56 text-lg mt-5">4 days & 3 nights</p>
              <div className="flex mt-5 gap-2">
                <CiStar size={32} />
                <p className="text-black text-lg  mt-1"> 4.9</p>
              </div>
            </div>

            <button className="py-3 sm:ml-48 mt-5 px-14 bg-[#ff8818] rounded-2xl border border-black text-white text-2xl font-semibold hover:scale-110 transition-all duration-300">
              Request a Callback
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-20 bg-[#e3d1a4] rounded-xl mt-5">
          <div className="w-[30rem] h-[26rem] flex-shrink hover:scale-105 transition-all duration-500 mt-5 mb-5 ">
            <img className="w-full h-full " src={heritage} alt="" />
          </div>

          <div className="border w-[50%] bg-[#e0d9b5] border-black rounded-xl mt-5 mb-5">
            <h2 className=" text-center mt-7 text-black  text-[1.875rem] font-semibold">
              RAJASTHAN WONDERS
            </h2>
            <p className="text-black max-w-sm flex justify-center text-[1.2rem]  mt-2 text-center ml-40">
              Lorem ipsum dolor sit amet consectetur. Proin neque vitae netus
              vitae volutpat duis.
            </p>
            <div className="flex justify-center text-[1.2rem] items-center w-[24rem] sm:ml-40 mt-5 h-10 gap-4 border border-t-2 border-black rounded-3xl">
              <p className="border-r-2 border-black">
                <strong>2D</strong>Udaipur
              </p>
              <p className="border-r-2 border-black">
                <strong>2D</strong>Udaipur
              </p>
              <p>
                <strong>2D</strong>Udaipur
              </p>
            </div>
            <div className="flex gap-32 -ml-10">
              <p className="text-black ml-56 text-lg mt-5">4 days & 3 nights</p>
              <div className="flex mt-5 gap-2">
                <CiStar size={32} />
                <p className="text-black text-lg  mt-1"> 4.9</p>
              </div>
            </div>
            <button className="py-3 sm:ml-48 mt-5 px-14 bg-[#ff8818] rounded-2xl border border-black text-white text-2xl font-semibold hover:scale-110 transition-all duration-300">
              Request a Callback
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-20 bg-[#e3d1a4] rounded-xl mt-5">
          <div className="w-[30rem] h-[26rem] flex-shrink hover:scale-105 transition-all duration-500 mt-5 mb-5">
            <img className="w-full h-full " src={jaisalmer} alt="" />
          </div>

          <div className="border w-[50%] bg-[#e0d9b5] border-black rounded-xl mt-5 mb-5">
            <h2 className=" text-center mt-7 text-black  text-[1.875rem] font-semibold">
              RAJASTHAN WONDERS
            </h2>
            <p className="text-black max-w-sm flex justify-center text-[1.2rem]  mt-2 text-center ml-40">
              Lorem ipsum dolor sit amet consectetur. Proin neque vitae netus
              vitae volutpat duis.
            </p>
            <div className="flex justify-center text-[1.2rem] items-center w-[24rem] sm:ml-40 mt-5 h-10 gap-4 border border-t-2 border-black rounded-3xl">
              <p className="border-r-2 border-black">
                <strong>2D</strong>Udaipur
              </p>
              <p className="border-r-2 border-black">
                <strong>2D</strong>Udaipur
              </p>
              <p>
                <strong>2D</strong>Udaipur
              </p>
            </div>
            <div className="flex gap-32 -ml-10">
              <p className="text-black ml-56 text-lg mt-5">4 days & 3 nights</p>
              <div className="flex mt-5 gap-2">
                <CiStar size={32} />
                <p className="text-black text-lg  mt-1"> 4.9</p>
              </div>
            </div>
            <button className="py-3 sm:ml-48 mt-5 px-14 bg-[#ff8818] rounded-2xl border border-black text-white text-2xl font-semibold hover:scale-110 transition-all duration-300">
              Request a Callback
            </button>
          </div>
        </div>

        <div className="w-[90%] relative mx-auto mt-20">
          <div className="bg-cover overflow-y-hidden bg-image bg-center w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="514"
              height="341"
              viewBox="0 0 514 341"
              fill="none"
            >
              <path
                d="M2 2H329.927L510.658 339H2V2Z"
                fill="black"
                stroke="#9321EC"
                stroke-width="4"
              />
            </svg>
            <div className="absolute -mt-[20rem] ml-10 text-white">
              <p className="text-[1.56rem] max-w-sm font-semibold leading-normal text-white">Bigger Groups ??</p>
              <p className="text-[1.56rem] max-w-xs font-semibold leading-normal text-white">Get a special offer Upto 50% off!</p>
              <p className="text-[1.125rem] font-normal leading-normal max-w-sm mt-3 ">We create unforgettable adventures, customised for your group.</p>
              <button className="py-3  mt-5 px-14 bg-[#ff8818] rounded-2xl border border-black text-white text-2xl font-semibold hover:scale-110 transition-all duration-300">
              Request a Callback
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconicDestination;
