import React from 'react'
import slideArrowRightIcon from '../../assets/control/slide-arrow-right.svg'
const ArrowRight = (props) => {
  return (
    <div
      className=' z-10 absolute top-1/2 right-0 -translate-y-full cursor-pointer'
      onClick={props.onClick}
    >
      <img src={slideArrowRightIcon} alt='' />
    </div>
  )
}

export default ArrowRight
