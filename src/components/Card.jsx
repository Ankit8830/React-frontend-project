import Webdesign from '../assets/webdesign.png'
import Webdev from '../assets/webdevelopment.png'
import Phone from '../assets/phone.png'
import Rocket from '../assets/rocket.png'
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi'

function Card(){
    return(<>
    <div className="py-8 ">
    <div className='bg-[#ecf7ff] max-w-[1280px] rounded-tr-[200px]'>
        <div>
        <p className= 'pt-4 lg:py-12 text-center texl-2xl md:text-4xl font-bold text-[#331b3b] block'>What We Do<span className='block font-normal'>For Your <span className='text-bg'>Business</span> </span></p>
        </div>
        <div className='md:flex justify-between'>
           <div className='hidden md:flex md:pl-4 md:w-24'>
            <button className=''><FiArrowLeftCircle/></button>
            <button className=''><FiArrowRightCircle/></button>
           </div>
           <div className='container ml-auto scroll-smooth flex snap-mandatory snap-x overflow-x-auto'>
           
           
            <div className=''>
            <div className='w-[320px] snap-center h-[210px] object-cover bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Webdesign} className='w-[20%] p-3 bg-[#ffded4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>website design</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
               
                <div>
                <div className='w-[320px] snap-center h-[210px] object-cover bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Webdev} className='w-[20%] p-3 bg-[#ffeed4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>website Development</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                </div>
                
                <div>
                <div className='w-[320px] snap-center h-[210px] object-cover bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Phone} className='w-[20%] p-2  bg-[#d4f0ff] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>mobile app development</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                </div>
                
                <div>
                <div className='w-[320px] snap-center h-[210px] object-cover bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Rocket} className='w-[20%] p-4 bg-[#ffded4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>Marketting</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                </div>
                <div>
                <div className='w-[320px] snap-center h-[210px] object-cover bg-white rounded-xl border shadow-lg p-4 m-4 transition ease-in-out delay-75 hover:scale-110 duration-300'>
                    <img src={Rocket} className='w-[20%] p-4 bg-[#ffded4] rounded-2xl mb-2' alt=''/>
                    <p className='py-2 uppercase font-bold'>Demo learning</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                </div>
        
             </div>
           </div>
        </div>  
        </div>
    </>)
}
export default Card;