import React from 'react'
import ReactDOM from 'react-dom'

//imports components as properties of the object
import { Router, hashHistory } from 'react-router'
import AppRoutes from './config/AppRoutes'

import '../sass/main.sass'
// import Main from './components/Main'

const appEntry = document.body

ReactDOM.render(
  // handling routes of the app, which component to render depending on which route we are at
  <Router history={ hashHistory }>
    { AppRoutes }
  </Router>

  , appEntry
)
