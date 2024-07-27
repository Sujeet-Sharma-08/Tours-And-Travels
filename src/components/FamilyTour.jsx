import React from "react";
import Regal from "../assets/Rectangle 12.png";
import Ranthmobore from "../assets/Rectangle 13.png";
import camel from "../assets/Rectangle 14.png";
import { CiStar } from "react-icons/ci";

const FamilyTour = () => {
  return (
    <div className="bg-[#e0d9b5] relative h-full py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-2 ml-10">
          <div className=" w-[10px] h-[10px] lg:h-[14px] lg:w-[14px] mt-6 bg-[#9321ec]"></div>
          <div>
            <h2 className="text-black font-bold leading-normal text-[2.5rem] ">
              Family Tour
            </h2>
            <p className="text-black  text-[1.65rem] font-normal leading-normal mb-5">
              Discover the Essence Of Rajasthan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <img src={Regal} alt="" />

            <div className="flex gap-10 mt-1">
              <p className="text-[1.2rem] text-black font-normal">4 days & 3 nights</p>
              <div className="flex ml-40 gap-2">
                <CiStar size={32} />
                <p className="text-[1.2rem] text-black font-normal "> 4.9</p>
              </div>
            </div>

            <p className="text-[1.347rem] text-black font-semibold leading-normal mt-2">Rajasthan Regal Retreat | Trails Of Forts & Lakes</p>
            <p className="py-2 px-4  border-t-2 border-gray-600 rounded-t-xl mt-2">
              <strong>6D </strong>Udaipur
            </p>

            <button className="py-3 w-[10rem] lg:w-[27rem] mt-5 px-14 bg-[#ff8818] rounded-2xl border border-black text-white text-2xl font-semibold hover:scale-110 transition-all duration-300">
              Request a Callback
            </button>
          </div>

          <div>
              <img src={Ranthmobore} alt="" />
            <div className="flex gap-10 mt-1">
              <p className="text-[1.2rem] text-black font-normal">4 days & 3 nights</p>
              <div className="flex ml-40 gap-2">
                <CiStar size={32} />
                <p className="text-black text-lg  mt-1"> 4.7</p>
              </div>
            </div>

            <p className="text-[1.347rem] text-black font-semibold leading-normal mt-2">Explore Jaipur & Ranthambore | From Fortresses To Wildlife</p>
            <p className="py-2 px-4  border-t-2 border-gray-600 rounded-t-xl mt-2">
              <strong>6D </strong>Udaipur
            </p>

            <button className="py-3 w-[10rem] lg:w-[27rem]  mt-5 px-14 bg-[#ff8818] rounded-2xl border border-black text-white text-2xl font-semibold hover:scale-110 transition-all duration-300">
              Request a Callback
            </button>
          </div>

          <div>
            <div>
              <img src={camel} alt="" />
            </div>

            <div className="flex gap-10 mt-1">
              <p className="text-[1.2rem] text-black font-normal">4 days & 3 nights</p>
              <div className="flex ml-40 gap-2">
                <CiStar size={32} />
                <p className="text-black text-lg  mt-1"> 4.3</p>
              </div>
            </div>

            <p className="text-[1.347rem] text-black font-semibold leading-normal mt-2">Rajasthan Regal Retreat | Trails Of Forts & Lakes</p>
            <p className="py-2 px-4  border-t-2 border-gray-600 rounded-t-xl mt-2">
              <strong>6D </strong>Udaipur
            </p>

            <button className="py-3 w-[10rem] lg:w-[27rem] mt-5 px-14 bg-[#ff8818] rounded-2xl border border-black text-white text-2xl font-semibold hover:scale-110 transition-all duration-300">
              Request a Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTour;
