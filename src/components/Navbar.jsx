import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from "../assets/samarth-logo.png"
import { motion } from "framer-motion"

const Navbar = () => {
  
  const navItems = [
    {
      id: "LinkedIn",
      title: <FaLinkedin className='text-3xl cursor-pointer' />,
      dest: "https://www.linkedin.com/in/samarth-a-aa042423a/"
    },
    {
      id: "GitHub",
      title: <FaGithub className='text-3xl cursor-pointer' />,
      dest: "https://github.com/SamarthA24"
    },
    {
      id: "Gmail",
      title: <FaEnvelope className='text-3xl cursor-pointer' />,
      dest: "mailto:samarthgowda2403@gmail.com"
    }
  ];

  const iconVar = (duration) => ({
    hidden: {
      y: 40,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration
      }
    }
  });

  return (
    <header className='w-full flex justify-between p-5 text-white items-center max_width_screen'>
      <motion.img className="text-5xl font-semibold h-[100px] relative z-[10] object-cover" src={logo} />
      <ul className="flex sm:gap-7 gap-3 items-center">
        {
          navItems.map((item, i) => (
            <motion.li key={item.id} variants={iconVar(i / 2)} initial="hidden" animate="visible">
              <a href={item.dest} target='_blank' rel='noopener noreferrer'> {item.title}</a>
            </motion.li>
          ))
        }
        {/* Download Resume Button */}
        <motion.li variants={iconVar(navItems.length / 2)} initial="hidden" animate="visible">
          <a 
            href="/src/assets/Samarth A - Resume (3).pdf" 
            download 
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg'
          >
            Download Resume
          </a>
        </motion.li>
      </ul>
    </header>
  );
};

export default Navbar