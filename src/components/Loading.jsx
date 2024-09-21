import React from 'react'
import {motion} from "framer-motion"
const Loading = () => {

  const anim = ()=>({
    initial: {
        y:-10
    },
    animate:{
        y: [10,-10],
        transition:{
         duration: 2,
         ease: "linear",
         repeatType: "reverse",
         repeat: Infinity
    }
}
  })

  return (
    <div className='min-h-[100vh] w-full bg-slate-900 flex justify-center items-center'>
        <i class='bx bx-loader bx-spin text-6xl' style={{color:"#ffffff"}} ></i>

    </div>
  )
}

export default Loading