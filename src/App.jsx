import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <diV className="container">
      <Programs/>
      </diV>
    </div>
  )
}

export default App