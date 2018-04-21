import React from 'react'
import Icon from './info-icon.png'
import ProgressBar from './progress-bar'

import './style.css'

const PopoverBodyContent = () => {
  return (
    <div className='p_body-content'>
      <div className='p_body-top'>
        <span className='p_body-span'>Reached:</span>
        <ProgressBar />
        <div className='p_body-target'>
          Target <br />
          $125
        </div>
      </div>
      <div class='p_body-bottom'>
        <img src={Icon} className='p_body-info-icon' />
        <span>You need $69 more to reach your target.</span>
      </div>
    </div>
  )
}

export default PopoverBodyContent
