import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowRight } from "react-icons/go";
const Card = ({width, start, para, hover="false"}) => {
  
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" &&  "#7443ff",padding:"25px "}} className={`bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}>
    <div className='w-full'>        
      <div className='w-full flex justify-between items-center'>
        <h1>One heading</h1>
        <GoArrowRight/>
      </div>
      <h1 className='text-3xl font-semibold mt-5'>Whatever heading</h1>
    </div>
    <div className='down w-full mt-60'>
        {
            start===true && (
            <>
            <h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
            <button className='rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5'>Contact us</button>
            </>
            )
        }
        {
            para && (
            <p className='text-zinc-500 font-medium text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            )
        }
    </div>
    </motion.div>
  )
}

export default Card
