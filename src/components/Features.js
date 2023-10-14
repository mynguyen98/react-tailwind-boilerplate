import React, { useEffect, useRef, useState } from 'react'
import bgWordConnect from '../assets/images/bg-world-connect.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Typewriter from 'typewriter-effect'
import { FEATURES } from '../common/languages'
import Button from './button/Button'

const Features = () => {
  const animateRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // When 50% of the target is in view
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        return
      }
      setIsVisible(false)
    }, options)
    observer.observe(animateRef.current)
  }, [])
  return (
    <div
      className='  bg-center bg-cover bg-no-repeat h-screen flex  px-10 items-center'
      style={{ backgroundImage: `url(${bgWordConnect})` }}
    >
      <div className='max-w-7xl mx-auto ' ref={animateRef}>
        <div>
          <AnimationOnScroll
            className={``}
            animateIn='animate__fadeInUp'
            offset={100}
            initiallyVisible={true}
            animatePreScroll={false}
          >
            <h1 className=' text-7xl text-white font-bold text-center'>
              With <br /> CrossDocker <br /> you can
            </h1>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          className={``}
          animateIn='animate__fadeInUp'
          offset={100}
          initiallyVisible={true}
          animatePreScroll={false}
        >
          <div className='px-9 py-4 w-2/3 m-auto h-20  bg-white text-base text-black200 text-center rounded-2xl mt-7 font-semibold type-writer-features relative'>
            <div
              className='absolute top-0 left-1/2 w-0 h-0 -translate-y-full -translate-x-1/2
   border-l-[25px] border-l-transparent
   border-b-[25px] border-b-white
   border-r-[25px] border-r-transparent'
            ></div>
            {isVisible && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `<strong>Cross</strong><span className='docker-text'>Docker is here to revolutionize the way you manage
            </span> </br>
            <strong className='text-black100'>
              your shipments, pickups, and deliveries.
            </strong>`
                    )
                    // .callFunction(() => {
                    //   console.log('String typed out!')
                    // })
                    .pauseFor(2500)
                    // .deleteAll()
                    // .callFunction(() => {
                    //   console.log('All strings were deleted')
                    // })
                    .start()
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  deleteSpeed: 10,
                  delay: 10,
                }}
              />
            )}
          </div>
        </AnimationOnScroll>
        <div className='grid grid-cols-5 gap-2 mt-12'>
          {FEATURES.map((feature) => {
            return (
              <div>
                <h3 className='text-white text-base font-bold mb-4'>
                  {feature.title}
                </h3>
                <p className=' text-white'>{feature.desc}</p>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center items-center mt-6'>
          <Button type='primary' text='Request a demo' />
        </div>
      </div>
    </div>
  )
}

export default Features
