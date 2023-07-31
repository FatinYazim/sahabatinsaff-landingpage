import React from 'react'
import { AiOutlineDash } from 'react-icons/ai';
import design1 from '../assets/design1.png';
import design2 from '../assets/design2.png';
import design3 from '../assets/design3.png';
import design4 from '../assets/design4.png';
import design5 from '../assets/design5.png';
import design6 from '../assets/design6.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';



const Design = () => {
  return (
    <div className='w-full bg-white   md:py-20 py-0'>
        <Slide right>
         <div className='bg-[#fcd34d] md:max-w-[1000px] max-w-[600px] border rounded-lg shadow-lg  py-4 px-4 md:px-0 flex flex-col justify-center items-center mx-auto h-full'>
         <AiOutlineDash size={50} />
         <h1 className='mt-1 md:text-3xl text-2xl text-black text-center font-bold'> Design by Sahabat Insaff </h1>
         <AiOutlineDash size={50} />
         <div className='mt-1 md:grid md:grid-cols-3 grid-cols-1 px-10 py-5 gap-5 m-auto'>
         {/* <Fade left>   */}
         <img  src={design1}  className="border rounded-xl shadow-sm  md:hover:scale-150 md:hover:z-10" />
         <img  src={design2}  className="border rounded-xl shadow-sm  md:hover:scale-150 md:hover:z-10 " />
         <img  src={design3}  className="border rounded-xl shadow-sm  md:hover:scale-150 md:hover:z-10" />
         <img  src={design4}  className="border rounded-xl shadow-sm  md:hover:scale-150 md:hover:z-10" />
         <img  src={design5}  className="border rounded-xl shadow-sm  md:hover:scale-150 md:hover:z-10" />
         <img  src={design6}  className="border rounded-xl shadow-sm  md:hover:scale-150 md:hover:z-10" />
{/* </Fade> */}
         </div>
         </div>
         </Slide>
         </div>
  )
}

export default Design