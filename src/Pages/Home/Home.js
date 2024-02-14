import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Information from '../../Components/Information/Information'
import Trending from '../../Components/Trending/Trending'
import "./Home.css"


function Home() {
  return (
    <div className='home'>
    <Hero/> 
    <Trending/>
    <Information/>
     </div>
  )
}

export default Home