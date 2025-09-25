'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    
    const clickMobileNav = ()=>{
        setMobileNav(!mobileNav)
    }
  return (
    
        <nav className='bg-[#032541] px-5 md:px-[40px] py-[10px] '>
              <div className='max-w-7xl mx-auto'>
            <div className=' flex justify-between items-center '>
                <div className='flex text-white items-center text-xl space-x-5'>
                    <Link href=""><Image src="/images/tmdblogo.svg" alt='tmdb-logo' className='hidden lg:block' width={154} height={20}/></Link>

                <button className='block lg:hidden' onClick={clickMobileNav}>
                    ☰
                </button>

                    <div className='space-x-4 py-[8px] font-semibold hidden lg:flex'>
                        <div className='relative group font-extralight'>
                         <Link href="/" className='p-[8px] text-[15px]'>Movies</Link>
                         <div className='absolute -mt-0.3 w-38 bg-white text-black rounded shadow-md invisible group-hover:opacity-100 group-hover:visible  py-1'>
                            <ul>
                                <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Popular</Link></li>
                                 <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Now Playing</Link></li>
                                 <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Upcoming</Link></li>
                                 <li><Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Top rated</Link></li>
                            </ul>
                         </div>
                        </div>

                        <div className='relative group font-extralight'>
                          <Link href="/" className='p-[8px] text-[15px]'>Tv shows</Link>
                              <div className='absolute -mt-0.3 w-38 bg-white text-black rounded shadow-md invisible group-hover:opacity-100 group-hover:visible  py-1'>
                            <ul>
                                <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Popular</Link></li>
                                 <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Airing Today</Link></li>
                                 <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">on Tv</Link></li>
                                 <li><Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Top rated</Link></li>
                            </ul>
                         </div>
                        </div>

                        <div className='relative group font-extralight'>
                        <Link href="/" className='p-[8px] text-[15px]'>People</Link>
                          <div className='absolute -mt-0.3 w-38 bg-white text-black rounded shadow-md invisible group-hover:opacity-100 group-hover:visible  py-1'>
                            <ul>
                                <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Popular People</Link></li>
                             
                            </ul>
                         </div>
                        </div>
                  
                    
                    <div className='relative group font-extralight'>
                   <Link href="/" className='p-[8px] text-[15px]'>More</Link>
                     <div className='absolute -mt-0.3 w-38 bg-white text-black rounded shadow-md invisible group-hover:opacity-100 group-hover:visible  py-1'>
                            <ul>
                                <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Discussion</Link></li>
                                 <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Leaderboard</Link></li>
                                 <li><Link href="#" className="block px-4 py-2  text-sm hover:bg-gray-100">Support</Link></li>
                                 <li><Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Api Documentation</Link></li>
                                
                            </ul>
                         </div>
                    </div>
                   
                    
                    </div>

                </div>

                 {/* Mobile-nav-logo */}
                  <div className='flex justify-center items-center pl-10'>
                 <Image src="/images/mobile-logo.svg" alt='tdmb logo' className='block lg:hidden' width={59} height={39} />
                </div>

                   {/* Nav icons */}
                <div className='flex lg:space-x-8 space-x-2 px-2 '>
                      <Link href="#"><Image src="/images/plus.svg" alt='plus logo' width={25} height={25} className='hidden lg:block' /></Link>
                     <Link href="#" className='border border-white rounded-sm w-6 h-6 items-center justify-center p-0.5 text-[10px] text-white hidden lg:flex' >EN</Link>
                     <Link href="#"><Image src="/images/bell.svg" alt='bell image'className='invert ' width={25} height={25}/></Link>
                     <Link href="#" className='bg-[#d40242] rounded-full w-7 h-7 flex items-center justify-center  p-1 text-white text-xs' >H</Link>
                     <Link href="#"><Image src="/images/search.svg" alt='plus logo' width={25} height={25} /></Link>
                  
                </div>

            </div>

            {/* mobile-nav-link */}
            <div className={`space-y-1 flex flex-col text-white transition-all duration-300 ease-in-out overflow-hidden
            ${mobileNav ?  'opacity-300 max-h-[1000px]' : 'opacity-0 max-h-0'}`}>
     <div className='space-y-2 flex flex-col text-white '>
                <Link href="" className='font-bold text-[1.2em]'>Movies</Link>
                <Link href="" className='font-bold text-[1.2em]'>Tv shows</Link>
                <Link href="" className='font-bold text-[1.2em] mb-4'>People</Link>
                <Link href="" className='text-white/50'>Contribution Bible</Link>
                <Link href="" className='text-white/50'>Discussions</Link>
                <Link href="" className='text-white/50'>Leaderboard</Link>
                <Link href="" className='text-white/50'>API</Link>
                <Link href="" className='text-white/50'>support</Link>
                <Link href="" className='text-white/50'>About</Link>
                <Link href="" className='text-white/50'>Logout</Link>
            </div>
            </div>
           
       </div>
        </nav>
  )
}

export default Navbar