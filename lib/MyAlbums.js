import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <Link to="/albums">Albums</Link>
      <Link to="/album">Album</Link>
    )
  }
})
