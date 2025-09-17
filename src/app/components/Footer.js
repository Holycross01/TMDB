import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#031d33] to-[#032541] py-12 lg:py-20  px-5'>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center space-x-7 '>
            <div className='space-y-4'>
                <Image src='/images/mobile-logo.svg'className='hidden lg:block -mt-6' width={130} height={50} alt='tmdb-mobile-logo'/>
                <span className='bg-white rounded-md flex justify-center items-center px-3 py-2 text-[#01b4e4] font-bold  lg:mt-10'>Hi cross!</span>

            </div>
         
            <div className='text-white flex flex-col space-y-1 my-4 lg:my-0'>
                <Link href='/' className='font-extrabold'>THE BASICS</Link>
                <Link href='/'>About TMDB</Link>
                <Link href='/'>Contact Us</Link>
                <Link href='/'>Support Forums</Link>
                <Link href='/'>Api Documentation</Link>
                <Link href='/'>System Status</Link>
            </div>

            <div className='text-white flex flex-col space-y-1 my-4 lg:my-0'>
                <Link href='/'className='font-extrabold'>GET INVOLVED</Link>
                <Link href='/'>Contribution Bible</Link>
                <Link href='/'>Add New Movie</Link>
                <Link href='/'>Add New Tv Show</Link>
              
            </div>

            <div className='text-white flex flex-col space-y-1 my-4 lg:my-0'>
                <Link href='/'className='font-extrabold'>COMMUNITY</Link>
                <Link href='/'>Guidelines</Link>
                <Link href='/'>Discussions</Link>
                <Link href='/'>Leaderboard</Link>
            </div>

            <div className='text-white flex flex-col space-y-1 my-4 lg:my-0'>
                 <Link href='/'className='font-extrabold'>LEGAL</Link>
                <Link href='/'>Term of Use</Link>
                <Link href='/'>Api Term of Use</Link>
                <Link href='/'>Privacy Policy</Link>
                <Link href='/'>DMCA policy</Link>
            </div>

        </div>  {/* end of overall flexDiv */}

    </div>
  )
}

export default Footer