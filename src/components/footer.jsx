import React from 'react'
import Map from '../assets/mapfooter.png'

const Footer = () => {
  return (
    <div className=' bg-black rounded-tr-[100px]'>
      <div className='max-w[1240px] md:flex md:justify-between p-8 pt-16 md:py-12 md:pl-8 md:pr-20'>
        <div className='text-center md:text-left mb-8 md:w-4/12'>
          <h1 className='text-2xl font-bold text-[#ffffff] font-serif cursor-pointer'>Dream Agency</h1>
          <p className='text-sm font-normal text-[#ffffff] font-sans py-2 md:py-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          <p className='text-sm text-[#ffffff] font-sans uppercase cursor-pointer font-bold'>Get In Touch</p>
          <div className=' pt-4 right-j border-white bg-black w-[300px]'>
           {/* <span>Enter Your Email</span><span>Send</span> */}
           <form action="" className="email-container">
            <input type="email" name="user_email" id="" placeholder='Enter your Email' className=' placeholder:text-xs'/>
            <button className='btn btn-j text-xs'>Send</button>
           </form>
          </div>
        </div>
        <div className=' md:relative text-center md:text-lef'/>
          <img src={Map} alt='map' className='md:w-4/12'/>
          
      </div>
      
    </div>
  )
}


export default Footer
