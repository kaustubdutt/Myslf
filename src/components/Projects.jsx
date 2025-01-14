import React, { useRef } from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import '../styles/globals.css'; // Import the custom CSS file
import { DiGithubFull } from "react-icons/di";

const Projects = () => {
  const swiperRef = useRef(null);

  return (
    <div className="border-b border-neutral-600 pb-4" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="relative max-w-[90%] lg:max-w-[80%] mx-auto">
        <Swiper
          ref={swiperRef}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          autoplay={{
            delay: 3000, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after interactions
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          loop={true} // Enable infinite scrolling
        >
          {PROJECTS.map((project, index) => (
            <SwiperSlide key={index} className="p-4 relative">
              <a href={project.link} target="_blank" rel="noopener noreferrer"> {/* Add anchor tag here */}
                <div className="flex flex-col gap-4 mb-20 group relative text-white rounded-xl px-6 py-8 h-[500px] lg:h-[400px] sm:h-[500px] overflow-hidden cursor-pointer shadow-custom hover:shadow-custom-hover">
                  <div className={project.backgroundClass}></div>
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-30 rounded-xl" />
                  <div className="relative flex flex-col gap-3 z-10">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <DiGithubFull className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-pink-500 duration-100" />
                </div>
              </a> {/* Close anchor tag */}
            </SwiperSlide>
          ))}
        </Swiper>
        <a href="#" className="absolute bottom-5 left-5 bg-transparent rounded-full p-2 shadow-md z-20 flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            swiperRef.current.swiper.slidePrev();
          }}
        >
          <HiOutlineArrowSmallLeft className="w-[35px] h-[35px] text-white" />
        </a>
        <a href="#" className="absolute bottom-5 right-5 bg-transparent rounded-full p-2 shadow-md z-20 flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            swiperRef.current.swiper.slideNext();
          }}
        >
          <HiOutlineArrowSmallRight className="w-[35px] h-[35px] text-white" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
