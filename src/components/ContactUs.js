import React from 'react'
import DoorAnimate from './DoorAnimate'
import Input from './input/Input'
import Button from './button/Button'

const ContactUs = () => {
  return (
    <div className=' bg-bgGray h-screen'>
      <div className=' mx-auto  pb-10'>
        <DoorAnimate />
        <div className='mx-auto max-w-7xl grid grid-cols-2 gap-10 pb-10 px-10 pt-24 md:pt-10'>
          <Input type='text' label='Name' required={true} />
          <Input type='text' label='Email' required={true} />
          <Input type='text' label='Phone' required={true} />
          <Input type='text' label='Address' required={true} />
        </div>
        <div className='flex justify-center items-center'>
          <Button type='secondary' text='Send' />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
