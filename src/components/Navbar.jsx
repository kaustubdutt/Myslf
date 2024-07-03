import React from "react";
import logo from "../assets/KaustubDutt_Logo.png";
import { FaLinkedin, FaGithub, FaInstagram, } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/kaustub-dutt-thirumala-a1486a12b" target="_blank" rel="noopener noreferrer" className="group">
          <FaLinkedin className="text-white group-hover:text-sky-500 transition-colors duration-200" />
        </a>
        <a href="https://github.com/kaustubdutt" target="_blank" rel="noopener noreferrer" className="group">
          <FaGithub className="text-white group-hover:text-gray-400 transition-colors duration-200" />
        </a>
        <a href="https://leetcode.com/u/kaustubdutt/" target="_blank" rel="noopener noreferrer" className="group">
          <SiLeetcode className="text-white group-hover:text-orange-400 transition-colors duration-200" />
        </a>
        <a href="https://www.instagram.com/kaustub_helioz/" target="_blank" rel="noopener noreferrer" className="group">
          <FaInstagram className="text-white group-hover:text-pink-300 transition-colors duration-200" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
