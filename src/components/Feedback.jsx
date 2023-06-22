import React from 'react'
import Qoutes from '../assets/quotes.png'

const Feedback = () => {
  return (
    <div className='px-4 max-w-[1240] flex-col justify-center content-center '>
      <h1 className='text-2xl md:text-4xl text-center block font-bold'>Our Testimonials<span className='block font-normal'>What Our Clients Are <span className='text-bg'>Saying</span></span></h1>
        <div className=' max-w[1240px] lg:flex  lg:justify-center lg:w-6/12 m-auto grid md:grid-cols-2 md:w-[100%]'>
            <div className='lg:w-6/12 text-center md:text-left border shadow-md p-4 md:mr-4 my-4 md:my-8 cursor-pointer'>
                <img src={Qoutes} className=' m-auto md:m-0 w-[15%] md:w-[15%]' alt='Feedback'/>
                <p className=' py-4 text-sm'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <div className=' text-sm font-bold'>
                    <span>UI Soup</span>
                </div>
            </div>
            <div className='lg:w-6/12  text-center md:text-left border shadow-md p-4 md:ml-4 mb-4 md:my-8 cursor-pointer'>
                <img src={Qoutes} className=' m-auto md:m-0 w-[15%] md:w-[15%]' alt='Feedback'/>
                <p className=' py-4 text-sm'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <div className='  text-sm font-bold'>
                    <span className=''><span className=''></span> UI Soup</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback
