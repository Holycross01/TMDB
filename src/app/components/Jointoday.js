import React from 'react'

const Jointoday = () => {
  return (
   <div className='relative p-7 my-7 h-auto w-full bg-cover bg-center' style={{backgroundImage:"url('/images/bckimage.webp')"}}>
    <div className="absolute inset-0 bg-black/30"></div>

      <h3 className=' relative z-10 text-3xl uppercase my-4 text-white'>Join today</h3>
   
      <p className='relative md:text-xl text-sm  text-white/70 '>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, FlixOlé, Zee5, and Sun Nxt.</p>

    
       <p className='relative pt-5 md:text-xl text-sm text-white/70'>Enjoy TMDB ad free Maintain a personal watchlist Filter by your subscribed streaming services and find something to watch Log the movies and TV shows you've seen Build custom lists Contribute to and improve our database</p>

      <button className='relative bg-green-500 my-7 text-white py-1 px-8 whitespace-nowrap '>sign up</button>
  
  



   </div>
  )
}

export default Jointoday