import React from 'react';
import { AiOutlineDash } from 'react-icons/ai';
import pic1 from '../assets/coaching.jpg';
import social from '../assets/social.jpg';
import advertise from '../assets/advertise.jpg';
import web from '../assets/web.jpg';
import { RxBorderDotted } from 'react-icons/rx';
import Slide from 'react-reveal/Slide';

const Projects = () => {
  return (
    <div className='w-full bg-white  py-0'>
      <Slide left>
        <div className='bg-[#fcd34d] md:max-w-[1000px] max-w-[600px] border rounded-lg shadow-lg  py-4 px-4 md:px-0 flex flex-col justify-center items-center mx-auto h-full'>
          <h1 className='mt-5 text-3xl text-black text-center font-bold'>Sahabat Insaff Ventures Services</h1>
          <AiOutlineDash size={50} />
          <p>Browse through all Sahabat Insaff Services and Get Connected to start your Digital Marketing Journey</p>

          <RxBorderDotted size={50} className='mt-10' />
          <Slide right>
            <div className='mt-1 md:grid md:grid-cols-2 grid-cols-1 px-10 py-5 gap-5 m-auto'>
              <img src={pic1} className='border rounded-xl shadow-sm' />
              <div className='md:mt-0'>
                <h1 className='font-bold text-xl bg-[#37323E] text-white px-4 py-2'>Personal/Group Coaching</h1>
                <p className='mt-3'>
                  Want to learn on how to optimize the social media and google space for marketing specifically on
                  Social Media Advertising?{' '}
                </p>
                <p className='mt-3'>You’ve come to the right place! Things that you will learn:-</p>
                <ul className='mt-2'>
                  <li className='ml-5 '>1. Engagement Ads</li>
                  <li className='ml-5'>2. Retargeting Ads</li>
                  <li className='ml-5'>3. How to optimizing the budget to get more result</li>
                </ul>
                <p className='mt-3'>
                  Pricing start from <span className='font-bold'>RM350</span>.
                </p>

                <div className='md:justify-start flex justify-center'>
                  <button className='md:mt-2 mt-5 px-5 py-1 rounded-md bg-[#37323E] text-white font-semibold hover:bg-[#A8A5B1]'>
                    CLICK HERE
                  </button>
                </div>
              </div>
            </div>
          </Slide>
          <RxBorderDotted size={50} />

          <Slide right>
            <div className='mt-1 md:grid md:grid-cols-2 grid-cols-1 px-10 py-5 gap-5 m-auto'>
            <div className='flex  justify-center items-center'>
      <img  src={social}  className="border rounded-xl shadow-sm  " />
      </div>
              <div className='md:mt-0'>
                <h1 className='font-bold text-xl bg-[#37323E] text-white px-4 py-2'>Social Media Manager </h1>
                <p className='mt-3'>What you will get from this packages SMM is; </p>
               
                <ul className='mt-2'>
    <li className='ml-5 ' >1. 30 days social media manager.</li>
    <li  className='ml-5'>2. 10 testimonial post.</li>
    <li  className='ml-5'>3. 10 product knowledge post.</li>
    <li  className='ml-5'>4. 10 product promotions.</li>
    <li  className='ml-5'>5. We will provide you with feedback frame and payment..</li>
    <li  className='ml-5'>6. Ads specialist who experience for more than 5 years will monitor your ads to its full potential..</li>
    <li  className='ml-5'>7. Weekly Report.</li>
</ul>
<p className='mt-3'>Pricing starts from <span className='font-bold'> RM897/month </span></p>

                <div className='md:justify-start flex justify-center'>
                  <button className='md:mt-2 mt-5 px-5 py-1 rounded-md bg-[#37323E] text-white font-semibold hover:bg-[#A8A5B1]'>
                    CLICK HERE
                  </button>
                </div>
              </div>
            </div>
          </Slide>
          <RxBorderDotted size={50} />

          <Slide right>
            <div className='mt-1 md:grid md:grid-cols-2 grid-cols-1 px-10 py-5 gap-5 m-auto'>
            <img  src={advertise }  className="border rounded-xl shadow-sm  " />
              <div className='md:mt-0'>
                <h1 className='font-bold text-xl bg-[#37323E] text-white px-4 py-2'>Advertisement  </h1>
                <p className='mt-3'>Team Ads Specialist from Sahabat Insaff will monitor your ads to blast it to it full potential. </p>
    <p className='mt-3'> Focus on Facebook & Instagram Ads.</p>
    
<ul className='mt-2'>
    <li className='ml-5 ' >1. Create Facebook page (If needed)</li>
    <li  className='ml-5'>2. Create Ad account</li>
    <li  className='ml-5'>3. Unlimited Ads Setup </li>
</ul>
<p className='mt-3'>Pricing start from <span className='font-bold'> RM500</span>.</p>

                <div className='md:justify-start flex justify-center'>
                  <button className='md:mt-2 mt-5 px-5 py-1 rounded-md bg-[#37323E] text-white font-semibold hover:bg-[#A8A5B1]'>
                    CLICK HERE
                  </button>
                </div>
              </div>
            </div>
          </Slide>
          <RxBorderDotted size={50} />

          <Slide right>
            <div className='mt-1 md:grid md:grid-cols-2 grid-cols-1 px-10 py-5 gap-5 m-auto'>
            <div className='flex  justify-center items-center'>
      <img  src={web}  className="border rounded-xl shadow-sm  " />
      </div>
              <div className='md:mt-0'>
                <h1 className='font-bold text-xl bg-[#37323E] text-white px-4 py-2'> Website Development </h1>
                <p className='mt-3'>Build your own website with Sahabat Insaff and let it increase the trust of your potential customers </p>
    <p className='mt-3'>What can we build for you;</p>
<ul className='mt-2'>
    <li className='ml-5 ' >1. Landing Page/Sale page</li>
    <li  className='ml-5'>2. Corporate Website</li>
    <li  className='ml-5'>3. E-commerce Website</li>
    <li  className='ml-5'>4. LMS Website</li>
</ul>
<p className='mt-3'>Pricing start from <span className='font-bold'> RM500</span>.</p>

                <div className='md:justify-start flex justify-center'>
                  <button className='md:mt-2 mt-5 px-5 py-1 rounded-md bg-[#37323E] text-white font-semibold hover:bg-[#A8A5B1]'>
                    CLICK HERE
                  </button>
                </div>
              </div>
            </div>
          </Slide>
          <RxBorderDotted size={50} />
          
        </div>
      </Slide>
    </div>
  );
};

export default Projects;
