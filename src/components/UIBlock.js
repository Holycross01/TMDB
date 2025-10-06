import React from 'react'
import Backgroundimage from './backgroundimage'
import Trending from './Trending'
import Trailers from './Trailers'
import Popular from './popular'
import Freewatch from './Freewatch'
import Leaderboard from './Leaderboard'
import Jointoday from './Jointoday'


const UIBlock = () => {
  return (
    <div>
        <Backgroundimage/>
        <Trending/>
        <Trailers/>
        <Popular/>
        <Freewatch/>
        <Jointoday/>
        <Leaderboard/>
    </div>
  )
}

export default UIBlock;