import React from 'react'
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <div className='bg-bgMain px-10 py-10'>
      <div className='flex max-w-7xl m-auto justify-between  text-white'>
        <div>
          <img src={logo} alt='' />
          <p className='pt-4 font-semibold'>
            Crossdocker is a solution by Bluesky Srl
          </p>
        </div>
        <div>
          <p>Email: info@crossdocker.it</p>
          <p>Phone: +346 67 86 525</p>
          <p>Location: Via Campestrin 4, Farra di Soligo,TV, Italy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
