"use client"
import { tmdbApi , config } from '@/screen/Lib/Api';
import React, {useState, useEffect } from 'react'
import { useParams } from "next/navigation";
import Image from 'next/image';

const Peopledetails = () => {
    const { id } = useParams() 
    const [details, setDetails] = useState(null);



    const Persondetail = async() =>{ 
        try{
            const {data} = await tmdbApi.get(`${config.endpoints.peopleDetails}/${id}`)
            console.log('person detail', data)
            setDetails(data)

        }catch(error){
          console.error('could not fetch people detail resource', error)
        }
    }

      const imgSize = 'w500'
      const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${imgSize}`;

    useEffect(()=>{
        Persondetail();
    },[id])

      if (!details) {
        return <p className="text-center text-gray-400">Loading person details...</p>;
     }

  return (
    <div className='md:my-10 md:mx-10 mx-5 my-5'>

    <div className='flex flex-col lg:flex-row gap-2 justify-center'>

     <div className='relative w-[300px] h-[400px]'>
     <Image style={{objectFit:'cover'}} 
     src={`${IMAGE_BASE_URL}${details.profile_path}`} 
     alt="movie detail card" 
     className="rounded-lg"
     fill/>
     </div>

     <div className='flex-1'>
        <p className='font-bold text-xl'>Known for: <span className='font-normal text-lg'>{details.known_for_department}</span></p>
        <p className='font-bold text-xl'>Known credits: <span className='font-normal text-lg'>{details.also_known_as}</span></p>
        <p className='font-bold text-xl'>Name: <span className='font-normal text-lg'>{details.name}</span></p>
        <p className='font-bold text-xl'>Birthday: <span className='font-normal text-lg'>{details.birthday}</span></p>
        <p className='font-bold text-xl'>Gender: <span className='font-normal text-lg'>{details.gender}</span></p>
        <p className='font-bold text-xl'>place of birth: <span className='font-normal text-lg'>{details.place_of_birth}</span></p>
        <h2 className='font-bold'>{details.name}</h2>
        <h3 className='mt-5 font-bold text-xl'>Biography</h3>
        <p>{details.biography}</p>
     </div>

    </div>

    </div>
  )
}

export default Peopledetails