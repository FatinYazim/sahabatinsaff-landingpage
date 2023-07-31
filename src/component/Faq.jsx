import React, { useState } from 'react';
import { AiOutlineDash } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import Slide from 'react-reveal/Slide';


const Faq = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClick1 = () => {
    setShow1(!show1);
  };

  const handleClick2 = () => {
    setShow2(!show2);
  };

  const handleClick3 = () => {
    setShow3(!show3);
  };



  return (
    <div className='w-full bg-white py-10'>
      <div className='md:max-w-[1000px] max-w-[600px] mx-auto'>
        <div className='bg-white   py-4 px-4 md:px-0 flex flex-col justify-center items-center h-full'>
          <AiOutlineDash size={50} />
          <h1 className='mt-1 md:text-3xl text-2xl text-black text-center font-bold'> FAQ</h1>
          <AiOutlineDash size={50} />

          <Slide right>
          <div className='p-3 w-[70%] bg-[#fcd34d] text-black border rounded-xl shadow-md'>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold'>How to subscribe</h1>
              <div onClick={handleClick}>
                {show ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
              </div>
            </div>
            <p
              className='overflow-hidden mt-0 ml-2'
              style={{
                maxHeight: show ? '1000px' : '0',
                marginTop: show ? '10px' : '0', // Apply margin-top only when content is shown
                transition: 'max-height 0.2s ease-out', // Optional: Add a smooth transition effect
              }}
            >
              You can start your journey by contacting Sahabat Insaff through WhatsApp or call to get a quotation.
            </p>
          </div>
</Slide>
<Slide left>
          <div className='p-3 w-[70%] bg-[#fcd34d] text-black border rounded-xl shadow-md'>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold'>Do I need to create a new Facebook page</h1>
              <div onClick={handleClick1}>
                {show1 ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
              </div>
            </div>
            <p
              className='overflow-hidden mt-0 ml-2'
              style={{
                maxHeight: show1 ? '1000px' : '0',
                marginTop: show1 ? '10px' : '0', // Apply margin-top only when content is shown
                transition: 'max-height 0.2s ease-out', // Optional: Add a smooth transition effect
              }}
            >
              No, you can use your current page for us to collaborate and increase engagement and to get leads.
            </p>
          </div>
          </Slide>
          <Slide right>
          <div className='p-3 w-[70%] bg-[#fcd34d] text-black border rounded-xl shadow-md'>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold'>Berapa lama untuk siapkan satu website?</h1>
              <div onClick={handleClick2}>
                {show2 ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
              </div>
            </div>
            <p
              className='overflow-hidden mt-0 ml-2'
              style={{
                maxHeight: show2 ? '1000px' : '0',
                marginTop: show2 ? '10px' : '0', // Apply margin-top only when content is shown
                transition: 'max-height 0.2s ease-out', // Optional: Add a smooth transition effect
              }}
            >
             7 hingga 14 hari. Bergantung kepada jenis website. Sekiranya anda ambik sekali pakej Google ads, saya akan jaga selama sebulan dan tambah baik kandungan serta pengalaman pengguna.
            </p>
          </div>
          </Slide>
          <Slide left>
          <div className='p-3 w-[70%] bg-[#fcd34d] text-black border rounded-xl shadow-md'>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold'>Pakej mahal sangat, boleh bayar instalment tak?</h1>
              <div onClick={handleClick3}>
                {show3 ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
              </div>
            </div>
            <p
              className='overflow-hidden mt-0 ml-2'
              style={{
                maxHeight: show3 ? '1000px' : '0',
                marginTop: show3 ? '10px' : '0', // Apply margin-top only when content is shown
                transition: 'max-height 0.2s ease-out', // Optional: Add a smooth transition effect
              }}
            >
            Ya boleh. Bergantung kepada pakej mana yang anda ambil dengan saya. Takda masalah nak bayar secara berkala.
            </p>
          </div>
          </Slide>


        </div>
      </div>
    </div>
  );
};

export default Faq;

