"use client"

import React, { useEffect, useState } from 'react'
import { tmdbApi, config } from "@/app/screen/Lib/Api";
import Image from 'next/image';
const Trailers = () => {
    const [trailerBackground, setTrailerBackground] = useState(null)

      const options = ["Popular", "streaming", "OnTV", "For Rent", "In Theaters"]; // 👈 Add more here
      const [active, setActive] = useState(options[0]);

        const [popular, setPopular] = useState([]);
        const [streaming, setStreaming] = useState([]);
        const [ontv, setOntv] = useState([]);
        const [forrent, setForrent] = useState([]);
        const [intheaters, setIntheaters] = useState([]);

    const Fetchbackground = async ()=>{
   try{
    const {data} = await tmdbApi.get(config.endpoints.trailers);
    if(data.results && data.results.length > 0){
        const randomImage = Math.floor(Math.random() * data.results.length);
        const randomDisplay = data.results[randomImage]
        setTrailerBackground(randomDisplay.backdrop_path)
    }
   }catch(error){
    console.error('failed loading data', error)
   }
    }


    const FetchPopularMovie = async ()=>{
     try{
         const {data} = await tmdbApi.get(config.endpoints.popular)
        setPopular(data.results || [])
     }catch(error){
        console.log('error fetching today',error)
     }
    }

    const FetchStreaming = async () => {
  try {
    const { data } = await tmdbApi.get(config.endpoints.streaming);
    setStreaming(data.results || []);
  } catch (error) {
    console.log("error fetching streaming", error);
  }
};

const FetchOnTv = async () => {
  try {
    const { data } = await tmdbApi.get(config.endpoints.OnTv);
    setOntv(data.results || []);
  } catch (error) {
    console.log("error fetching on tv", error);
  }
};

const FetchForRent = async () => {
  try {
    const { data } = await tmdbApi.get(config.endpoints.forrent);
    setForrent(data.results || []);
  } catch (error) {
    console.log("error fetching for rent", error);
  }
};

const FetchInTheaters = async () => {
  try {
    const { data } = await tmdbApi.get(config.endpoints.intheaters);
    setIntheaters(data.results || []);
  } catch (error) {
    console.log("error fetching in theaters", error);
  }
};

    useEffect(()=>{
        Fetchbackground();
        FetchPopularMovie();
        FetchForRent();
        FetchInTheaters();
        FetchOnTv();
        FetchStreaming();
    },[])

    //  const moviesToShow = active === 'today'  ? today  : active === 'week'  ? thisWeek  : active === 'month'  ? thisMonth  : thisYear;
    const moviesMap = {
    "Popular": popular,
    "streaming": streaming,
    "OnTV": ontv,
    "For Rent": forrent,
    "In Theaters": intheaters,
};
const moviesToShow = moviesMap[active];

  return (
    <div className='pt-5' style={{backgroundImage:trailerBackground  ? `linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url(https://image.tmdb.org/t/p/original${trailerBackground})` :  "none", backgroundSize:"cover",height:'auto', width:"100%",backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>





<div className='flex space-x-5 px-3'>
<h2 className="font-semibold text-[1.4em] text-white">Latest Trailers</h2>
      <div className="hidden relative min-w-[400px] h-[30px] border border-[#1ed5a9] rounded-full sm:flex items-center text-sm font-medium overflow-hidden">
        {/* Sliding indicator */}
        <div
          className="absolute top-[2px] left-0 h-[26px] rounded-full transition-all duration-300"
          style={{
            width: `${100 / options.length}%`, // 👈 auto adjust width
            transform: `translateX(${options.indexOf(active) * 100}%)`, // 👈 slide to active
          }}
        ></div>

        {/* Options */}
        {options.map((opt) => (
          <div
            key={opt}
            onClick={() => setActive(opt)}
            className={`z-10 flex-1 text-center cursor-pointer transition-all duration-300 font-semibold text-white py-0.5
              ${
                active === opt
                  ? "bg-[#032541] text-[#1ed5a9] rounded-full"
                  : "text-[#032541]"
              }`}
          >
            {opt}
          </div>
        ))}
      </div>
</div>
 

 <div className='overflow-hidden overflow-x-auto mt-3 pb-5 px-2'>
   {moviesToShow?.length > 0 && (
   <div className='flex space-x-5'>
  { moviesToShow.map((movie)=>(
        <div key={movie.id}>
            <div className='w-[320px] h-[200px] relative rounded-md overflow-hidden'>
            <Image style={{ objectFit: 'cover'}} fill sizes='500px'  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}  alt='movie cards'/>
            </div>
         
            <h2 className='text-white text-center mt-2 text-lg'>{movie.name}</h2>
            <p className='text-white text-center '>{movie.first_air_date}</p>

        </div>
    ))}
    </div>
   )}
 </div>

    </div>
  )
}

export default Trailers;