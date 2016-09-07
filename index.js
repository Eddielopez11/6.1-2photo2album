import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import MyAlbums from "./lib/MyAlbums"
import Albums from "./lib/Albums"
import Album from "./lib/Album"

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ MyAlbums }/>
    <Route path="/albums" component={ Albums }>
      <Route path="/album/:imgOne" component={ Album }/>
    </Route>
  </Router>
), document.getElementById('app'))
