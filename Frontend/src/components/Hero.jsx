import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-300 overflow-hidden'>
      {/* Left Section */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141] text-center sm:text-left'>
          <div className='flex items-center gap-2 justify-center sm:justify-start'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='parta-regular text-xl sm:text-3xl lg:text-5xl leading-relaxed sm:py-3'>
            Latest Arrivals
          </h1>
          <div className='flex items-center gap-2 justify-center sm:justify-start'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>       
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className='w-full sm:w-1/2'>
        <img className='w-full h-full object-cover' src={assets.hero_img} alt="Hero" />
      </div>
    </div>
  )
}

export default Hero
