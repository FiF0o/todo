import React from 'react'
// import $ from 'jquery'
// import _ from 'lodash'
import SearchGithub from './SearchGithub'

export default class App extends React.Component {
  render() {
    return (
      <div className="main-container">

          <nav className="navbar navbar-default" role="navigation">
            <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
              MENU
              <SearchGithub />
            </div>
          </nav>

          <div className="container">
            {this.props.children}
          </div>

      </div>
    )
  }
}

// this.props.children replaced by the active component