import React from 'react'

const Input = ({ type, label, required }) => {
  return (
    <div>
      <label htmlFor='' className='pb-2'>
        {label} {required ? <span className=' text-red'>*</span> : ''}
      </label>
      <input
        type={type}
        className='w-full h-12 px-3 rounded-sm tracking-wide   border border-transparent focus:outline-none focus:placeholder-gray placeholder-text-base text-base'
      />
    </div>
  )
}

export default Input
