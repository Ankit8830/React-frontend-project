import React from 'react'
import desktopimg from '../assets/desktop1.png'
import desktopimg1 from '../assets/desktop2.png'
import desktopimg2 from '../assets/desktop3.png'
import mobileimg from '../assets/mb1.png'
import mobileimg1 from '../assets/mb2.png'
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi'

const Scroller = () => {
  return (
    <div className=' pb-0 md:pb-4 md:flex md:justify-between'>
      <div className=' hidden md:flex md:w-20'>
       
      </div>
    <div className='bg-[#ffded4] rounded-tl-[200px] container'>
      <div className=''>
      <div className=''>
        <div className=' pb-2 md:pb-2 text-center lg:text-left texl-3xl md:text-4xl font-bold text-[#331b3b] block'> Our Recent Work <span className='block font-normal'> By Our <span className='text-bg'>Experts</span></span></div> 
      </div>
        <div className='pt-4 rounded-tl-[30%] lg:flex justify-between'>
       
        <div className='ml-auto text-center lg:text-left lg:w-4/12'><p className=''>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
      </div>
      </div>
      <div className=''>
       
        <div  className='m-4 flex snap-mandatory pb-8 snap-x ml-auto overflow-auto'>
          <div className='ml-4 md:ml-8'>
          <div className='snap-center w-[290px] bg-white p-2 border shadow-lg rounded-lg'>
            <div className='flex justify-between'>
            <img src={desktopimg} className='w-[200px] h-[160px] hover:scale-105 duration-300 cursor-pointer border shadow-lg rounded-xl' alt="" />
             <img src={mobileimg} alt="" className='border shadow-lg rounded-xl hover:scale-105 duration-300 cursor-pointer w-[60px] h-[160px]' />
            </div>
            <div className='pt-4 pl-2 flex justify-between'>
            <p className='uppercase cursor-pointer text-sm font-bold'>ui soup</p> <p className=' cursor-pointer uppercase border text-xs p-1 border-[#] px-4 rounded-full inline-block font-normal hover:scale-105 duration-300 hover:bg-[#fdc221]'>view work</p>
            </div>
          </div>
          </div>
          <div>
          <div className='mx-4 snap-center w-[290px] bg-white p-2 border shadow-lg rounded-lg'>
            <div className='flex justify-between'>
            <img src={desktopimg1} className='w-[200px] h-[160px] hover:scale-105 duration-300 cursor-pointer border shadow-lg rounded-xl' alt="" />
             <img src={mobileimg1} alt="" className='border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-xl w-[60px] h-[160px]' />
            </div>
            <div className='pt-4 pl-2 flex justify-between'>
            <p className=' cursor-pointer text-sm font-bold'>Goldcrown Labs</p> <p className=' cursor-pointer uppercase border text-xs p-1 border-[#] px-4 rounded-full inline-block font-normal hover:scale-105 duration-300 hover:bg-[#fdc221]'>view work</p>
            </div>
          </div> 
          </div>
          <div>
          <div className=' w-[290px] snap-center bg-white p-2 border shadow-lg rounded-lg'>
            <div className='flex justify-between'>
            <img src={desktopimg2} className='w-[200px] h-[160px] hover:scale-105 duration-300 cursor-pointer border shadow-lg rounded-xl' alt="" />
             <img src={mobileimg} alt="" className='border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-xl w-[60px] h-[160px]' />
            </div>
            <div className='pt-4 pl-2 flex justify-between'>
            <p className='cursor-pointer text-sm font-bold'>Close Consierge</p> <p className=' cursor-pointer uppercase border text-xs p-1 border-[#] px-4 rounded-full inline-block font-normal hover:scale-105 duration-300 hover:bg-[#fdc221]'>view work</p>
            </div>
          </div> 
          </div>
          <div>
          <div className='mx-4 snap-center w-[290px] bg-white p-2 border shadow-lg rounded-lg'>
            <div className='flex justify-between'>
            <img src={desktopimg1} className='w-[200px] h-[160px] hover:scale-105 duration-300 cursor-pointer border shadow-lg rounded-xl' alt="" />
             <img src={mobileimg1} alt="" className='border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-xl w-[60px] h-[160px]' />
            </div>
            <div className='pt-4 pl-2 flex justify-between'>
            <p className=' cursor-pointer text-sm font-bold'>Goldcrown Labs</p> <p className=' cursor-pointer uppercase border text-xs p-1 border-[#] px-4 rounded-full inline-block font-normal hover:scale-105 duration-300 hover:bg-[#fdc221]'>view work</p>
            </div>
          </div> 
          </div>
          <div>
            <div>
           <div className='snap-center w-[290px] bg-white p-2 border shadow-lg rounded-lg'>
            <div className='flex justify-between'>
            <img src={desktopimg2} className='w-[200px] h-[160px] hover:scale-105 duration-300 cursor-pointer border shadow-lg rounded-xl' alt="" />
             <img src={mobileimg} alt="" className='border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-xl w-[60px] h-[160px]' />
            </div>
            <div className='pt-4 pl-2 flex justify-between'>
            <p className='cursor-pointer text-sm font-bold'>Close Consierge</p> <p className=' cursor-pointer uppercase border text-xs p-1 border-[#] px-4 rounded-full inline-block font-normal hover:scale-105 duration-300 hover:bg-[#fdc221]'>view work</p>
            </div>
          </div>
          </div>
          </div> 
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Scroller
