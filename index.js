import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import MyAlbums from "./MyAlbums"
import Albums from "./Albums"
import Album from "./Album"

render((
  <Router history={ hashHistory }>
    <Route to="/myalbums" component={ MyAlbums } />
    <Route to="/albums" component={ Albums }>
      <Route to="/album" component={ Album } />
    </Route>
  </Router>
), document.getElementById('app'))
