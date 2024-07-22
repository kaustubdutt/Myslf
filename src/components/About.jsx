import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const SlideContent = ({ item }) => (
  <div className="flex flex-col gap-12 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[450px] overflow-hidden cursor-pointer">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${item.backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
    <div className="relative flex flex-col gap-3">
      <item.icon className="text-white-600 group-hover:text-pink-300 w-[32px] h-[32px]" />
      <h1 className="text-xl lg:text-2xl">{item.title}</h1>
      <p className="lg:text-[18px]">{item.content}</p>
    </div>
    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-pink-300 group-hover:rotate-45 duration-100" />
  </div>
);

const About = () => {
  const getLink = (index) => {
    switch (index) {
      case 1:
        return "https://github.com/kaustubdutt";
      case 2:
        return "https://leetcode.com/u/kaustubdutt/";
      default:
        return null;
    }
  };

  return (
    <div className="border-b border-neutral-600 flex items-center justify-center flex-col h-[600px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        loop={true} // Enable infinite scrolling
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item, index) => {
          const link = getLink(index);
          return (
            <SwiperSlide key={item.title}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <SlideContent item={item} />
                </a>
              ) : (
                <SlideContent item={item} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default About;
