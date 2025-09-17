"use client"

import React, { useEffect, useState } from 'react'
import { tmdbApi, config } from "@/app/screen/Lib/Api";
const Trailers = () => {
    const [trailerBackground, setTrailerBackground] = useState(null)

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
    useEffect(()=>{
        Fetchbackground();
    },[])

  return (
    <div style={{backgroundImage:trailerBackground  ? `linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url(https://image.tmdb.org/t/p/original${trailerBackground})` :  "none", backgroundSize:"cover",height:300, width:"100%",backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>

    </div>
  )
}

export default Trailers;