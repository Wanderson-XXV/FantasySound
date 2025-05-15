// import React from 'react'
import Search from '../Search'

const Hero = () => {
  return (
    <div
      className = "w-full h-screen flex flex-col justify-center items-center"
    >
        <h1
          className='font-primary text-primary text-4xl heading'
        >FantasySound</h1>
        <Search/>
    </div>
  )
}

export default Hero