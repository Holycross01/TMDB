 'use client'
import React, { useState } from 'react'

const Trending = () => {
     const [active, setActive] = useState('today')

  return (
    <div className='my-[40px] mx-[30px]'>

  <div className='flex items-center  space-x-2 justify-center md:justify-start'>
    <h2 className='font-semibold text-[1.4em]'>Trending</h2>
  <div className="relative min-w-[200px] h-[28px] border border-gray-800 rounded-full flex items-center justify-between text-sm text-white font-medium px-1">
      {/* Sliding indicator */}
      <div
        className={`absolute top-1 left-1 h-[20px] bg-white rounded-full transition-all duration-300 font-semibold ${
          active === 'week' ? 'translate-x-[100%]' : ''
        }`}
      ></div>

      {/* Option 1: Today */}
      <div
        onClick={() => setActive('today')}
        className={`z-10 flex-1 text-sm text-center cursor-pointer transition-all duration-300 font-semibold ${
          active === 'today' ? ' bg-[#032541] text-[#1ed5a9] rounded-full ' : 'text-[#032541]'
        }`}
      >
        Today
      </div>

      {/* Option 2: This Week */}
      <div
        onClick={() => setActive('week')}
        className={`z-10 flex-1 text-sm text-center  cursor-pointer transition-all durration-300 font-semibold  ${
          active === 'week' ? ' bg-[#032541] text-[#1ed5a9] rounded-full ' : 'text-[#032541]'
        }`}
      >
        This Week
      </div>
    </div>
  </div>




















  


     </div>
  )
   
}


export default Trending