import React from 'react'

import ProgressBar from './progress-bar'

import './style.css'

const PopoverBodyContent = () => {
  return (
    <div className='p_body-content'>
      <div className='p_body-top'>
        <span className='p_body-span'>Reached:</span>
        <ProgressBar />
        <div className='p_body-target'>
          Target<br/>
          $125
        </div>
      </div>
    </div>
  )
}

export default PopoverBodyContent
