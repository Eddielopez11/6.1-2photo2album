import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return (
      <div>
        <div className="albums__nav">
          <Link to="/">back</Link>
          <h1>albums</h1>
        </div>
        { this.props.children }
      </div>
    )
  }
})
