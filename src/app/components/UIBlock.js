import React from 'react'
import Backgroundimage from './backgroundimage'
import Trending from './Trending'
import Trailers from './Trailers'
import Footer from './Footer'
import Popular from './popular'
import Freewatch from './Freewatch'


const UIBlock = () => {
  return (
    <div>
        <Backgroundimage/>
        <Trending/>
        <Trailers/>
        <Popular/>
        <Freewatch/>
        <Footer/>
    </div>
  )
}

export default UIBlock