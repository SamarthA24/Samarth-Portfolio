import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.jpeg"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import curve from "../assets/curve.png"
import {motion} from "framer-motion"
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = () => {
   
    const PROJECTS = [
        {
          title: "Student Grievance Redressal System",
          des: "https://github.com/SamarthA24/Student-Grievnace-Redressal-Project-MCA.git",
          image: project1,
          description:
            "Developed a web-based Student Grievance System to automate complaint handling and enhance transparency within educational institutions.",
          technologies: ["HTML", "SCSS", "JavaScript", "Python", "Django", "PostgreSQL"],
        },
        {
          title: "AR Based Language Learning App - Fluent AR",
          des: "https://github.com/Pearl-Dsilva/AR_Learning.git",
          image: project2,
          description:
            "Developed 'Fluent AR,' an AR-based language learning app, Utilizing ARCore to create immersive and interactive language learning experiences.",
          technologies: ["MLKit", "Kotlin", "Java", "ARCore", "GLSL", "XML"],
        },
        {
          title: "Dashboard for Hypermarket Sales Analysis Using PowerBI",
          des: "https://github.com/SamarthA24/PowerBiSalesAnalysis.git",
          image: project3,
          description:
            "The Hypermarket Sales Dashboard provides a comprehensive view of sales data across various dimensions such as segments, payment modes, states, shipment modes, and categories.",
          technologies: ["PowerBI"],
        },
        {
          title: "Dashboard for Student Performance Analysis while GENERATIVE AI",
          des:"https://github.com/SamarthA-A/Python-CIAIII.git",
          image: project4,
          description:
            "Developed an interactive dashboard for analyzing student performance using Generative AI in assignment completion. The dashboard provides insights into learning patterns, AI-driven assistance, and student outcomes to enhance academic performance evaluation.",
          technologies: ["Python", "Streamlit"],
        }
      ];


  return (
    <section className='my-10 p-3 py-[70px]'>
        <motion.div whileInView={{y:0, opacity:1}} initial={{y:50, opacity:0}} transition={{duration:1}} className='flex justify-center flex-col w-full relative z-[4]  mb-9'><div> <h1 className='text-white text-5xl text-center'> Projects </h1> <div className='text-center flex justify-center'> <motion.img whileInView={{width:100, opacity:1}} initial={{width:90, opacity:0}} transition={{duration:1, delay:0.5}} src={curve} alt="" className='w-[100px] h-[10px] mt-1' /></div> </div></motion.div>
     
         <div className="relative max_width_screen w-full text-white">
            {PROJECTS.map((item,i)=>(
                <div key={i} className='flex sm:flex-row flex-col my-4 relative z-[10]'>
                  <div className='flex-1 flex sm:justify-center justify-start sm:my-0 my-2 '> <img src={item.image} alt="image" className='sm:w-[40%] w-[90%] rounded-2xl' /> </div>
                  <div className='flex flex-1 flex-col gap-3'>

                     {item.des? (
                      <a href={item.des} target='_blank' className='font-semibold flex gap-1 cursor-pointer'> {item.title} <HiOutlineExternalLink className='text-2xl' /> </a>
                     ): (
<div className='font-semibold'> <p className=' flex gap-1'> {item.title}   </p> </div>
                     )  }

                    
                    <p className="text-neutral-400"> {item.description} </p>
                    <div className='flex gap-2'> {item.technologies.map((tech,i)=>(
                        <div key={i} className='px-2 py-1 text-sm font-medium  text-purple-800 bg-neutral-900'>
                            {tech}
                        </div>

                    ))}  </div>
                  </div>
                </div>
            ))}

            
<div className='absolute z-[0] w-[30%] h-[60%]   bottom-0   -right-0 pink__gradient overflow-hidden'/>
  <div className='absolute z-[0] w-[20%] h-[70%] bottom-1 -right-0   blue__gradient  overflow-hidden'/>
  <div className='absolute z-[0] w-[10%] h-[50%] bottom-2 -right-0 yellow__gradient  overflow-hidden'/>
         </div>

    </section>
  )
}

export default Project