import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import curve from "../assets/curve.png"
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send("service_owyssud","template_hdz6tvr", formData, 'DmKOzQGfq-1N2cpCI')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitted(true);
        setIsSending(false);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Error sending email:', error);
        setIsSending(false);
      });
  };

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

  return (
    <footer className='w-full flex justify-center flex-col items-center pb-5'>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className='flex justify-center flex-col w-full relative z-[4] mb-9'
      >
        <div>
          <h1 className='text-white text-5xl text-center'>Get in touch</h1>
          <div className='text-center flex justify-center'>
            <motion.img
              whileInView={{ width: 100, opacity: 1 }}
              initial={{ width: 90, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={curve}
              alt=""
              className='w-[100px] h-[10px] mt-1'
            />
          </div>
        </div>
      </motion.div>

      {isSubmitted ? (
        <div className='text-center text-white text-3xl mb-4'>
          👍 Thank you for getting in touch with me!
        </div>
      ) : (
        <form className="w-full max-w-lg p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 ${isSending ? 'cursor-not-allowed' : ''}`}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}

      <ul className="flex gap-4 flex-wrap mt-2 text-white">
        {navItems.map((item) => (
          <motion.li key={item.id}>
            <a href={item.dest} target='_blank' rel='noopener noreferrer'>
              {item.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </footer>
  );
};

export default Contact
