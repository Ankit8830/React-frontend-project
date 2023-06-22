import React, {useState} from 'react';
import { Link } from 'react-scroll';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Facebook from '../assets/fb.png'
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'

const Navbar = () => {
    const[nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div className=' px-4 lg:px-0 flex lg:flex justify-between items-center max-w-[1240] mx-auto py-4 text-black'>
       <ul className=' lg:flex md:flex hidden text-sm w-full hover:text'> 
            <li className='p-2 lg:p-4 '><Link className='nav-link' to="TwoCol" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li className='p-2 lg:p-4'><Link className='nav-link' to="SecondCol" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></li>
            <li className='p-2 lg:p-4'><Link className='nav-link' to="Feedback" spy={true} smooth={true} offset={50} duration={500}>Services</Link></li>
            <li className='p-2 lg:p-4'><Link className='nav-link' to="footer" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link></li>
        </ul>
        <h1 className=' w-full text-2xl font-bold lg:text-left text-[#000300] font-serif cursor-pointer'>Dream Agency</h1>
        <div>
        <ul className='hidden md:flex'>
            <li className='px-2 cursor-pointer'><img src={Facebook} alt='Facebook'/></li>
            <li className='pr-2 cursor-pointer'><img src={Linkedin} alt='Linkedin'/></li>
            <li className='pr-4 cursor-pointer'><img src={Instagram} alt='Instagram'/></li>
        </ul>
        </div>
        <div onClick={handleNav} className='block ease-in-out duration-500 md:hidden '>
            {nav ? <AiOutlineClose size={20} className='text-white  hidden'/> : <AiOutlineMenu size={20} className='cursor-pointer'/>}
        </div>
        <div className={nav ?'fixed left-0 top-0 w-[100%] md:hidden h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className='flex justify-between p-4'>
        <h1 className=' text-2xl font-bold text-[#fff] font-serif'>Dream Agency</h1>
        <div onClick={handleNav} className='block  md:hidden'>
            {nav ? <AiOutlineClose className='text-white content-center cursor-pointer ' size={30}/> : <AiOutlineMenu size={20} />}
        </div>
        </div>
            <ul className='pt-2 text-white'>
                <li className='p-4 border-b border-grey-600'>Home</li>
                <li className='p-4 border-b border-grey-600'>About Us</li>
                <li className='p-4 border-b border-grey-600'>Services</li>
                <li className='p-4'>Contact Us</li>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar
