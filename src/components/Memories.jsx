import React from "react";
import Rectangle30 from "../assets/Rectangle 30.png";
import Rectangle32 from "../assets/Rectangle 32.png";
import { RiDoubleQuotesL } from "react-icons/ri";



const Memories = () => {
  return (
    <div className="bg-[#e0d9b5] relative h-full py-10">
      <div className="flex">
        <div className="w-[30%]">
          <img src={Rectangle30} alt="" />
        </div>

        <div className="flex w-[70%] justify-center items-center gap-4  font-semibold h-[20rem]  bg-[#86ced4] border-blue-400 ">
          <div className="bg-black  w-[0.3rem] h-[13rem]"></div>
          <div className="-mt-44 text-4xl"><RiDoubleQuotesL/></div>

          <div className="mt-10">
            <p className="text-[1.25rem] -mt-5 leading-normal text-black max-w-3xl">
              Travel is the only thing you buy that makes you richer. It opens
              your eyes to new experiences, broadens your horizons, and creates
              memories that last a lifetime. Through travel, you discover not
              just new places, but new perspectives and connections. The world
              becomes a book, and those who do not travel read only one page.
              Embrace the journey and let every adventure enrich your soul.
            </p>
            <p className="text-[0.9375rem] font-normal leading-normal mt-3 ml-10">Every journey brings a new story to tell.</p>
          </div>
        </div>
      </div>
      <div className="absolute w-[13rem] h-[10rem] -mt-44 ml-[20rem]">
        <img src={Rectangle32} alt="" />
      </div>
    </div>
  );
};

export default Memories;
