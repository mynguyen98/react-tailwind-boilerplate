import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <div className='type-writer'>
      <Typewriter
        options={{
          strings: [
            `<span className=' cross-text'>Cross</span><strong className='docker-text'>Docker </strong>`,
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  )
}

export default Type
