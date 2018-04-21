import React from 'react'
import { LinearProgress } from 'material-ui/Progress'

import './style.css'

const REALEND = 56
const VISUALEND = Math.round(REALEND * 100 / 125)

class ProgressBar extends React.Component {
  state = {
    calculatedCompleted: 0, // the number from 0 to 100 to visualize the progress bar
    visualCompleted: 0 // the visible number
  };

  timer = null;

  componentDidMount () {
    this.timer = setInterval(this.progress, 20)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  progress = () => {
    const {
      calculatedCompleted,
      visualCompleted
    } = this.state
    if (
      calculatedCompleted !== VISUALEND ||
      visualCompleted !== REALEND
    ) {
      this.setState({
        calculatedCompleted: Math.min(calculatedCompleted + 1, VISUALEND),
        visualCompleted: Math.min(visualCompleted + 1.24, REALEND)
      })
    } else {
      clearInterval(this.timer)
    }
  };

  render () {
    return (
      <div className='progress_bar-container'>
        <LinearProgress
          variant='determinate'
          value={this.state.calculatedCompleted}
          classes={{
            colorPrimary: 'progress_bar-color-primary',
            barColorPrimary: 'progress_bar-bar-color-primary'
          }}
        />
        <div
          className='progress_bar-numeric-value'
          style={{
            left: (this.state.calculatedCompleted - 6) + '%'
          }}
        >
          <i style={{display: 'block'}} className='material-icons'>keyboard_arrow_up</i>
          ${Math.round(this.state.visualCompleted)}
        </div>
      </div>
    )
  }
}

export default ProgressBar
