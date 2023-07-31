import React, { useState } from 'react'
import logo from '../assets/logo.png';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';
import {FaGripLinesVertical} from 'react-icons/fa';
import {AiFillCaretDown} from 'react-icons/ai';



const Navbar = () => {

    const [toggle,setToggle] = useState(false)
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);

    const handleClick = () => {
        setToggle((prevToggle) => !prevToggle);
      };

      const handleMobileClick = () => {
        setShowMobileDropdown((prevShow) => !prevShow);
      };
    
    

  return (
    <div className='w-full h-[80px] bg-[#DEB841] border-b'>
    <div className='md:max-w-[1400px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-25 px-4'>

<div>
    <img src={logo} 
    className="h-[60px] w-auto"
    
    />
    </div>
                
                <div className='hidden md:flex items-center '>
                    <ul className='flex space-x-5 text-[#37323E]  text-md font-bold'>
                        <li className=' hover:bg-[#A8A5B1] cursor-pointer rounded-md px-5 py-1 '>HOME </li>
                        <FaGripLinesVertical size={30}/>
                        <div className='relative'>
              <div
                className='flex  hover:bg-[#A8A5B1] cursor-pointer rounded-md px-5 py-1 '
                onMouseEnter={handleClick} // Set the dropdown menu to open on hover
              >
                <li className=''>SERVICES</li>
                <AiFillCaretDown size={23} className='ml-5' />
              </div>
              {toggle && (
                <ul className='absolute top-7 right-0 mt-2 py-2 w-48 rounded-md  '>
                  <li className='px-8 py-3  bg-[#37323E] text-white font-bold   hover:bg-[#A8A5B1] cursor-pointer  '>
                    Social Media Manager
                  </li>
                  <li className='px-8 py-3  bg-[#37323E] text-white font-bold  hover:bg-[#A8A5B1] cursor-pointer'>
                    Website Development
                  </li>
                </ul>
              )}
            </div>
                        <FaGripLinesVertical size={30}/>
                        <li className=' hover:bg-[#A8A5B1]  cursor-pointer rounded-md px-5 py-1'>BLOG</li>
                        
                    </ul>
                </div>
    
    
                <div className='hidden md:flex'>
                    
                    <button className='px-8 py-3 rounded-md bg-[#37323E] text-white font-bold  hover:bg-[#A8A5B1] '>Browse Services</button>
                </div>

                {/* responsiveness */}
                <div className='md:hidden'  onClick={handleClick}>
                        <img src={toggle?Close:Hamburger} />
                </div>
    




        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
        
                <ul>
                        <li className='p-4  text-[#37323E]  text-md font-bold hover:bg-gray-100'>Home</li>
                        {/* Drop down Menu */}
                        <li className='p-4  text-[#37323E]  text-md font-bold hover:bg-gray-100'>
            <div
              className='flex cursor-pointer'
              onClick={handleMobileClick}
            >
              Services
              <AiFillCaretDown
                 size={20} 
                className={`ml-3 mt-1  ${showMobileDropdown ? 'transform rotate-180' : ''}`}
              />
            </div>
            {showMobileDropdown && (
              <ul className='text-[#37323E] pl-8 py-2'>
                <li className='py-2  hover:bg-[#37323E]  cursor-pointer hover:text-white hover:flex hover:rounded-md hover:px-2'>Social Media Manager</li>

                <li className='py-2  hover:bg-[#37323E]  cursor-pointer hover:text-white hover:flex hover:rounded-md hover:px-2'>Website Development</li>
              </ul>
            )}
          </li>


                        
                        <li className='p-4  text-[#37323E]  text-md font-bold hover:bg-gray-100'>Blog</li>
                        
                        <div className='flex flex-col my-4 gap-4'>
                            
                            <button className='px-8 py-5 rounded-md bg-[#37323E] text-white font-bold  hover:bg-[#A8A5B1]'>Browse Services</button>
                        </div>
                        
                </ul>
                
            </div>
            
        </div>

  )
}

export default Navbar