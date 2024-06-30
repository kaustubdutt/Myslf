import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiFlask, SiSpringboot } from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoFirebase } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { motion } from "framer-motion";
import { Tooltip } from "react-tippy";
import 'react-tippy/dist/tippy.css';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const tooltips = [
    { title: "ReactJS", className: "text-cyan-400", duration: 2.5, icon: <RiReactjsLine className="text-7xl text-cyan-400" /> },
    { title: "Flask", className: "text-white", duration: 2, icon: <SiFlask className="text-7xl text-white-700" /> },
    { title: "MongoDB", className: "text-green-500", duration: 5, icon: <SiMongodb className="text-7xl text-green-500" /> },
    { title: "Spring Boot", className: "text-mint", duration: 3, icon: <SiSpringboot className="text-7xl text-mint" /> },
    { title: "Node.js", className: "text-green-500", duration: 6, icon: <FaNodeJs className="text-7xl text-green-500" /> },
    { title: "PostgreSQL", className: "text-sky-700", duration: 4, icon: <BiLogoPostgresql className="text-7xl text-sky-700" /> },
    { title: "Firebase", className: "text-light-orange", duration: 5, icon: <BiLogoFirebase className="text-7xl text-light_orange" /> },
    { title: "Django", className: "text-mint", duration: 4.3, icon: <DiDjango className="text-7xl text-mint" /> },
    { title: "AWS", className: "text-orange-500", duration: 3, icon: <FaAws className="text-7xl text-orange-500" /> },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {tooltips.map((tooltip, index) => (
          <Tooltip
            key={index}
            title={tooltip.title}
            position="top"
            trigger="mouseenter"
            arrow={true}
            className={tooltip.className}
          >
            <motion.div
              variants={iconVariants(tooltip.duration)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              {tooltip.icon}
            </motion.div>
          </Tooltip>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
