import React from 'react'

const SectionWrapper = ({ children }) => {
  return (
    <div className=' pt-[90px] bg-bgMain h-screen flex items-center px-10'>
      <div className='max-w-7xl m-auto '>{children}</div>
    </div>
  )
}

export default SectionWrapper
