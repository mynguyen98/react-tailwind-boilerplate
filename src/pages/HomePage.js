import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import WhyChooseUs from '../components/WhyChooseUs'

const HomePage = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
    </div>
  )
}

export default HomePage
