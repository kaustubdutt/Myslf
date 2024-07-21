import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 text-center tracking-tighter">
      <div className="flex justify-between items-start">
        <nav className="flex items-center justify-between py-6">
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a
              href="https://linkedin.com/in/kaustub-dutt-thirumala-a1486a12b"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaLinkedin className="text-white group-hover:text-sky-500 transition-colors duration-200" />
            </a>
            <a
              href="https://github.com/kaustubdutt"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaGithub className="text-white group-hover:text-gray-400 transition-colors duration-200" />
            </a>
            <a
              href="https://leetcode.com/u/kaustubdutt/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <SiLeetcode className="text-white group-hover:text-orange-400 transition-colors duration-200" />
            </a>
            <a
              href="https://www.instagram.com/kaustub_helioz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaInstagram className="text-white group-hover:text-pink-300 transition-colors duration-200" />
            </a>
          </div>
        </nav>

        <div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
