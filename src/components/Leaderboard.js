import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Leaderboard = () => {
  return (
    <div className='py-[30px] px-[40px]'>
        <div className='max-w-7xl mx-auto'>
        <div className='flex space-x-3 items-center'>
            <h3 className='text-2xl font-semibold'>Leaderboard</h3>
            <div>
                <div className='flex items-center space-x-2'>
                 <div className='w-2 h-2 bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] rounded-full'>
                </div>
                <span className='text-sm whitespaace-nowrap'>All Time Edits</span>
                </div>
               
                <div className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'>
                </div>
                <span className='text-sm whitespace-nowrap'>Edits This Week</span>
                </div>
            </div>
        </div>  {/* END OF LEADERBOAED TITLE */}



  <div className='flex flex-col lg:flex-row lg:justify-between'>
    <div>

     <div className='flex items-center space-x-3 my-3'>

           <div className='shrink-0'>
                <Link href='/'><Image src="/images/img1.jpeg" alt="img Logo" width={50} height={50} className='rounded-full' priority /></Link> 
          </div>

          <div>
              <Link href='/' className=' font-semibold hover:text-[#1ed5a9]'>enterprise</Link> 
                <div className='flex items-center space-x-3'>
                 <div className='md:w-[250px] xl:w-[500px] w-[100px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'></div>
                <span className='text-sm font-semibold -m-2'>1,163,937</span>
                </div>

                 <div className='flex items-center space-x-3'>
                <div className='md:w-[300px] w-[120px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                <span className='text-sm whitespace font-semibold'>104,824</span>
            </div>
         </div>

     </div>





      <div className='flex items-center space-x-3 my-3'>

           <div>
                <Link href='/'><Image src="/images/img3.webp" alt="img Logo" width={50} height={50} className='rounded-full' priority /></Link> 
          </div>
          <div>
              <Link href='/' className='font-semibold hover:text-[#1ed5a9]'>Roman</Link> 
                <div className='flex items-center space-x-3'>
                 <div className='w-[100px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'></div>
                <span className='text-sm font-semibold -m-2'>283,887</span>
                </div>

                 <div className='flex items-center space-x-3'>
                <div className='w-[40px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                <span className='text-sm font-semibold'>8,567</span>
            </div>
         </div>

     </div>






      <div className='flex items-center space-x-3 my-3'>
           <div>
                <Link href='/'><Image src="/images/img5.webp" alt="img Logo" width={50} height={50} className='rounded-full' priority /></Link> 
          </div>
          <div>
              <Link href='/' className='font-semibold hover:text-[#1ed5a9]'>chkchkboom</Link> 
                <div className='flex items-center space-x-3'>
                 <div className='w-[100px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'></div>
                <span className='text-sm font-semibold -m-2'>268,816</span>
                </div>

                 <div className='flex items-center space-x-3'>
                <div className='w-[30px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                <span className='text-sm font-semibold'>5,520</span>
            </div>
         </div>

     </div>





      <div className='flex items-center space-x-3 my-3'>
           <div>
               <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#1ed5a9] text-white rounded-full'>M
               </div>
          </div>
          <div>
              <Link href='/' className='font-semibold hover:text-[#1ed5a9]'>maxemx</Link> 
                <div className='flex items-center space-x-3'>
                 <div className='w-[60px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'></div>
                <span className='text-sm font-semibold -m-2'>9,526</span>
                </div>

                 <div className='flex items-center space-x-3'>
                <div className='w-[30px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                <span className='text-sm font-semibold'>5,501</span>
            </div>
         </div>

     </div>




      <div className='flex items-center space-x-3 my-3'>
           <div>
                <Link href='/'><Image src="/images/img7.webp" alt="img Logo" width={50} height={50} className='rounded-full' priority /></Link> 
          </div>
          <div>
              <Link href='/' className='font-semibold hover:text-[#1ed5a9]'>capricorn✨</Link> 
                <div className='flex items-center space-x-3'>
                 <div className='w-[60px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'>
                </div>
                <span className='text-sm font-semibold -m-2'>61,540</span></div>

                 <div className='flex items-center space-x-3'>
                <div className='w-[30px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                <span className='text-sm font-semibold'>4,299</span>
            </div>
         </div>

     </div>


      </div>
         

        {/* DIVS ON THE RIGHT HAND SIDE */}

            <div>

                 <div className='flex items-center space-x-3 my-3'>
           <div className='shrink-0 '>
                <Link href='/'><Image src="/images/img2.webp" alt="img Logo" width={50} height={50} className='rounded-full' priority /></Link> 
          </div>
          <div>
              <Link href='/' className='font-semibold hover:text-[#1ed5a9]'>Shei</Link> 
                <div className='flex items-center space-x-3'>
                 <div className='md:w-[350px] w-[100px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'>
                </div>
                <span className='text-sm whitespace-nowrap font-semibold -m-2'>2,059,942</span></div>

                 <div className='flex items-center space-x-3'>
                <div className='md:w-[150px] w-[50px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'>
                </div>
                <span className='text-sm font-semibold'>26,845</span>
            </div>
         </div>

     </div>





      <div className='flex items-center space-x-3 my-3'>
           <div className='shrink-0'>
                <Link href='/'><Image src="/images/img4.webp" alt="img Logo" width={50} height={50} className='rounded-full' priority /></Link> 
          </div>
          <div>
              <Link href='/' className='font-semibold hover:text-[#1ed5a9]'>talestalker</Link> 
                <div className='flex items-center space-x-3'>
                 <div className='md:w-[350px] w-[100px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'></div>
                <span className='text-sm font-semibold -m-2'>1,377,078</span>
                </div>

                 <div className='flex items-center space-x-3'>
                <div className='w-[70px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                <span className='text-sm font-semibold'>4,953</span>
            </div>
         </div>

     </div>






      <div className='flex items-center space-x-3 my-3'>
           <div>
               <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#0177d2] text-white rounded-full'>B
               </div>
          </div>
          <div>
              <Link href='/'className='font-semibold hover:text-[#1ed5a9]'>bonchiver</Link> 
                <div className='flex items-center space-x-3'>
                 <div className='w-[70px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'></div>
                <span className='text-sm font-semibold -m-2'>48,943</span>
                </div>

                 <div className='flex items-center space-x-3'>
                <div className='w-[50px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                <span className='text-sm font-semibold'>6,330</span>
            </div>
         </div>

     </div>






      <div className='flex items-center space-x-3 my-3'>
           <div>
                <Link href='/'><Image src="/images/img6.webp" alt="img Logo" width={50} height={50} className='rounded-full' priority /></Link> 
          </div>
          <div>
              <Link href='/' className='font-semibold hover:text-[#1ed5a9]'>HeelerCattle86</Link> 
                <div className='flex items-center space-x-2'>
                 <div className='w-[100px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'></div>
                <span className='text-sm font-semibold -m-2'>237,659</span>
                </div>

                 <div className='flex items-center space-x-2'>
                <div className='w-[50px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                <span className='text-sm font-semibold'>5,066</span>
            </div>
         </div>

     </div>






      <div className='flex items-center space-x-3 my-3'>
         <div>
           <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#01b4e4] text-white rounded-full'>K
               </div>
          </div>
          <div>
              <Link href='/' className='font-semibold hover:text-[#1ed5a9]'>KHammett</Link> 
                <div className='flex items-center space-x-3'>
                    <div className='w-[70px] h-2 bg-gradient-to-r from-[#c0fecf] to-[#01d277] rounded-full'></div>
                    <span className='text-sm font-semibold -m-2'>4,579</span>
                </div>

                 <div className='flex items-center space-x-3'>
                    <div className='w-[40px] h-2 bg-gradient-to-r from-[#ff9900] to-[#ff0055] rounded-full'></div>
                    <span className='text-sm font-semibold'>4,224</span>
            </div>
         </div>

     </div>

    </div>

    </div>

    </div>
    </div>
  )
}

export default Leaderboard