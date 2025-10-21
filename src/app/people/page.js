"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { tmdbApi, config } from '@/screen/Lib/Api'
import Link from 'next/link'

const Popularspeoplepage = () => {
    const [people, setPeople] = useState([])

    const fetchPopularPeople = async () =>{
        try{
            const {data} = await tmdbApi.get(config.endpoints.popularpageforpeople)
            setPeople(data.results || [])

        }catch(error){
            console.error('could not fetch resource',error)
        }
    }

     const imgSize = 'w500'
     const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${imgSize}`;

    useEffect(()=>{
        fetchPopularPeople();
    })
  return (
    <div className='my-[30px] mx-[5px] lg:mx-[30px] lg:px-15'>
        <div className='max-w-7xl mx-auto px-3'>
          <h2 className='font-semibold text-2xl -mt-2 mb-4'>popular people</h2>

          <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
            {people && people.length > 0 ? (
              people.slice(0,20).map((movie)=>(
                <Link  href={`/people/${movie.id}`} key={movie.id}>
                <div className='w-full lg:min-w-[190px]'>
                    <div className='relative h-[273px] w-full lg:h-[273px]'>
                        <Image style={{objectFit:'cover'}} src={movie.profile_path ? `${IMAGE_BASE_URL}${movie.profile_path}`: "/images/fallback-image.jpg"} fill sizes='500px' alt='movie cards' className='rounded-t-md cursor-pointer'/>
                    </div>
                    <div className='bg-white p-2 h-[100px] lg:h-[100px] shadow-md rounded-b-md'>
                        <p className='font-semibold'>{movie.name}</p>
                        <p className='text-sm text-black/50'>{movie.known_for ?.map((data)=> data.title || data.name) }</p>
                    </div>

                </div>
                </Link>
              ))
            ) : (<p>loading..</p>)}
          </div>
  

        </div>
    </div>
  )
}

export default Popularspeoplepage