import React from 'react'
import hero from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className='w-full bg-white py-20 '>
    <div className='md:max-w-[1350px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0  items-center'>

    <div className=' ml-5 flex flex-col justify-center items-center text-center gap-3  '>
                  
                  <h1 className='md:leading-[40px] py-2 md:text-4xl text-4xl font-bold '><span className='px-2 bg-[#DEB841] text-black font-bold'>Start</span> Your <br/>  Digital Marketing Journey with <br/> 
                  
               
                  </h1>
                  <h1 className='md:text-4xl text-3xl p-2 bg-[#DEB841] text-black font-bold   animate-reveal'>SAHABAT INSAFF VENTURES </h1> 
                 

                 
                  <div className='flex'>
                  <button className='mt-5 px-8 py-3 rounded-md bg-[#37323E] text-white font-bold  hover:bg-[#A8A5B1] '>Browse Services</button>
                  </div>
                  </div>

                  <div className='flex justify-start  '>
                  <img  src={hero}  className=" h-[500px] md:order-last  order-first " />
                  </div>
        </div>
        </div>
  )
}

export default Hero