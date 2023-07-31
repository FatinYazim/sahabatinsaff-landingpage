import React from 'react';
import { AiOutlineDash } from 'react-icons/ai';
import review1 from '../assets/review1.jpeg';
import review2 from '../assets/review2.jpeg';
import review3 from '../assets/review3.jpeg';
import review4 from '../assets/review4.jpeg';
import review5 from '../assets/review5.jpeg';
import review6 from '../assets/review6.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Feedback = () => {
  return (
    <div className='w-full bg-white py-0'>
      <div className='bg-[#fcd34d] md:max-w-[1000px] max-w-[600px] border rounded-lg shadow-lg py-4 px-4 md:px-0 flex flex-col justify-center items-center mx-auto h-full'>
        <AiOutlineDash size={50} />
        <h1 className='mt-1 md:text-3xl text-2xl text-black text-center font-bold'>Sahabat Insaff Ventures's Feedbacks</h1>
        <AiOutlineDash size={50} />

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            showArrows={true}
            showIndicators={true}
            autoPlay={true}
            interval={3000}
          >
            <div>
              <img src={review1} alt='Review 1' className='w-[460px] h-[650px]' />
            </div>
            <div>
              <img src={review2} alt='Review 2' className='w-[460px] h-[650px]' />
            </div>
            <div>
              <img src={review3} alt='Review 3' className='w-[460px] h-[650px]' />
            </div>
            <div>
              <img src={review4} alt='Review 4' className='w-[460px] h-[650px]' />
            </div>
            <div>
              <img src={review5} alt='Review 4' className='w-[460px] h-[650px]' />
            </div>
            <div>
              <img src={review6} alt='Review 4' className='w-[460px] h-[650px]' />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
