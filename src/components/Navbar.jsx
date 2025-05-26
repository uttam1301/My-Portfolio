import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},
    {id: "education", label: "Education"},
    {id: "contact", label: "Contact"},
  ];

  useEffect(()=>{
    const handleScroll = () =>{
      setIsScrolled(window.scrolly > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (id) =>{
    setActiveSection(id);
    setIsOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vm] md:px-[7vm] lg:px-[20vm] ${
      isScrolled ? "bg-black bg-opacity-50 shadow-md" : "bg-black"
    }`}>
      <div className='text-white py-5 flex justify-between items-center ml-10'>
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-purple-500'>&lt;</span>
          <span className='text-white'> Uttam Saha </span>
          <span className='text-purple-500'>/&gt;</span>
        </div>

        <ul className='hidden md:flex space-x-8 text-gray-200'>
          {menuItems.map((item)=>(
            <li key={item.id} className={`cursor-pointer hover:text-purple-500 ${
              activeSection == item.id ? "text-purple-500" : ""}`
              }>
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex space-x-4 mr-10'>
          <a
            href="https://github.com/uttam1301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-500" 
          >
            <FaGithub size={24}/>
          </a>
          <a
            href="https://www.linkedin.com/in/uttam-saha-32aaa81b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-500" 
          >
            <FaLinkedin size={24}/>
          </a>
        </div>

        <div className="md:hidden mr-10">
          { isOpen? (
            <FiX className="text-3xl text-gray-200 cursor-pointer hover:text-purple-500" 
            onClick={() => setIsOpen(false)} />
            ) : (
            <FiMenu className="text-3xl text-gray-200 cursor-pointer hover:text-purple-500" 
            onClick={() => setIsOpen(true)} />
            )
          }
        </div>

      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2/5 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center ml-5 space-y-4 py-4 text-gray-200">
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-purple-500" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4'>
              <a
                href="https://github.com/uttam1301"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-500" 
              >
                <FaGithub size={24}/>
              </a>
              <a
                href="https://www.linkedin.com/in/uttam-saha-32aaa81b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-500" 
              >
                <FaLinkedin size={24}/>
              </a>
            </div>
          </ul>
        </div>
      )}

    </nav> 
  )
}

export default Navbar
