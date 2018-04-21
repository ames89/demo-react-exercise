import React from 'react'
import Button from 'material-ui/Button'
import Popover from 'material-ui/Popover'

import PopoverBodyContent from './popover-body-content'

import './style.css'

export default class DisplayPopover extends React.Component {
  state = {
    open: false
  };

  handleClickButton = () => {
    this.setState({
      open: true
    })
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  anchorEl = null;

  render () {
    const {
      open
    } = this.state

    return (
      <div>
        <Button
          buttonRef={(el) => {
            this.anchorEl = el
          }}
          onClick={this.handleClickButton}
        >
          My Account
        </Button>
        <Popover
          classes={{paper: 'popover-container'}}
          open={open}
          anchorEl={this.anchorEl}
          anchorReference='anchorEl'
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
        >
          <div className='popover-content'>
            <div className='popover-header'>
              Your progress
            </div>
            <div className='popover-body'>
              <PopoverBodyContent />
            </div>
          </div>
        </Popover>
      </div>
    )
  }
}
