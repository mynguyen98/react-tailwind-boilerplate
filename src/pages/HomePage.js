import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import WhyChooseUs from '../components/WhyChooseUs'
import AppSection from '../components/AppSection'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <AppSection />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default HomePage
