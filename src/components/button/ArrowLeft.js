import React from 'react'
import slideArrowLeftIcon from '../../assets/control/slide-arrow-left.svg'
const ArrowLeft = (props) => {
  return (
    <div
      className='z-10 absolute top-1/2 left-0 -translate-y-full cursor-pointer'
      onClick={props.onClick}
    >
      <img src={slideArrowLeftIcon} alt='' />
    </div>
  )
}

export default ArrowLeft
