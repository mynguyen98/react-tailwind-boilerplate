import React from 'react'
import DoorAnimate from './DoorAnimate'
import Input from './input/Input'

const ContactUs = () => {
  return (
    <div className=' bg-bgGray'>
      <div className=' mx-auto  '>
        <DoorAnimate />
        <div className='mx-auto max-w-7xl grid grid-cols-2 gap-10 pb-10 px-10'>
          <Input type='text' label='Name' required={true} />
          <Input type='text' label='Email' required={true} />
          <Input type='text' label='Phone' required={true} />
          <Input type='text' label='Address' required={true} />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
