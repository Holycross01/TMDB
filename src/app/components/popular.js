"use client"
import React, { useEffect, useState} from 'react'
import { tmdbApi, config } from '@/app/screen/Lib/Api'
import Image from 'next/image'
import CustomDropdown from './customdropdwn'

const Popular = () => {
        const options = [ "streaming", "OnTV", "For Rent", "In Theaters"];
        const [active, setActive] = useState(options[0]);
        const [streaming, setStreaming] = useState([]);
        const [ontv, setOntv] = useState([]);
        const [forrent, setForrent] = useState([]);
        const [intheaters, setIntheaters] = useState([]);


    const getStreaming = async ()=>{
   try{
      const {data} = await tmdbApi.get(config.endpoints.popularstream)
     setStreaming(data.results || [])
   }catch(error){
    console.error('error fetching popularstream', error)
   }
    }
    const getOntv = async ()=>{
   try{
      const {data} = await tmdbApi.get(config.endpoints.popularontv)
     setOntv(data.results || [])
   }catch(error){
    console.error('error fetching popularstream', error)
   }
    }
    const getForRent = async ()=>{
   try{
      const {data} = await tmdbApi.get(config.endpoints.popularforent)
     setForrent(data.results || [])
   }catch(error){
    console.error('error fetching popularstream', error)
   }
    }
    const getIntheaters = async ()=>{
   try{
      const {data} = await tmdbApi.get(config.endpoints.popularintheaters)
     setIntheaters(data.results || [])
   }catch(error){
    console.error('error fetching popularstream', error)
   }
    }

    useEffect(()=>{
        getStreaming();
        getOntv();
        getForRent();
        getIntheaters();
    },[])

    const moviesCheck = {
        "streaming": streaming,
         "OnTV": ontv,
         "For Rent": forrent,
         "In Theaters": intheaters,
    }
    const moviesToDisplay = moviesCheck[active];
    const imgsize = 'w500'
    const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${imgsize}`
  return (
    <div className='my-5 py-3 px-4'>
      <div className='flex space-x-3 items-center px-3'>
        <h2 className='font-semibold whitespace-nowrap text-xl'>what's popular</h2>
         <div className="hidden relative min-w-[400px] h-[30px] border border-[#032541] rounded-full sm:flex items-center text-sm font-medium overflow-hidden">
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
       {moviesToDisplay?.length > 0 &&(
        <div className='flex space-x-5 mt-3'>
            {moviesToDisplay.map((movie)=>(
                <div key={movie.id}>
                 <div className='w-[150px] h-[225px] relative rounded-md '>
                    <Image style={{ objectFit: 'cover'}} fill sizes='500px' src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : '/images/fallback-image.jpg'} alt='movie cards' className='rounded-md'/>
                  {movie.vote_average && (
                <span className={`w-8 h-8 text-xs bg-black absolute bottom-2 left-2 text-white flex items-center justify-center border-2 font-bold  rounded-full ${Math.round(movie.vote_average * 10) >= 70 ? "border-green-800 bg-black/70" : "border-yellow-500 bg-black/70"}`}>
                  {Math.round(movie.vote_average * 10)}%
                </span>
              )}
                 </div>
                   <h2 className='text-black text-center font-bold mt-2 text-md'>{movie.name}</h2>
                     <p className='text-black/50 text-center text-sm'>{movie.first_air_date}</p>
                </div>
            ))}
        </div>
       )}
    </div>

    </div>
  )
}

export default Popular