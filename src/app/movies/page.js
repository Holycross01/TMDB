 "use client"

import React, { useEffect, useState } from 'react'
import { tmdbApi, config } from '@/screen/Lib/Api'
import Image from 'next/image'

const Page = () => {
   const [moviepage, setMoviepage] = useState([])


  const popularMoviePage = async () =>{
   try{
     const {data} = await tmdbApi.get(config.endpoints.popularpageformovies);
     console.log('tmdb response', data)
    setMoviepage(data.results || [])

   }catch(error){
    console.error('error fetching popular movie page', error);
   }
   
  }

   const imgSize = 'w500'
   const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${imgSize}`;

   useEffect(()=>{
    popularMoviePage();
   }, [])

  return (
   <div className='my-[30px] mx-[5px] lg:mx-[30px] lg:px-15'>
    <div className='max-w-7xl mx-auto p-3'>
      <h2 className='font-semibold text-2xl -mt-2 mb-4'>popular Movies</h2>
    <div className='grid lg:grid-cols-4 xl:grid-cols-5 space-y-5'>
       {moviepage.slice(0 , 20).map((movie)=>(
      <div key={movie.id} className='lg:w-[190px] flex flex-row lg:flex-col'>
          <div className=' relative w-[80px] lg:w-full lg:h-[273px] h-auto'>
             <Image style={{ objectFit: 'cover'}} src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : '/images/fallback-image.jpg'}  fill sizes = '500px' alt='movie cards' className='rounded-t-md  cursor-pointer'/>
              <span className={`w-8 h-8 text-xs bg-black absolute bottom-2 left-2 text-white lg:flex items-center justify-center border-2 font-bold rounded-full hidden  ${Math.round(movie.vote_average * 10) >= 70 ? "border-green-800 bg-black/70" : "border-yellow-500 bg-black/70"}`}>
                  {Math.round(movie.vote_average * 10)}%
                </span>
          </div>
          <div className='bg-white py-4 lg:py-3 px-2 rounded-b-md shadow-md w-full lg:h-[100px] flex-1'>
            <p className='font-semibold line-clamp-2 text-sm'>{movie.title}</p>
            <p className='text-black/50 mb-4 text-sm'>{movie.release_date}</p>
            <p className='lg:hidden line-clamp-2 my-1 text-sm'>{movie.overview}</p>
          </div> 
      </div>
      ))}

   </div>
  </div>
</div>
  )
}

export default Page