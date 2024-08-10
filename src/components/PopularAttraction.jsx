import React from "react";
import Rectangle34 from "../assets/Rectangle 34.png";
import Rectangle37 from "../assets/Rectangle 37.png";
import Rectangle40 from "../assets/Rectangle 40.png";
import Rectangle41 from "../assets/Rectangle 41.png";
import arrow from "../assets/Arrow 4.svg";

const PopularAttraction = () => {
  return (
    <div className="bg-[#e0d9b5] relative h-full py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-2 ml-10 mb-10">
          <div className=" w-[10px] h-[10px] lg:h-[14px] lg:w-[14px] mt-6 bg-[#9321ec]"></div>
          <h2 className="text-black font-bold leading-normal text-[2.5rem]">
            Popular Rajasthan Attraction
          </h2>
        </div>

        <div className="grid relative grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={Rectangle34} alt="" />

            <div className="flex -mt-32 ml-8  flex-col gap-2  ">
              <p className="text-[1.25rem] underline underline-offset-1 text-white font-semibold">
                AMER FORT
              </p>
              <div className="flex gap-5">
                <p className="text-sm text-white font-normal ">
                  {" "}
                  Amer Fort is a stunning palace in India. It is located on the
                  top of a hill near Jaipur. The fort has a grand structure with
                  twisting passages
                </p>
                <div className="w-[6rem] h-[6rem] mt-5 mr-5">
                  <img className="w-full" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={Rectangle37} alt="" />

            <div className="flex -mt-32 ml-8  flex-col gap-2  ">
              <p className="text-[1.25rem] underline underline-offset-1 text-white font-semibold">
              HAWA MAHAL
              </p>
              <div className="flex gap-5">
                <p className="text-sm text-white font-normal ">
                  {" "}
                  Amer Fort is a stunning palace in India. It is located on the
                  top of a hill near Jaipur. The fort has a grand structure with
                  twisting passages
                </p>
                <div className="w-[6rem] h-[6rem] mt-5 mr-5">
                  <img className="w-full" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={Rectangle40} alt="" />

            <div className="flex -mt-32 ml-8  flex-col gap-2  ">
              <p className="text-[1.25rem] underline underline-offset-1 text-white font-semibold">
              CITY PALACE
              </p>
              <div className="flex gap-5">
                <p className="text-sm text-white font-normal ">
                  {" "}
                  Amer Fort is a stunning palace in India. It is located on the
                  top of a hill near Jaipur. The fort has a grand structure with
                  twisting passages
                </p>
                <div className="w-[6rem] h-[6rem] mt-5 mr-5">
                  <img className="w-full" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={Rectangle41} alt="" />

            <div className="flex -mt-32 ml-8  flex-col gap-2  ">
              <p className="text-[1.25rem] underline underline-offset-1 text-white font-semibold">
              JAISALMER FORT
              </p>
              <div className="flex gap-5">
                <p className="text-sm text-white font-normal ">
                  {" "}
                  Amer Fort is a stunning palace in India. It is located on the
                  top of a hill near Jaipur. The fort has a grand structure with
                  twisting passages
                </p>
                <div className="w-[6rem] h-[6rem] mt-5 mr-5">
                  <img className="w-full" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" visit w-full sm:w-[21rem] text-center sm:ml-[32rem] mt-5 hover:scale-110 transition-all duration-300">
          {" "}
          <button className="text-[1.5rem] rounded-xl font-bold text-black py-3 px-10 ">
            See All Places To Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularAttraction;
