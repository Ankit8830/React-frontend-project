import React from 'react'
import Hero2 from '../assets/Picture2.png'

const SecondCol = () => {
  return (  
<div className='w-full px-4 bg-white text-[#331b3b] py-4 md:pl-4'>
        <div className=' mx-auto grid md:grid-cols-2'>
        <img className='items-start' src={Hero2} alt='Hero image'/>
          <div className='lg:pr-0 w-10/12 lg:w-full m-auto text-center md:text-left'>
              <h1 className='text-2xl lg:text-4xl font-bold'>About Us 
              <span className=' font-normal block'>Fake or <span className='text-bg'>Real</span></span></h1>
              <p className='pt-4 lg:pt-8 pb-2 lg:pb-4 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde voluptates consectetur exercitationem recusandae, ea nostrum ad laboriosam quis? Maiores, quis quisquam laboriosam officiis aliquam ad ipsa reprehenderit ipsum explicabo?
              </p>
              <p className='pb-4 lg:pb-8 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde voluptates consectetur exercitationem recusandae, ea nostrum ad laboriosam quis? Maiores, quis quisquam laboriosam officiis aliquam ad ipsa reprehenderit ipsum explicabo?
              </p>
              <button className=' bg-[#331b3b] shadow-lg border text-[10px] px-8 py-3.5  uppercase font-bold rounded-md text-white hover:scale-110 hover:bg-[#fdc221] hover:text-black duration-300'>explore more</button>
          </div>
        </div>
    </div>
  )
}

export default SecondCol
