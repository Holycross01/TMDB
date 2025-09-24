import React from 'react'
import Backgroundimage from './backgroundimage'
import Trending from './Trending'
import Trailers from './Trailers'
import Footer from './Footer'
import Popular from './popular'
import Freewatch from './Freewatch'
import Leaderboard from './Leaderboard'


const UIBlock = () => {
  return (
    <div>
        <Backgroundimage/>
        <Trending/>
        <Trailers/>
        <Popular/>
        <Freewatch/>
        <Leaderboard/>
        <Footer/>
    </div>
  )
}

export default UIBlock