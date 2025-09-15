"use client"
import React, { useEffect, useState } from 'react'
// import {config} from '@Lib/Api';
import { config, tmdbApi } from '../screen/Lib/Api'     


const Backgroundimage = () => {
    const [backDrop, setBackDrop]= useState(null)

    const FetchBackImage = async ()=>{
        try{
          const response = await tmdbApi.get(config.endpoints.backgroundApi);
            const data = response.data
            if(data.results?.length > 0){
                const randomItem = data.results[Math.floor(Math.random()* data.results.length)]
                setBackDrop(randomItem.backdrop_path)
            }
            console.log('background data>>', data)

        }catch(error){
            console.error('error fetching background image', error)
            return null
        }
    }

    useEffect(()=>{
        FetchBackImage();
    },[])

  return (
    <div className='' style={{backgroundImage:backDrop ? `linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url(https://image.tmdb.org/t/p/original${backDrop})` : "none", backgroundSize:"cover",height:300, width:"100%",backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>
    <div className='py-[30px] px-[40px]'>
       <h1 className='text-white text-5xl font-bold'>Welcome.</h1>
       <h3 className='text-white text-2xl md:text-3xl font-semibold'>Millions of movies, Tv shows and people to discover. Explore now</h3>
      <div className='relative md:mt-12 mt-5'>
        <input type="text" className='bg-white flex-1 w-full py-[10px] px-[20px] rounded-full outline-none' placeholder="search..." />
       <button className='absolute top-0 right-0 py-[10px] px-[25px] rounded-full bg-gradient-to-r from-[#1ed5a9] to-[#01b4e4] text-white' >search</button>
      </div>
       
     
       
    </div>

    </div>
  )
}

export default Backgroundimage