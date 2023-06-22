import React from 'react'
import Hero from '../assets/Picture1.png'


const TwoCol = () =>{
  return (
    <div className='px-4 md:px-4 w-full text-[#331b3b] bg-white py-4 md:pl-4'>
        <div className='max-w[1240px] grid md:grid-cols-2 '>
         
          <div className=' w-11/12 lg:w-full flex-col text-center md:text-left m-auto content-center'>
          <img className='lg:pr-12 md:hidden pb-4' src={Hero} alt='Hero image'/>
              <h1 className='text-4xl lg:text-8xl font-bold'>We Help you 
              <span className='text-4xl lg:text-8xl font-normal block'>to grow your <br className='flex lg:hidden business '/><span className='text-bg-lg'>Business</span></span></h1>
              <p className='py-4 lg:py-8 pr-0 lg:pr-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde voluptates consectetur exercitationem recusandae, ea nostrum ad laboriosam quis? Maiores, quis quisquam laboriosam officiis aliquam ad ipsa reprehenderit ipsum explicabo?
              </p>
            <button className=' bg-[#331b3b] shadow-lg border text-[12px] px-8 py-3.5  uppercase font-bold rounded-md text-white transition ease-in-out delay-150 hover:scale-110 hover:bg-[#fdc221] hover:text-black duration-300'>Get started</button>
          </div>
          <img className='md:items-end md:w-full hidden md:flex' src={Hero} alt='Hero image'/>
        </div>
    </div>
    
  )
}

export default TwoCol
