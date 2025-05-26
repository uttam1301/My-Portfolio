import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-white">Find me on</h2>
      

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {icon: <FaLinkedin />, link: "https://www.linkedin.com/in/uttam-saha-32aaa81b8/"},
            {icon: <FaGithub />, link: "https://github.com/uttam1301"},
            {icon: <SiLeetcode />, link: "https://leetcode.com/u/uttam_saha/"},
            {icon: <FaInstagram />, link: "https://www.instagram.com/_prince_uttam_?igsh=MWdlcWNhNHE2NmM0eQ=="},
            {icon: <MdAlternateEmail />, link: "mailto:immruttam@gmail.com"},
          ]
          .map((item, index) =>(
            <a
              key={index}
              href={item.link}
              target='_blank'
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Made with ❤️ by Uttam.
        </p>
      </div>
    </footer>
  )
}

export default Footer
