import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { LinearProgress } from 'material-ui/Progress'

const styles = {
  root: {
    flexGrow: 1
  }
}

const END = 56 * 100 / 126

class LinearDeterminate extends React.Component {
  state = {
    completed: 0
  };

  timer = null;

  componentDidMount () {
    this.timer = setInterval(this.progress, 10)
  }

  componentWillUnmount () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  progress = () => {
    const { completed } = this.state
    if (completed !== END) {
      const diff = 1
      this.setState({ completed: Math.min(completed + diff, END) })
    } else {
      clearInterval(this.timer)
    }
  };

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <LinearProgress determinate value={this.state.completed} />
      </div>
    )
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LinearDeterminate)
