import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FiX } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { BiHomeAlt } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const letToggle = () => {
    setToggle(!toggle);
    console.log("toggle");
  };

  return (
    <nav className="py-5 px-7 md:px-32 md:py-3  shadow-lg bg-[#1b1a2ea9]  text-white">
      <div className="flex flex-row justify-between  flex-wrap  ">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-12" />
          </Link>
        </div>
        <div className="md:hidden" onClick={letToggle}>
          {toggle ? (
            <FiX size={40} color="#dd90fa" />
          ) : (
            <HiBars3BottomRight size={40} color="#dd90fa" />
          )}
        </div>
        <div
          className={
            toggle
              ? "flex flex-col gap-6 w-full"
              : "hidden  md:flex md:gap-20 text-xl font-semibold"
          }
        >
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#dd90fa]  "
          >
            {" "}
            <BiHomeAlt /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-1  hover:text-[#dd90fa]"
          >
            {" "}
            <RxPerson />
            About
          </Link>
          <Link
            to="/project"
            className="flex items-center gap-1  hover:text-[#dd90fa]"
          >
            <AiOutlineFundProjectionScreen />
            Project
          </Link>
          <Link
            to="/resume"
            className="flex items-center gap-1  hover:text-[#dd90fa] "
          >
            {" "}
            <GrDocumentText /> Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
