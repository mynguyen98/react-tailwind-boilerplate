import React from 'react'

const buttonClasses = {
  base: '',
  primary: {
    container:
      'border-p500 bg-white border-2 border-p500 hover:border-transparent ',
    effect: 'bg-p500',
    text: 'text-p500 group-hover:text-white',
  },
  secondary: {
    container: ' bg-p500 border-2 border-p500 ',
    effect: 'bg-white ',
    text: 'group-hover:text-p500 text-white',
  },
}

const Button = ({ type = 'primary', text }) => {
  return (
    <div className='relative rounded-3xl overflow-hidden'>
      <button
        className={` ${buttonClasses[type].container} group relative   h-12 w-48 overflow-hidden rounded-3xl text-lg shadow  `}
      >
        <div
          className={`${buttonClasses[type].effect} absolute inset-0 w-0  transition-all duration-[400ms] ease-in-out group-hover:w-full rounded-3xl`}
        ></div>
        <span className={`${buttonClasses[type].text} relative font-semibold `}>
          {text}
        </span>
      </button>
    </div>
  )
}

export default Button

//trash

//    <button class='text-p500 hover:before:bg-p500 relative py-2 w-40 overflow-hidden border-2 border-p500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute  before:rounded-xl before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-p500 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full rounded-3xl '>
//   <span class='relative z-10 text-base font-semibold'>Swipe</span>
// </button>
