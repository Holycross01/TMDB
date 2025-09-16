 'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { tmdbApi, config } from '../screen/Lib/Api';

const Trending = () => {
    const [active, setActive] = useState('today');
    const [today, setToday] = useState([]);
    const [thisWeek, setThisWeek] = useState([]);



     const [open, setOpen] = useState(false);
      const handleSelect = (value) => {
        setActive(value);
        setOpen(false);
      };


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
  <div className="  hidden relative min-w-[200px] h-[30px] border border-gray-800 rounded-full sm:flex items-center justify-between text-sm text-white font-medium px-1">
      {/* Sliding indicator */}
      <div
        className={`absolute top-0 left-0 h-[20px] bg-white rounded-full transition-all duration-300 font-semibold ${
          active === 'week' ? 'translate-x-full' : ''
        }`}
      ></div>

      {/* Option 1: Today */}
      <div
        onClick={() => setActive('today')}
        className={`z-10 flex-1 text-sm text-center py-0.5 cursor-pointer transition-all duration-300 font-semibold ${
          active === 'today' ? ' bg-[#032541] text-[#1ed5a9] rounded-full ' : 'text-[#032541]'
        }`}
      >
        Today
      </div>

      {/* Option 2: This Week */}
      <div
        onClick={() => setActive('week')}
        className={`z-10 flex-1 text-sm text-center py-0.5  cursor-pointer transition-all durration-300 font-semibold  ${
          active === 'week' ? ' bg-[#032541] text-[#1ed5a9] rounded-full ' : 'text-[#032541]'
        }`}
      >
        This Week
      </div>
    </div>


       {/* MOBILENAV TOGGLE DIV */}
    <div className=" sm:hidden relative w-[120px]">
      {/* Button that shows the active option */}
      <button
        onClick={() => setOpen(!open)}
        className=" w-full h-[30px] rounded-tl-sm rounded-tr-sm border border-gray-800 bg-[#032541] text-[#1ed5a9] text-sm font-medium px-2 flex items-center justify-between"
      >
        {active === "today" ? "Today" : "This Week"}
        <span className="ml-2 ">▼</span>
      </button>

      {/* Dropdown options */}
      {open && (
        <div className="absolute w-max min-w-full bg-white  shadow-lg z-50">
          {active !== "today" && (
            <div
              onClick={() => handleSelect("today")}
              className="px-3 py-1 text-sm bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] rounded-bl-sm rounded-br-sm cursor-pointer hover:bg-gray-100"
            >
              Today
            </div>
          )}
          {active !== "week" && (
            <div
              onClick={() => handleSelect("week")}
              className="px-3 py-1 text-sm bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] rounded-bl-sm rounded-br-sm cursor-pointer hover:bg-gray-100"
            >
              This Week
            </div>
          )}
        </div>
      )}
    </div>


  </div>

  <div className='flex mt-4 overflow-hidden overflow-x-auto '>
    {moviesToShow?.length > 0 ? (
     <ul className='flex flex-row gap-4'>
        {moviesToShow.map((movie)=>(
            <li key={movie.id} >
              <div className='w-[150px] h-[225px] relative rounded-md overflow-hidden'>
                <Image style={{ objectFit: 'cover'}} fill sizes='500px' src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}`: '/fallback-image.jpg'} alt='movie-title'/>
                   {movie.vote_average && (
                <span className={`w-8 h-8 text-xs bg-black absolute bottom-2 left-2 text-white flex items-center justify-center border-2 font-bold  rounded-full ${Math.round(movie.vote_average * 10) >= 70 ? "border-green-800 bg-black/70" : "border-yellow-500 bg-black/70"}`}>
                  {Math.round(movie.vote_average * 10)}%
                </span>
              )}
              </div>
        
              <h2 className='font-bold text-sm'>{movie.original_title || movie.name}</h2>  
              <h3 className='font-lighter text-[#00000099] text-sm'>{movie.release_date || movie.first_air_date}</h3> 
              {/* {movie.vote_average && (
                <span className='bg-black text-white'>
                  {Math.round(movie.vote_average * 10)}%
                </span>
              )} */}
            </li>
        ))}
     </ul>
    ) : (<p>loading..</p>)}

  </div>

     </div>
  )
   
}


export default Trending