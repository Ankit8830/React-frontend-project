import React from 'react'
import Webdesign from '../assets/webdesign.png'
import Webdev from '../assets/webdevelopment.png'
import Phone from '../assets/phone.png'
import Rocket from '../assets/rocket.png'

const Scrollcourses = () => {
  return (
    <div className=''>
        <div className='bg-[#ecf7ff]'>
           <p className='py-8 lg:py-12 text-center texl-2xl  lg:text-4xl font-bold text-[#331b3b] block'>What We Do<span className='block font-normal'>For Your Business</span></p>
           <div className='flex pr-80 justify-between'>
           
           <div className='flex scroll-pl-40 w-[70%] snap-x snap-mandatory overflow-scroll lg:flex'>
                <div className='lg:flex-shrink-0 w-4/12 snap-always snap-center bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Webdesign} className='w-[20%] p-4 bg-[#ffded4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>website design</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='lg:flex-shrink-0 w-4/12  snap-always snap-center bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Webdev} className='w-[20%] p-4 bg-[#ffeed4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>website development</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='lg:flex-shrink-0 w-4/12 snap-always snap-center bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Phone} className='w-[20%] p-4 bg-[#d4f0ff] rounded-2xl mb-2' alt=''/>
                    <p className='lg:flex-shrink-0 py-2 uppercase font-bold'>mobile app development</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className=' lg:flex-shrink-0 w-4/12 snap-always snap-center bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Rocket} className='w-[20%] p-4 bg-[#ffd4d4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>Marketting</p> 
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className=' lg:flex-shrink-0 w-4/12 snap-always snap-center bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Rocket} className='w-[20%] p-4 bg-[#ffd4d4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>Marketting</p> 
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className=' lg:flex-shrink-0 w-4/12 snap-always snap-center bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Rocket} className='w-[20%] p-4 bg-[#ffd4d4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>Marketting</p> 
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='lg:flex-shrink-0 w-4/12 snap-always snap-center bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src='' alt=''/>
                    <p>website design</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Scrollcourses
