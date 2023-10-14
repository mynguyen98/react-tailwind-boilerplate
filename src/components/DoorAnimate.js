import React, { useEffect, useRef } from 'react'
import doorJson from '../assets/json/animationDoor.json'

import { Player } from '@lottiefiles/react-lottie-player'

const DoorAnimate = () => {
  const playerRef = useRef()
  const wrapperRef = useRef()
  useEffect(() => {
    console.log(playerRef)
  }, [playerRef])
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // When 50% of the target is in view
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        playerRef.current.play()
        // setTimeout(() => {
        //   playerRef.current.pause()
        // }, 1200)
        return
      }
    }, options)
    observer.observe(wrapperRef.current)
  }, [])
  return (
    <div className='w-full relative' ref={wrapperRef}>
      <div className='w-full h-20 bg-doorColor translate-y-[1px]'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
        <h2 className='mb-5 text-center text-2xl md:text-4xl font-semibold'>
          Ready to <br />
          Simplify your work
        </h2>
        <p className='text-center text-black200'>
          Got questions or ready to get started with Crossdocker? Contact us
          today, and our team will be happy to assist you.
        </p>
      </div>
      <div className='w-full'>
        <Player
          autoplay={false}
          loop={false}
          src={doorJson}
          style={{ width: '100%' }}
          ref={playerRef}
          keepLastFrame={true}
        ></Player>
      </div>
    </div>
  )
}

export default DoorAnimate
