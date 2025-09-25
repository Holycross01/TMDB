"use client"
import React, {useState, useEffect } from 'react'
import { tmdbApi, config } from '@/app/screen/Lib/Api';
import CustomDropdown from './customdropdwn';
import Image from 'next/image';
const Freewatch = () => {

      const options = [ "movies", "tv"];
       const [active, setActive] = useState(options[0]);
       const [movies, setMovies] = useState([]);
       const [tv, setTv] = useState([]);


const loadMovies = async ()=>{
    try{
        const {data} = await tmdbApi.get(config.endpoints.freetowatchmovie)
        setMovies(data.results || [])
    }catch(error){
        console.error('error fetching setmovies',error)
    }
}
const loadtv = async ()=>{
    const {data} = await tmdbApi.get(config.endpoints.freetowatchtv)
     console.log("TV DATA:", data); 
    setTv(data.results || [])
}

useEffect(()=>{
    loadMovies();
    loadtv();
},[]);

const moviesToWatch = {
    "movies": movies,
    "tv": tv
}
const getMovies = moviesToWatch[active]
const imgsize = 'w500'
    const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${imgsize}`
  return (
    <div className='my-5 py-3 px-4'>
       <div className='max-w-7xl mx-auto'>
     <div className='flex items-center space-x-3 px-3'>
        <h2 className='font-semibold text-xl whitespace-nowrap'>Free To Watch</h2>
         <div className="hidden relative min-w-[150px] h-[30px] border border-[#032541] rounded-full sm:flex items-center text-sm font-medium overflow-hidden">
        {/* Sliding indicator */}
        <div
          className="absolute top-[2px] left-0 h-[26px] rounded-full transition-all duration-300"
          style={{
            width: `${100 / options.length}%`, // 👈 auto adjust width
            transform: `translateX(${options.indexOf(active) * 100}%)`, // slide to active
          }}
        ></div>

        {/* Options */}
        {options.map((opt) => (
          <div
            key={opt}
            onClick={() => setActive(opt)}
            className={`z-10 flex-1 text-center cursor-pointer transition-all duration-300 font-semibold text-black py-0.5
              ${
                active === opt
                  ? "bg-[#032541] !text-[#1ed5a9] rounded-full"
                  : "text-[#032541]"
              }`}
          >
            {opt}
          </div>
        ))}
      </div>
     <CustomDropdown options={options} active={active} setActive={setActive}/>
     </div>

    <div className='overflow-x-auto px-2'>
    {getMovies?.length > 0 && (
    <div className='flex space-x-5 mt-3'>
        {getMovies.map((movie)=>(
            <div key={movie.id}>
                <div className='w-[150px] h-[225px] relative rounded-md '>
                    <Image style={{ objectFit: 'cover'}} fill sizes='500px'  src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : '/images/fallback-image.jpg'} alt='movie cards' className='rounded-md cursor-pointer' />
                        {movie.vote_average && (
                <span className={`w-8 h-8 text-xs bg-black absolute bottom-2 left-2 text-white flex items-center justify-center border-2 font-bold  rounded-full ${Math.round(movie.vote_average * 10) >= 70 ? "border-green-800 bg-black/70" : "border-yellow-500 bg-black/70"}`}>
                {Math.round(movie.vote_average * 10)}%
                </span>
            )}
                </div>
                <h2 className='text-black text-center font-bold mt-2 text-md hover:text-[#01b4e4] cursor-pointer'>{movie.original_title || movie.name}</h2>
                <p className='text-black/50 text-center text-sm'>{movie.first_air_date || movie.release_date}</p>
            </div>
        ))}
    </div>
    )}
    </div>


    </div>
    </div>
  )
}

export default Freewatch