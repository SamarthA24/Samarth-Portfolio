import React from 'react'
import { FaPython, FaJava, FaReact, FaDocker, FaGit } from 'react-icons/fa';
import { SiKotlin, SiC, SiMysql, SiPostgresql, SiOracle, SiR, SiPowerbi, SiStreamlit, SiDjango } from 'react-icons/si';
import { motion } from "framer-motion"
import curve from "../assets/curve.png"

const Technology = () => {
  const iconVar = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeatType: 'reverse',
        repeat: Infinity,
      },
    },
  });

  return (
    <section className='py-[60px] mt-[40px] mb-[30px]'>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className='flex justify-center flex-col w-full relative z-[4] mb-9'
      >
        <div>
          <h1 className='text-white text-5xl text-center'>Technologies</h1>
          <div className='text-center flex justify-center'>
            <motion.img
              whileInView={{ width: 100, opacity: 1 }}
              initial={{ width: 90, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={curve}
              alt=""
              className='h-[10px] mt-1'
            />
          </div>
        </div>
      </motion.div>

      <motion.div className='flex flex-wrap gap-3 justify-center m-3 mt-8'>
        {/* Existing icons */}
        <motion.div
          variants={iconVar(2.5)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <FaPython className='text-5xl text-blue-500' />
        </motion.div>

        <motion.div
          variants={iconVar(3)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <FaJava className='text-5xl text-red-600' />
        </motion.div>

        <motion.div
          variants={iconVar(4)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiKotlin className='text-5xl text-purple-600' />
        </motion.div>

        <motion.div
          variants={iconVar(2)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <FaReact className='text-5xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconVar(5)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiC className='text-5xl text-blue-700' />
        </motion.div>

        <motion.div
          variants={iconVar(6)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiMysql className='text-5xl text-orange-600' />
        </motion.div>

        <motion.div
          variants={iconVar(2.5)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiPostgresql className='text-5xl text-blue-500' />
        </motion.div>

        <motion.div
          variants={iconVar(3)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiOracle className='text-5xl text-red-700' />
        </motion.div>

        <motion.div
          variants={iconVar(4)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <FaDocker className='text-5xl text-blue-600' />
        </motion.div>

        <motion.div
          variants={iconVar(3.5)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiR className='text-5xl text-blue-500' />
        </motion.div>

        {/* New icons */}
        <motion.div
          variants={iconVar(3.5)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiPowerbi className='text-5xl text-yellow-500' />
        </motion.div>

        <motion.div
          variants={iconVar(4)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiStreamlit className='text-5xl text-red-600' />
        </motion.div>

        <motion.div
          variants={iconVar(3.5)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <SiDjango className='text-5xl text-green-600' />
        </motion.div>

        <motion.div
          variants={iconVar(4)}
          animate='animate'
          initial='initial'
          className='border-4 border-neutral-800 rounded-2xl p-4'
        >
          <FaGit className='text-5xl text-orange-600' />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technology
