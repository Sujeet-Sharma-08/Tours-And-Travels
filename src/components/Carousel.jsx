import Rectangle27 from "../assets/Rectangle 27.png";
import Rectangle28 from "../assets/Rectangle 28.png";
import Rectangle29 from "../assets/Rectangle 29.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="w-full relative -mt-32 mb-5">
      <div className="flex gap-2 ml-32 mb-10">
        <div className="w-[10px] h-[10px] lg:h-[14px] lg:w-[14px] mt-6 bg-[#9321ec]"></div>
        <div className="flex flex-col">
          <h2 className="text-black font-bold leading-normal text-[2.5rem]">
            Travelers Image Gallary
          </h2>
        </div>
      </div>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        freeMode={true}
        loop={true} // Enable free mode for drag-and-slide functionality
        grabCursor={true}
        slidesPerView={2}
        spaceBetween={20}
        style={{ "--swiper-navigation-color": "#fff" }}
        className="mySwiper w-full h-[30.75rem] rounded-none "
      >
        <SwiperSlide className="swiper-slide">
          <img src={Rectangle27} alt="" className="w-full h-full bg-cover" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={Rectangle28} alt="" className="w-full h-full bg-cover" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={Rectangle29} alt="" className="w-full h-full bg-cover" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={Rectangle29} alt="" className="w-full h-full bg-cover" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={Rectangle29} alt="" className="w-full h-full bg-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
