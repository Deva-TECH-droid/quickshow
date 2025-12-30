import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

   const navigate = useNavigate()



  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgrounimage.png")] bg-cover bg-center h-screen'>
        <img src={assets.Dhurandar} alt="" className='max-h-15 lg:h-15 mt-25' />

        <h1 className='text-red-600 text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Dhurandar <br/> The last breath</h1>

        <div className='flex items-center gap-4 text-gray-300'>
            <span>Action | Adventure | Patriotic</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='inline-block w-5 h-5 mr-2'/>2025
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='inline-block w-5 h-5 mr-2'/>3h 20m
            </div>
        </div>
        <p className='text-gray-300 max-w-2xl'>Dhurandar is a patriotic action-adventure film that explores the last moments of a legendary warrior, showcasing the power of sacrifice and the enduring spirit of freedom.</p>
        <button onClick={()=> navigate('/movies')} className='flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 font-medium cursor-pointer'>
          Explore Movies
          <ArrowRight className='w-5 h-5'/>
        </button>
      
    </div>
  )
}

export default HeroSection
