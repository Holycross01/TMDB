"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { tmdbApi, config } from "@/screen/Lib/Api"; // Add your import
import Link from 'next/link';


const MovieDetails = () => {
  const { id } = useParams() 
  const [details, setDetails] = useState(null);
  const [moviecast, setMoviecast] = useState([])
  const [recommendation, setRecommendation] = useState([])


  const [active, setActive] = useState('active')
 const baseurl = "https://image.tmdb.org/t/p/original";

    const Icons = [{id:1 , svg:(<svg className="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
    </svg>
)}]

  const minToHours = (min) => {
    if(!min) return '';
    const hours = Math.floor( min / 60)
    const minutes = min % 60;

    return `${hours}h ${minutes}m`
  }

  const getEmojiScore = (score) => {
 if (score >= 80) return ["😍", "😊", "🔥"];
        if (score >= 60) return ["😊", "😐", "🤔"];
        if (score >= 40) return ["😐", "😕", "🙄"];
        return ["😊", "😐", "🤔"];
  }



  const fetchMovieDetails = async () => {
    try {
      // You need the movie ID to fetch specific movie details
      const { data } = await tmdbApi.get(`${config.endpoints.movieDetails}/${id}?append_to_response=images`);
      console.log("Data for fetchmoviedetails: ", data);
      setDetails(data);
      console.log("details", details);

    } catch (error) {
      console.error("error fetching ", error);
    }
  };


  const Fetchmoviecast = async ()=>{
   try{
      const {data} = await tmdbApi.get(`${config.endpoints.moviecast}/${id}/credits`)
       console.log('fetchmoviecast', data.cast)
       setMoviecast(data.cast);

   }catch(error){
    console.error('could not fetch movie cast', error)
   }

   }

  const Fetchrecommendation = async ()=>{
   try{
      const {data} = await tmdbApi.get(`${config.endpoints.moviecast}/${id}/recommendations`)
       console.log('fetch recommendations', data.results)
       setRecommendation(data.results);

   }catch(error){
    console.error('could not fetch movie cast', error)
   }

   }





  useEffect(() => {
      fetchMovieDetails();
      Fetchmoviecast();
      Fetchrecommendation();
     
  }, []);



  // Guard clause for when movieDetails is null
  if (!details) {
    return <div>Loading...</div>;
  }
  console.log("details", details);
  console.log('page id', id)

  const backgroundimgpath = `${baseurl}${details.backdrop_path}`;
  const posterimgpath = `${baseurl}${details.poster_path}`;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundimgpath})` }}
        className=" max-h-screen bg-cover bg-center relative w-full h-[500px] px-[70px] py-[50px]"
      >
        <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-black/30"></div>

          <div className="flex gap-7">
            <div className="relative w-[300px] h-[400px] ">
              <Image
                style={{ objectFit: "cover" }}
                src={posterimgpath}
                alt="movie detail card"
                className="rounded-md"
                fill
              />
            </div>

            <div className="flex-1 relative">
             <p className="text-white text-4xl my-3 font-bold">
                 {details.title} ({details.release_date?.slice(0, 4)})
</p>


              <div className="flex items-center gap-1 mb-3">
               <span className=" border border-white text-white p-1">TV-MA</span>
                  <span className="flex gap-1">
                   { details.genres?.map((genre, index)=>(
                 <span key={genre.id}>
                    <span className=" text-white">{genre.name}</span>
                 <span className="text-white">{index < details.genres.length -1 && ' ,'}</span>
               
                </span>
                
              ))}
              </span>
                {details.runtime && (
                     <span className="text-white">{minToHours(details?.runtime)}</span>  
                 )}
          
              </div>
                   

             <div className="flex gap-5 items-center mb-3">
                  <div
                    className={`w-16 h-16 text-lg bg-black text-white lg:flex items-center justify-center border-2 font-bold rounded-full hidden ${
                      Math.round(details.vote_average * 10) >= 70
                        ? "border-green-800 bg-black/70"
                        : "border-yellow-500 bg-black/70"
                    }`}
                  >
                    {Math.round(details.vote_average * 10)}% 
                  </div>
                  <div className="-ml-5">
                    <b className="text-white">user<br/>Score</b>
                  </div>

                    <div className="text-2xl">
                        {getEmojiScore(details.vote_average * 10).map((emoji, index) => (
                            <span key={index}>
                                {emoji}
                            </span>
                        ))}
                    </div>

                   <div className="bg-[#032541] text-white text-sm flex items-center justify-center px-4 py-2 rounded-full gap-1">
                       <p className="font-bold">whats your vibe?</p>
                       <svg className="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                   </div>
                  
               
             </div>



             <div className="flex items-center gap-5 mb-3">

                <span className="bg-[#032541] rounded-full p-3">
                <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"      fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
                </span>


                <span className="bg-[#032541] rounded-full p-3">
               <svg className="w-4 h-4 text-gray-800 dark:text-white invert" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
               <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
              </svg>


                </span>


                <span className="bg-[#032541] rounded-full p-3">
                  <svg className="w-4 h-4 text-white dark:text-white text-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"/>
                 </svg>

                </span>
              
                 <Link href="#" className="text-white font-bold"><span className="mr-1">▶</span>play trailer</Link> 
            
             </div>

             <div className="mb-3">
                <i className="text-lg text-white">{details.tagline}</i>
             </div>

             <div className="mb-3">
                <p className="font-bold text-xl text-white ">overview</p>
                <p className="text-sm text-white ">{details.overview}</p>
             </div>
                 
                 
             
            </div>


          </div>
        </div>
      </div>

      {/* FETCHING MOVIESCAST IMAGES AND DETAILS */}

    <div className="px-10 py-5 ">
         <h3 className="font-bold py-3">Top Billed cast</h3>

    <div className="flex space-x-3 overflow-x-auto rounded-md">
            {moviecast?.map((movie)=>(
                <div key={movie.id} className="pb-10">
                    <div className="relative w-[180px] h-[200px] ">
                      <Image style={{objectFit: 'cover'}} src={ movie.profile_path ? `${baseurl}${movie.profile_path}` : '/images/fallback-image.jpg'} fill sizes="500px" alt="movie cast" className="rounded-t-md"/>
                    </div>

                    <div className="bg-white/80 text-center items-center h-[70px] shadow-lg rounded-b-md">
                    <p className="font-bold">{movie.name}</p>
                    <p>{movie.character}</p>
                    </div>
                    
                   

                </div>
            ))}
        </div>
    </div>


    {/* Media div */}
     <div className="px-10">

         <div className="flex space-x-5 text-xl py-5"> 
    <p >Media</p>
       <button onClick={()=>setActive('popular')} className={`${active === 'popular' ? 'border-b-4 border-b-black' : ""} font-bold cursor-pointer`}>Most popular</button>
        
        <button onClick={()=> setActive('videos')} className={`${active === 'videos' ? "border-b-4 border-b-black" : ""} font-bold cursor-pointer`}>videos</button>

        <button onClick={()=> setActive('backdrops')} className={`${active === 'backdrops' ? "border-b-4 border-b-black" : ""} font-bold cursor-pointer`}>backdrops</button>

        <button onClick={()=> setActive('posters')} className={`${active === 'posters' ? "border-b-4 border-b-black" : ""} font-bold cursor-pointer`}>posters</button>
    

  </div>
      {/* POPULAR DIV */}
      <div>
        {active === 'popular' && (
         <div className="relative flex gap-3 overflow-x-auto">
            {details?.images?.backdrops?.slice(0, 5).map((movie)=>(
            <div key={movie.file_path} className=" pb-5">
                <div className="relative w-[500px] h-[300px]">
                    <Image style={{objectFit:'cover'}} src={movie.file_path ? `${baseurl}${movie.file_path}`: '/images/fallback-image.jpg'} fill sizes="500px" alt="popular movie" className="rounded-sm"/>
                </div>

            </div>
            ))}
          
         </div>
        )}
      </div>
      {/* VIDEOS DIV */}
      <div>
        {active === 'videos' && (
         <div className="relative flex overflow-x-auto">
            {details?.images?.backdrops?.slice(0, 5).map((movie)=>(
            <div key={movie.file_path} className=" pb-5">
             <div className="relative w-[300px] h-[200px]">
                    <Image style={{objectFit:'cover'}} src={movie.file_path ? `${baseurl}${movie.file_path}`: '/images/fallback-image.jpg'} fill sizes="500px" alt="videos" className="rounded-sm"/>
                    
                <div className="absolute flex justify-center items-center invert inset-0">
                    {Icons.map((icon)=>(
                        <div key={icon.id}>
                         {/* {icon.svg } */}
                          {React.cloneElement(icon.svg, { className: "w-20 h-20" })}
                        </div>
                    ))}
                </div>
          </div>

            </div>
            ))}
          
         </div>
        )}
      </div>
      {/* BACKDROPS DIV */}
      <div>
        {active === 'backdrops' && (
         <div className="relative flex gap-3 overflow-x-auto">
            {details?.images?.backdrops?.slice(0, 5).map((movie)=>(
            <div key={movie.file_path} className=" pb-5">
                <div className="relative w-[500px] h-[300px]">
                    <Image style={{objectFit:'cover'}} src={movie.file_path ? `${baseurl}${movie.file_path}`: '/images/fallback-image.jpg'} fill sizes="500px" alt="image" className="rounded-sm"/>
                </div>

            </div>
            ))}
          
         </div>
        )}
      </div>
      {/* POSTERS DIV */}
      <div>
        {active === 'posters' && (
         <div className="relative flex gap-3 overflow-x-auto">
            {details?.images?.backdrops?.slice(0, 10).map((movie)=>(
            <div key={movie.file_path} className=" pb-5">
                <div className="relative w-[200px] h-[200px]">
                    <Image style={{objectFit:'cover'}} src={movie.file_path ? `${baseurl}${movie.file_path}`: '/images/fallback-image.jpg'} fill sizes="500px" alt="image" className="rounded-sm"/>
                </div>

            </div>
            ))}
          
         </div>
        )}
      </div>




    </div>

    {/* FOR RECOMMENDATIONS */}
    <div className="px-10 py-5">
        <h3 className="font-bold text-xl my-2">Recommendations</h3>

        <div className="flex space-x-3 overflow-x-auto" >
          {recommendation?.map((movie)=>(
            <div key={movie.id}>
               <div className="relative w-[250px] h-[150px]">
                <Image style={{objectFit: 'cover'}} src={movie.backdrop_path ? `${baseurl}${movie.backdrop_path}` : '/images/fallback-image.jpg'} fill sizes="500px" alt="image" className="rounded-sm"/>
               </div>

               <div className="flex justify-between">
                <div>
                  <p>{movie.title}</p>
                </div>

                <div>
                  {Math.round (movie.vote_average * 10)}%
                  {/* {Math.round(details.vote_average * 10)}%  */}
                </div>
               </div>

            </div>
          ))}
        </div>
    </div> 
 

     



    </div>
  );
};

export default MovieDetails;
