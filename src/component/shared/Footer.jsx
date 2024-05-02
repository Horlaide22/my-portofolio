import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#dd90fa] px-3 py-4 text-base sm:px-32 sm:py-3 sm:text-xl">
      <div className="flex flex-col gap-2 md:flex md:flex-row items-center justify-between">
        <div>
          <p className=""> Designed and Developed by Sekinat Bashir</p>
        </div>
        <div className="">
          <p className="flex items-center gap-2 ">
            copyright{" "}
            <span>
              <MdCopyright />{" "}
            </span>{" "}
            2024 SB
          </p>
        </div>
        <div className="flex gap-7 ">
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
