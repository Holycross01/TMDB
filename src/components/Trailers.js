"use client"

import React, { useEffect, useState } from 'react'
import { tmdbApi, config } from "@/screen/Lib/Api";
import Image from 'next/image';
import CustomDropdown from './customdropdwn';
const Trailers = () => {
    const [trailerBackground, setTrailerBackground] = useState(null)

      const options = ["Popular", "streaming", "OnTV", "For Rent", "In Theaters"];
      const [active, setActive] = useState(options[0]);

        const [popular, setPopular] = useState([]);
        const [streaming, setStreaming] = useState([]);
        const [ontv, setOntv] = useState([]);
        const [forrent, setForrent] = useState([]);
        const [intheaters, setIntheaters] = useState([]);


        const Icons = [{id:1 , svg:(<svg className="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
</svg>
)}] 

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


const imgsize = 'w500'
const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${imgsize}`

  return (
    <div className='pt-5 px-4' style={{backgroundImage:trailerBackground  ? `linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url(https://image.tmdb.org/t/p/original${trailerBackground})` :  "none", backgroundSize:"cover",height:'auto', width:"100%",backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>
    <div className='max-w-7xl mx-auto'>

<div className='flex justify-start space-x-2 lg:space-x-3 items-center px-3'>
<h2 className="font-semibold whitespace-nowrap text-xl text-white">Latest Trailers</h2>
      <div className="hidden relative min-w-[500px] h-[30px] border border-[#1ed5a9] rounded-full sm:flex items-center text-sm font-medium overflow-hidden">
        {/* Sliding indicator */}
        <div
          className="absolute top-[2px] left-0 h-[26px] rounded-full transition-all duration-300"
          style={{
            width: `${100 / options.length}%`, // 👈 auto adjust width
            transform: `translateX(${options.indexOf(active) * 100}%)`, // slide to active
       }} ></div>

        {/* Options */}
        {options.map((opt) => (
          <div
            key={opt}
            onClick={() => setActive(opt)}
            className={`z-10 flex-1 text-center cursor-pointer transition-all duration-300 font-semibold text-white py-0.5
              ${
                active === opt
                  ? "bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] !text-black rounded-full"
                  : "text-[#032541]"
              }`}
          >
            {opt}
          </div>
        ))}
      </div>

  <CustomDropdown options={options} active={active} setActive={setActive}/>

</div>
 

 <div className=' overflow-x-auto mt-3 pb-5 px-2'>
   {moviesToShow?.length > 0 && (
   <div className='flex space-x-5'>
  { moviesToShow.map((movie)=>(
        <div key={movie.id}>
            <div className='relative w-[320px] h-[200px] rounded-md cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-95'>
            <Image style={{ objectFit: 'cover'}} fill sizes='500px'  src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : '/images/fallback-image.jpg'}  alt='movie cards' className='rounded-md  cursor-pointer'/>
            <div className='absolute inset-0 flex items-center justify-center'>
             {Icons.map((icon)=>(
              <div key={icon.id}>
                <span className='invert'>{icon.svg}</span>
              </div>
            ))}
            </div>
          
            </div>
         
            <h2 className='text-white text-center mt-2 text-lg cursor-pointer'>{movie.name}</h2>
            <p className='text-white text-center '>{movie.first_air_date}</p>

        </div>
    ))}
    </div>
   )}
 </div>

    </div>
    </div>
  )
}

export default Trailers;