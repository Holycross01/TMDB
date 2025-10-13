"use client"
import React, {useEffect, useState } from 'react'
import { tmdbApi, config } from '@/screen/Lib/Api'
import Image from 'next/image'
import Link from 'next/link'

const Tvshowspage = () => {
    const [tvshows, setTvshows] = useState([])

    const fetchTvShowsPage =  async ()=>{
      try{
          const {data} = await tmdbApi.get(config.endpoints.popularpagefortvshows)
            setTvshows(data.results || [])

      }catch(error){
        console.error('could not fetch tvshows resource', error)
      }
    }

     const imgSize = 'w500'
     const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${imgSize}`;

    useEffect(()=>{
        fetchTvShowsPage();
    })
  return (
    <div className='my-[30px] mx-[5px] lg:mx-[30px] lg:px-15'>
        <div className='max-w-7xl mx-auto px-3'>
        <h2 className='font-semibold text-2xl -mt-2 mb-4'>popular Tvshows</h2>

        <div className='grid lg:grid-cols-4 xl:grid-cols-5 gap-7 justify-items-center'>
            {tvshows && tvshows.length > 0 ? (
             tvshows.slice(0, 20).map((movie)=>(
          <Link href={`/Tvshows/${movie.id}`} key={movie.id} >
               <div  className="w-full lg:min-w-[190px] flex flex-row lg:flex-col">
                <div className='relative h-auto w-[80px] lg:w-full lg:h-[273px]'>
                  <Image style={{ objectFit:'cover'}} src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : "/images/fallback-image.jpg"} fill sizes = '500px' alt='movie cards' className='rounded-t-md cursor-pointer'/>
                  <span className={`w-8 h-8 text-xs bg-black absolute bottom-2 left-2 text-white lg:flex items-center justify-center border-2 font-bold rounded-full hidden  ${Math.round(movie.vote_average * 10) >= 70 ? "border-green-800 bg-black/70" : "border-yellow-500 bg-black/70"}`}>
                      {Math.round(movie.vote_average * 10)}%
                  </span>
                </div>
             <div className='bg-white shadow-md p-3 h-auto lg:h-[80px] w-full rounded-b-md'>
                 <p className='font-semibold text-sm'>{movie.original_name}</p>
                <p className='text-black/50 text-sm mb-3'>{movie.first_air_date}</p>
                <p className='line-clamp-2 mt-1 text-sm lg:hidden'>{movie.overview}</p>
            </div>
              
        
         </div> 
      </Link>
         ) )  ) : (<p>loading...</p>) }
         
        </div>


        </div>
        
    </div>
  )
}

export default Tvshowspage