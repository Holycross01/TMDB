 'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { tmdbApi, config } from '../screen/Lib/Api';

const Trending = () => {
    const [active, setActive] = useState('today');
    const [today, setToday] = useState([]);
    const [thisWeek, setThisWeek] = useState([]);

    const fetchMovieToday = async () => {
        try {
            const { data } = await tmdbApi.get(config.endpoints.today);
            setToday(data?.results || [])
            console.log(data)
        }
        catch(error) {
            console.log('error fetching today', error)
        }
    }

    const fetchWeeklyMovies = async () => {
        try {
            const { data } = await tmdbApi.get(config.endpoints.weekly)
            setThisWeek(data?.results || [])
            console.log(data)
        }
        catch(error) {
            console.log('error fetching weekly movies', error)
        } 
        
    }

    const moviesToShow = active === 'today' ? today : thisWeek;
    const imgSize = 'w500'
    const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${imgSize}`;

    useEffect(() => {
        fetchMovieToday();
        fetchWeeklyMovies();
    }, [])

  return (
    <div className='my-[40px] mx-[20px]'>

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

  <div className='flex mt-4 overflow-hidden overflow-x-auto '>
    {moviesToShow?.length > 0 ? (
     <ul className='flex flex-row gap-4'>
        {moviesToShow.map((movie)=>(
            <li key={movie.id} >
              <div className='w-[150px] h-[225px] relative rounded-md overflow-hidden'>
                <Image style={{ objectFit: 'cover'}} fill sizes='500px' src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}`: '/fallback-image.jpg'} alt='movie-title'/>
              </div>
        
          <h2 className='font-bold'>{movie.original_title || movie.name}</h2>  
          <h3 className='font-lighter'>{movie.release_date || movie.first_air_date}</h3> 
            </li> 

        ))}
     </ul>
    ) : (<p>loading..</p>)}


  </div>

     </div>
  )
   
}


export default Trending